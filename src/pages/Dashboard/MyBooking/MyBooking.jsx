import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import useBooking from "../../../hooks/useBooking"
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";


const MyBooking = () => {
  const [booking, refetch] = useBooking();
  console.log(booking)

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
        fetch(`https://bistro-boss-server-v2.vercel.app/api/v1/booking/${item._id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then((data) => {
            if (data.message) {
              refetch();
              Swal.fire(
                'Deleted!',
                `${data?.message}`,
                'success'
              )
            }
          })
      }
    })
  };

  function formatDate(inputDate) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const daysOfWeek = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    const parts = inputDate.split('-');
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1; // Months are zero-based in JavaScript
    const day = parseInt(parts[2]);

    const date = new Date(year, month, day);
    const dayOfWeek = daysOfWeek[date.getUTCDay()];
    const monthName = months[date.getUTCMonth()];
    const formattedDate = `${dayOfWeek}, ${monthName} ${day}`;

    return formattedDate;
  }
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Bookings</title>
      </Helmet>
      <SectionTitle subHeading="Excellent Ambience" heading="MY BOOKINGS" />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-lg">
              <th>#</th>
              <th>Guest</th>
              <th>Item Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              booking.map((item, index) => <tr className="text-white" key={item._id}>
                <td >
                  {index + 1}
                </td>
                <td>
                  {item?.name}
                </td>
                <td>
                  {
                    item.guest
                  }
                </td>
                <td>{formatDate(item.date.slice(0, 10))}</td>
                <td>{item.time.slice(0, 5)}</td>
                <td>
                  <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt size={20} /></button>
                </td>
              </tr>)
            }

          </tbody>

        </table>
      </div>
    </div>
  )
}

export default MyBooking