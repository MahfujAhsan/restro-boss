import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import { FaSpinner } from "react-icons/fa";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();

    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="h-screen flex flex-col items-center justify-center">
            <FaSpinner size={90} color="purple" />
            <progress className="progress w-96 mt-12 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700"></progress>
        </div>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
}

export default AdminRoute