import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div className="text-center h-screen flex flex-col justify-center">
            <SectionTitle subHeading="Please Process" heading="Payment" />
            {/* <h2 className="text-3xl">Pay</h2> */}
            <Elements stripe={stripePromise} className="text-center">
                <CheckoutForm cart={cart} price={price}/>
            </Elements>
        </div>
    );
};

export default Payment;