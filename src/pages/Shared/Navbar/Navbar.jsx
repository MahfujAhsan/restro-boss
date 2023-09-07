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
        <li className="hover:outline hover:outline-none md:hover:outline-2 hover:rounded-md hover:text-black hover:outline-transparent md:hover:outline-white transition-all">
            <NavLink className="hover:text-white" to="/">Home</NavLink>
        </li>
        <li className="hover:outline hover:outline-none hover:outline-2 hover:rounded-md hover:text-black mx-0 md:mx-4 hover:outline-transparent md:hover:outline-white transition-all">
            <NavLink className="hover:text-white" to="/menu">Our Menu</NavLink>
        </li>
        <li className="hover:outline hover:outline-none  md:hover:outline-2 hover:rounded-md hover:text-black mx-0 md:mx-4 hover:outline-transparent md:hover:outline-white transition-all">
            <NavLink className="hover:text-white" to="/order/salad">Order Food</NavLink>
        </li>
        <li className="hover:outline hover:outline-none  md:hover:outline-2 hover:rounded-md hover:text-black mx-0 md:mx-4 hover:outline-transparent md:hover:outline-white transition-all">
            <NavLink className="hover:text-white" to="/contact">Contact</NavLink>
        </li>
        {/* <li className="hover:outline hover:outline-2 hover:rounded-md hover:text-black mx-4 hover:outline-white transition-all">
            <NavLink className="hover:text-white" to="/secret">Secret</NavLink>
        </li> */}
        {
            user && <>
                {
                    isAdmin ? <li className="hover:outline hover:outline-2 hover:rounded-md hover:text-black mx-0 md:mx-4 hover:outline-white transition-all">
                        <NavLink className="hover:text-white" to="/dashboard/admin-home">Dashboard</NavLink>
                    </li> : <li className="hover:outline hover:outline-2 hover:rounded-md hover:text-black mx-0 md:mx-4 hover:outline-white transition-all">
                        <NavLink className="hover:text-white" to="/dashboard/user-home">Dashboard</NavLink>
                    </li>
                }
            </>
        }
        {
            user && <>
                {
                    isAdmin ? <></> : <li className="hover:outline hover:outline-2 hover:rounded-md hover:text-black mx-0 md:mx-4 hover:outline-white transition-all">
                        <Link className="hover:text-white" to="/dashboard/my-cart">
                            <button className="flex items-center space-x-2">
                                <BiSolidCartAdd size={28} />
                                <div className="badge">
                                    <p className="mb-[2px]">+{cart?.length || 0}</p>
                                </div>
                            </button>
                        </Link>
                    </li>
                }
            </>
        }
        {
            <div className="block md:hidden flex-shrink-0 mt-2">
                {
                    user ? <>
                        <button onClick={handleLogOut} className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 px-2 py-[7px] rounded-md uppercase text-sm flex justify-center items-center space-x-2 font-semibold hover:bg-opacity-10 transition-all w-full">
                            <span>{user?.displayName}</span>
                            <FiLogOut size={20} />
                        </button>
                    </> : <>
                        <Link className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700  px-3 py-[7px] rounded-md uppercase text-sm flex justify-center items-center space-x-2 font-semibold hover:bg-opacity-10 transition-all" to="/login">
                            <span>Login</span>
                            <FiLogIn size={20} />
                        </Link>
                    </>
                }
            </div>
        }
    </>
    return (
        <>
            <nav className="navbar flex-col md:flex-row fixed z-10 bg-black/30 backdrop-blur-xl bg-opacity-40 w-full  md:max-w-screen-xl text-white  mx-auto rounded-b-lg">
                <div className="navbar-start flex-row-reverse justify-between md:justify-start md:flex-row w-full">
                    <div className="dropdown bg-black rounded-lg">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52 -right-1 justify-center items-center">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn-ghost text-xl uppercase flex-col px-0 md:px-[16px]">
                        <p className="font-bold text-[16px] md:text-[20px]">Bistro Boss</p>
                        <p className="tracking-normal md:tracking-[2px] text-[17px] md:text-[18px] font-semibold leading-none md:leading-6">Restaurant</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold items-center">
                        {menuItems}
                    </ul>
                </div>

                <div className="hidden md:block flex-shrink-0">
                    {
                        user ? <>
                            <button onClick={handleLogOut} className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 px-5 py-[7px] rounded-md uppercase text-sm flex items-center space-x-2 font-semibold hover:bg-opacity-10 transition-all w-full">
                                <span>{user?.displayName}</span>
                                <FiLogOut size={20} />
                            </button>
                        </> : <>
                            <Link className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700  px-5 py-[7px] rounded-md uppercase text-sm flex items-center space-x-2 font-semibold hover:bg-opacity-10 transition-all" to="/login">
                                <span>Login</span>
                                <FiLogIn size={20} />
                            </Link>
                        </>
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar