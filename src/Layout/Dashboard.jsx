import { NavLink, Outlet } from "react-router-dom"
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();
    // TODO
    const isAdmin = true;
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content">

                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/home'><FaHome /> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservations'><FaUtensils /> Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaWallet /> Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaBook /> Manage Bookings</NavLink></li>
                            <li><NavLink to='/dashboard/all-users'><FaUsers /> All Users</NavLink></li>
                            
                        </> : <>
                            <li><NavLink to='/dashboard/home'><FaHome /> User Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservations'><FaCalendarAlt /> Reservations</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaWallet /> Payment History</NavLink></li>
                            <li>
                                <NavLink to='/dashboard/my-cart'><FaShoppingCart /> MyCart <span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink>
                            </li>
                        </>
                    }


                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"><FaHome /> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">Our Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">Order Food</NavLink>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Dashboard