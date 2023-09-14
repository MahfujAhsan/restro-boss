import { useQuery } from "@tanstack/react-query"
import { Helmet } from "react-helmet-async"
import { FaSpinner, FaTrashAlt, FaUserShield } from "react-icons/fa"
import Swal from "sweetalert2"
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import './AllUsers.css';


const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch, isLoading } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/api/v1/users')
        return res.data;
    });

    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `admin access goes to ${user.name}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Make Admin!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`https://bistro-boss-server-v2.vercel.app/api/v1/users/admin/${user._id}`)
                    .then(response => {
                        if (response.status === 200) {
                            refetch();
                            Swal.fire(
                                'Success!',
                                `${user?.name} is Admin now.`,
                                'success'
                            )
                        }
                    })
            }
        })
    }

    const handleDelete = (user) => {
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
                axiosSecure.delete(`/api/v1/users/${user._id}`)
                    .then(res => {
                        if (res.status === 200) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `${user?.name} has been deleted.`,
                                'success'
                            )
                        }
                        if (res.data.error) {
                            Swal.fire(
                                'Error',
                                `${res.data.error}`,
                                'error'
                            )
                        }
                    })
            }

        })

    }

    if (isLoading) {
        return <div className="h-screen flex justify-center items-center">
            <FaSpinner size={90} color="purple" />
        </div>
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <h3 className="text-3xl font-bold my-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="text-transparent text-lg bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-white">
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? <span className="uppercase text-xs bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 px-4 py-2 rounded-md font-semibold shadow-inner shadow-white text-center">Admin</span> :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-pink-700 text-white"><FaUserShield size={24} /></button>
                                }</td>
                                <td>
                                    <img className="w-14 h-14 rounded-full" src={user.image} alt="user" />
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt size={20} /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllUsers