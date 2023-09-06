import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useReviews = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');

    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: reviews = [] } = useQuery({
        queryKey: ['userReviews', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure(`/api/v1/reviews?email=${user?.email}`)
            return response.data;
        },
    })
    return [reviews, refetch]
}

export default useReviews