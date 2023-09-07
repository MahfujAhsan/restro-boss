import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import usePayments from "../../../hooks/usePayments"
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";


const PaymentHistory = () => {
  const [payments] = usePayments();
  const {user} = useAuth();

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
    const formattedDate = `${dayOfWeek}, ${monthName} ${day}, ${year}`;

    return formattedDate;
  }

  return (
    <div>
      <SectionTitle subHeading="At a Glance!" heading="PAYMENT HISTORY" />
      <Helmet>
        <title>Bistro Boss | Payment History</title>
      </Helmet>
      <div className="w-11/12 mx-auto mt-12">
        <h2 className="text-3xl text-white uppercase text-center mb-8">Total Payments: {payments.length}</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-lg">
                <th>#</th>
                <th>Email</th>
                <th>Transaction Id</th>
                <th className="text-end">Total Price</th>
                <th className="text-end">Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {
                payments.map((item, index) => <tr className="text-white" key={item._id}>
                  <td >
                    {index + 1}
                  </td>
                  <td>
                    {
                      user?.email
                    }
                  </td>
                  <td>
                    {
                      item.transactionId
                    }
                  </td>
                  <td className="text-end">${item.price}</td>
                  <td className="text-end">
                    {
                      formatDate(item.date.slice(0, 10))
                    }
                  </td>
                </tr>)
              }

            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}

export default PaymentHistory