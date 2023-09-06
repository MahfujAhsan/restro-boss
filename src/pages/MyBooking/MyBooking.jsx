import SectionTitle from "../../components/SectionTitle/SectionTitle"
import useBooking from "../../hooks/useBooking"


const MyBooking = () => {
  const [booking] = useBooking();
  console.log(booking)
  return (
    <div>
      <SectionTitle subHeading="Excellent Ambience" heading="MY BOOKINGS"/>
    </div>
  )
}

export default MyBooking