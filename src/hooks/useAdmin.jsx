import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/api/v1/users/admin/${user?.email}`);
                return res?.data?.admin;
            } catch (error) {
                // Handle the error, e.g., log it or display an error message.
                console.error("Error fetching isAdmin data:", error);
                throw error; // Rethrow the error to propagate it to the caller.
            }
        }
    })
    return [isAdmin, isAdminLoading];
}

export default useAdmin;