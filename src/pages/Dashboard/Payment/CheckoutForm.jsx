import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import './CheckoutForm.css'


const CheckoutForm = ({ cart, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post("/create-payment-intent", { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        console.log(card)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
            console.log(paymentMethod)
        }

        setProcessing(true)

        console.log(clientSecret)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'Anonymous',
                        name: user?.displayName || 'Anonymous',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError)
        }
        console.log(paymentIntent)
        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                status: 'Service Pending',
                itemNames: cart.map(item => item.name)
            }
            axiosSecure.post("/payments", payment)
                .then(res => {
                    console.log(res.data)

                })
        }
    }
    return (
        <section>
            <form className="w-full my-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-outline btn-primary mt-4 w-5/12 border border-purple-700 hover:bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 hover:border-none" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 font-semibold mb-2">{cardError}</p>}
            {transactionId && <p className="text-green-600 font-bold">Transaction Complete with, <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-lg">{transactionId}</span></p>}
        </section>
    )
}

export default CheckoutForm