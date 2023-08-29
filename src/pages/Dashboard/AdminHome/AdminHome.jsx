import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis, PieChart, Pie, ResponsiveContainer, Legend, Tooltip } from "recharts";
import './AdminHome.css'
import { FaSpinner } from "react-icons/fa";


const AdminHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: stats = {}, isLoading } = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    });

    const { data: chartData = [] } = useQuery({
        queryKey: ['chartData'],
        queryFn: async () => {
            const res = await axiosSecure('/order-stats');
            return res.data;
        }
    })

    const colors = ['#0088FE', '#00C49F', '#BD1960', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" className="font-semibold text-center text-xs" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    if (isLoading) {
        return <div className="flex h-screen items-center justify-center"><FaSpinner size={90} color="purple"/></div>
    }
    return (
        <div className="w-full">
            <h2 className="text-3xl text-center uppercase font-semibold my-16"><span className="font-mono text-slate-500">Welcome Back,</span> <span className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">{user?.displayName}</span></h2>
            <div className="flex justify-center">
                <div className="stats shadow text-center w-full mb-16 rounded-md bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white">

                    <div className="stat  border-white">
                        <div className="stat-title text-white font-semibold uppercase text-xs">Revenue</div>
                        <div className="stat-value">${stats.revenue}+</div>
                    </div>

                    <div className="stat border border-white">
                        <div className="stat-title text-white font-semibold uppercase text-xs">Menu Items</div>
                        <div className="stat-value">{stats.products}+</div>
                    </div>

                    <div className="stat border border-white">
                        <div className="stat-title text-white font-semibold uppercase text-xs">New Users</div>
                        <div className="stat-value">{stats.users}+</div>
                    </div>

                    <div className="stat border border-white">
                        <div className="stat-title text-white font-semibold uppercase text-xs">Orders</div>
                        <div className="stat-value">{stats.orders}+</div>
                    </div>
                </div>
            </div>
            <div className="flex ">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={350}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#D1A054" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={500} height={300}
                            >
                            <Legend />
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={130}
                                fill="#8884d8"
                                dataKey="count"
                                height={500}
                                viewBox="0 0 730 500"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell name={entry.category} key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Pie>
                            <Tooltip content={chartData}/>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;