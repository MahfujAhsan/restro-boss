import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UpdateItem from "../pages/Dashboard/ManageItems/UpdateItem";
import DisplayError from "../pages/Shared/DisplayError/DisplayError";
import Reservation from "../pages/Dashboard/Reservation/Reservation";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import AddReview from "../pages/AddReview/AddReview";
import MyBooking from "../pages/MyBooking/MyBooking";
import NotFound from "../pages/Shared/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "menu",
                element: <Menu />
            },
            {
                path: "order/:category",
                element: <Order />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <SignUp />
            },
            {
                path: "secret",
                element: <PrivateRoute><Secret /></PrivateRoute>
            }
        ]
    },
    {
        path: 'dashboard',
        errorElement: <DisplayError />,
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: 'user-home',
                element: <UserHome />
            },
            {
                path: 'reservation',
                element: <Reservation />
            },
            {
                path: 'payment-history',
                element: <PaymentHistory />
            },
            {
                path: 'review',
                element: <AddReview />
            },
            {
                path: 'booking',
                element: <MyBooking />
            },
            {
                path: 'my-cart',
                element: <MyCart />
            },
            {
                path: 'payment',
                element: <Payment />
            },
            {
                path: 'admin-home',
                element: <AdminRoute><AdminHome /></AdminRoute>
            },
            {
                path: 'add-item',
                element: <AdminRoute><AddItem /></AdminRoute>
            },
            {
                path: "manage-items",
                element: <AdminRoute><ManageItems /></AdminRoute>
            },
            {
                path: 'update/:itemId',
                element: <AdminRoute><UpdateItem /></AdminRoute>
            },
            {
                path: 'all-users',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            
            
        ]
    },

    {
        path: '*', // Match any path
        element: <NotFound />// Replace 'NotFound' with your 404 component
    }
]);