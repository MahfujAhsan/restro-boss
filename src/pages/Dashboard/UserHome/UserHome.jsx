import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import useBooking from "../../../hooks/useBooking";
import useReviews from "../../../hooks/useReviews";
import usePayments from "../../../hooks/usePayments";


const UserHome = () => {
    const { user } = useAuth();
    const [cart] = useCart();
    const [booking] = useBooking();
    const [reviews] = useReviews();
    const [payments] = usePayments();

    return (
        <div className="grid grid-cols-2 place-items-center h-screen text-white gap-x-8">
            <div className="text-center bg-gradient-to-r from-pink-700 via-purple-700 to-pink-700 w-full rounded-md py-16">

                <img className="h-40 w-40 mx-auto rounded-full" src={user?.photoURL} alt="" />
                <h2 className="text-2xl font-semibold mt-4 uppercase">{user?.displayName}</h2>
                {/* <h2 className="text-2xl font-semibold mt-4">{user?.email}</h2> */}
            </div>
            <div className="w-full py-16 text-center">
                <h2 className="text-4xl font-semibold mt-4 bg-gradient-to-r from-pink-700 via-indigo-700 to-purple-700 py-2 rounded-md">Your Activities</h2>
                <div className="mt-8 grid grid-cols-2 gap-y-[70px] gap-x-[15px]">
                    <h4 className="text-xl font-semibold uppercase bg-slate-400 py-1 rounded-md"><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">Orders:</span> <span className="font-bold">{cart?.length || 0}</span></h4>
                    <h4 className="text-white text-xl font-semibold uppercase bg-slate-400 py-1 rounded-md"><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">Booking:</span>  <span className="font-bold">{booking?.length || 0}</span></h4>
                    <h4 className="text-white  text-xl font-semibold uppercase  bg-slate-400 py-1 rounded-md"><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">Reviews:</span> <span className="font-bold">{reviews?.length || 0}</span></h4>
                    <h4 className="text-white  text-xl font-semibold uppercase bg-slate-400 py-1 rounded-md"><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">Payments:</span> <span className="font-bold">{payments?.length || 0}</span></h4>
                </div>
            </div>
        </div>
    );
};

export default UserHome;