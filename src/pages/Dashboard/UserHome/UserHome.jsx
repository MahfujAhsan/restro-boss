import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import useBooking from "../../../hooks/useBooking";


const UserHome = () => {
    const { user } = useAuth();
    const [cart] = useCart();
    const [booking] = useBooking()

    

    console.log(booking)

    // console.log(cart)
    // console.log(user)
    return (
        <div className="grid grid-cols-2 place-items-center h-screen text-white">
            <div className="text-center bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 w-full py-16 rounded-md">

                <img className="h-40 w-40 mx-auto rounded-full" src={user?.photoURL} alt="" />
                <h2 className="text-2xl font-semibold mt-4">{user?.displayName}</h2>
            </div>
            <div className="w-full py-16 text-center">
                <h2 className="text-3xl font-semibold mt-4">Your Activities</h2>
                <div className="grid grid-cols-2">
                    <h4 className="text-white text-xl">Orders: {cart?.length || 0}</h4>
                    <h4 className="text-white">Booking: {booking?.length || 0}</h4>
                </div>
            </div>
        </div>
    );
};

export default UserHome;