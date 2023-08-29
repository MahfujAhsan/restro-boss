import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaSpinner } from "react-icons/fa";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    const location = useLocation();

    if (loading) {
        return <div className="h-screen flex flex-col items-center justify-center">
            <FaSpinner size={90} color="purple"/>
            <progress className="progress w-96 mt-12 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700"></progress>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}

export default PrivateRoute