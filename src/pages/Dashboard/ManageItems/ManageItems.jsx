import { FaTrashAlt, FaEdit, FaSpinner } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import useMenu from "../../../hooks/useMenu"
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import './ManageItem.css'
import { Helmet } from "react-helmet-async";


const ManageItems = () => {
    const [menu, loading , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/api/v1/menu/${item._id}`)
                    .then(res => {
                        if (res.status === 200) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `${item?.name} has been deleted.`,
                                'success'
                            )
                        }
                    })
            }
        })
    };

    if (loading) {
        return <div className="flex h-screen items-center justify-center"><FaSpinner size={90} color="purple"/></div>
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | Manage Items</title>
            </Helmet>
            <SectionTitle heading="Manage All Items" subHeading="Hurry Up" />
            <div className="overflow-x-auto">
                <table className="table text-slate-100">
                    {/* head */}
                    <thead>
                        <tr className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-lg">
                            <th>
                                #
                            </th>
                            <th>Item</th>
                            <th>Category</th>
                            <th className="text-end">Price</th>
                            <th className="text-end">Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <td>
                                    {
                                        index + 1
                                    }
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="uppercase text-xs">
                                    {item.category}
                                </td>
                                <td className="text-right">${item.price}</td>
                                <td className="text-end">
                                    <Link to={`/dashboard/update/${item._id}`}><button className="btn btn-ghost bg-indigo-700 text-white"><FaEdit size={20}/></button></Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white ml-2"><FaTrashAlt size={20}/></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                        
                </table>
            </div>
        </div>
    )
}

export default ManageItems