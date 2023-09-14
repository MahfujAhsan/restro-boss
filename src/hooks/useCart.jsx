import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');

    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const response = await fetch(`https://bistro-boss-server-v2.vercel.app/carts?email=${user?.email}`, {
        //         headers: {
        //             authorization: `Bearer ${token}`
        //         }
        //     })
        //     return response.json()
        // },
        queryFn: async () => {
            try {
                const response = await axiosSecure(`/api/v1/carts?email=${user?.email}`)
                return response?.data;
            } catch (error) {
                // Handle the error, e.g., log it or display an error message.
                console.error("Error fetching cart data:", error);
                throw error; // Rethrow the error to propagate it to the caller.
            }
        },
    })
    return [cart, refetch]
}

export default useCart;