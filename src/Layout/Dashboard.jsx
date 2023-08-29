import { NavLink, Outlet } from "react-router-dom"
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers, FaShoppingBag } from 'react-icons/fa';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import './Dashboard.css'
import { BiMenuAltLeft, BiSolidEnvelope } from 'react-icons/bi';


const Dashboard = () => {
    const [cart] = useCart();
    // TODO
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content px-4 bg-black rounded-tr-3xl rounded-br-3xl">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet />

            </div>
            <div className="drawer-side  bg-gradient-to-r from-[#D1A054] via-bg-[#cc851b] to-pink-700 rounded-tl-3xl rounded-bl-3xl">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content text-lg font-semibold">

                    {
                        isAdmin ? <>
                            <li><NavLink className="hover:text-white" to='/dashboard/admin-home'><FaHome /> Admin Home</NavLink></li>
                            <li><NavLink className="hover:text-white" to='/dashboard/add-item'><FaUtensils /> Add an Item</NavLink></li>
                            <li><NavLink className="hover:text-white" to='/dashboard/manage-items'><FaWallet /> Manage Items</NavLink></li>
                            <li><NavLink className="hover:text-white" to='/dashboard/history'><FaBook /> Manage Bookings</NavLink></li>
                            <li><NavLink className="hover:text-white" to='/dashboard/all-users'><FaUsers /> All Users</NavLink></li>

                        </> : <>
                            <li><NavLink className="hover:text-white" to='/dashboard/user-home'><FaHome /> User Home</NavLink></li>
                            <li><NavLink className="hover:text-white" to='/dashboard/reservations'><FaCalendarAlt /> Reservations</NavLink></li>
                            <li><NavLink className="hover:text-white" to='/dashboard/history'><FaWallet /> Payment History</NavLink></li>
                            <li>
                                <NavLink className="hover:text-white" to='/dashboard/my-cart'><FaShoppingCart /> MyCart <span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink>
                            </li>
                        </>
                    }


                    <div className="divider"></div>
                    <li>
                        <NavLink className="hover:text-white text-base" to="/"><FaHome size={22} /> Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="hover:text-white text-base" to="/menu"><BiMenuAltLeft size={22}/> Menu</NavLink>
                    </li>
                    <li>
                        <NavLink className="hover:text-white text-base" to="/order/salad"><FaShoppingBag size={22}/> Shop</NavLink>
                    </li>
                    <li>
                        <NavLink className="hover:text-white text-base" to="/"> <BiSolidEnvelope size={22} /> Contact</NavLink>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Dashboard