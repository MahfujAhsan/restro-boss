import { Link, NavLink } from "react-router-dom"
import { BiSolidCartAdd } from 'react-icons/bi';
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import './Navbar.css'

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((err) => console.log(err))
    }

    const menuItems = <>
        <li className="hover:outline hover:outline-2 hover:rounded-md hover:text-black hover:outline-white transition-all">
            <NavLink className="hover:text-white" to="/">Home</NavLink>
        </li>
        <li className="hover:outline hover:outline-2 hover:rounded-md hover:text-black mx-4 hover:outline-white transition-all">
            <NavLink className="hover:text-white" to="/menu">Our Menu</NavLink>
        </li>
        <li className="hover:outline hover:outline-2 hover:rounded-md hover:text-black mx-4 hover:outline-white transition-all">
            <NavLink className="hover:text-white" to="/order/salad">Order Food</NavLink>
        </li>
        {
            isAdmin ? <li className="hover:outline hover:outline-2 hover:rounded-md hover:text-black mx-4 hover:outline-white transition-all">
                <NavLink className="hover:text-white" to="/dashboard/admin-home">Dashboard</NavLink>
            </li> : <li className="hover:outline hover:outline-2 hover:rounded-md hover:text-black mx-4 hover:outline-white transition-all">
                    <NavLink className="hover:text-white" to="/dashboard/user-home">Dashboard</NavLink>
            </li>
        }
        <li className="hover:outline hover:outline-2 hover:rounded-md hover:text-black mx-4 hover:outline-white transition-all">
            <Link className="hover:text-white" to="/dashboard/my-cart">
                <button className="flex items-center space-x-2">
                    <BiSolidCartAdd size={28} />
                    <div className="badge">
                        <p className="mb-[2px]">+{cart?.length || 0}</p>
                    </div>
                </button>
            </Link>
        </li>
    </>
    return (
        <>
            <nav className="navbar fixed z-10 bg-black/30 backdrop-blur-xl bg-opacity-40 text-white max-w-screen-xl mx-auto rounded-b-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className=" btn-ghost text-xl uppercase flex-col px-[16px]">
                        <p className="font-bold  ">Bistro Boss</p>
                        <p className="tracking-[2px] text-[18px] font-semibold">Restaurant</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold items-center">
                        {menuItems}
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ? <>
                            <button onClick={handleLogOut} className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 px-5 py-[7px] rounded-md uppercase text-sm flex items-center space-x-2 font-semibold hover:bg-opacity-10 transition-all">
                                <span>{user?.displayName}</span>
                                <FiLogOut size={20} />
                            </button>
                        </> : <>
                                <Link className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700  px-5 py-[7px] rounded-md uppercase text-sm flex items-center space-x-2 font-semibold hover:bg-opacity-10 transition-all" to="/login">
                                <span>Login</span>
                                <FiLogIn size={20}/>
                            </Link>
                        </>
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar