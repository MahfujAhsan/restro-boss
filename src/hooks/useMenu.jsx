import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('https://bistro-boss-server-v2.vercel.app/menu')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setMenu(data);
    //             setLoading(false);
    //         })
    // }, []);
    const { data: menu = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('https://bistro-boss-server-v2.vercel.app/api/v1/menu');
            return res.json();
        }
    });
    return [menu.data, loading, refetch]
}

export default useMenu;