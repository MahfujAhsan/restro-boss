import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useBooking = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');

    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: booking = [] } = useQuery({
        queryKey: ['booking', user?.email],
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
            const response = await axiosSecure(`/api/v1/booking?email=${user?.email}`)
            return response.data;
        },
    })
    return [booking, refetch]
}

export default useBooking