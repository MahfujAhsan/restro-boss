import { Helmet } from "react-helmet-async"
import useCart from "../../../hooks/useCart"
import { FaTrashAlt } from 'react-icons/fa'
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { BsCreditCard2Back } from 'react-icons/bs';


const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {

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
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then((data) => {
            console.log(data)
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
      }
    })
  }
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="uppercase font-semibold h-[60px] flex justify-between px-4 items-center ">
        <h3 className="text-xl text-slate-200">Total Items: {cart?.length}</h3>
        <h3 className="text-xl text-slate-200">Total Price: ${total}</h3>
        <Link to="/dashboard/payment">
          <button className="btn btn-warning btn-sm font-semibold">PAY <BsCreditCard2Back /></button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-lg">
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th className="text-end">Price</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((item, index) => <tr className = "text-white" key={item._id}>
                <td >
                  {index + 1}
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td>
                  {
                    item.name
                  }
                </td>
                <td className="text-end">${item.price}</td>
                <td className="text-end">
                  <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt size={20}/></button>
                </td>
              </tr>)
            }

          </tbody>

        </table>
      </div>
    </div>
  )
}

export default MyCart