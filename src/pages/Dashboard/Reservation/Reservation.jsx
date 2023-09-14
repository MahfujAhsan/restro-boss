import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import './Reservation.css'
import { Controller, useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { FaPhoneAlt, FaClock, FaLocationArrow } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
// import { ImClock2 } from 'react-icons/im';
// import { IoLocationSharp } from 'react-icons/io';


const Reservation = () => {
    const [axiosSecure] = useAxiosSecure();

    const { user } = useAuth();

    const isDateDisabled = (currentDate) => {
        const today = new Date();
        // Disable dates in the past
        return currentDate >= today;
    };

    const { register, control, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const date = data.date._d.toString().slice(0, 15);
        const time = data.time._d.toString().slice(16, 25);
        const bookingInfo = {
            date,
            time,
            guest: data.guest,
            name: data.name,
            phone: data.phone,
            email: data.email
        }
        axiosSecure.post('https://bistro-boss-server-v2.vercel.app/api/v1/booking', bookingInfo)
            .then((res) => {
                if (res.status === 201) {
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Booking Successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <SectionTitle subHeading="Reservation" heading="Book a Table" />
            <Helmet>
                <title>Bistro Boss | Reservation</title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)} className="text-center">
                <div className="grid grid-cols-3 gap-x-8 gap-y-4">
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold text-slate-500">Date*</span>
                        </label>
                        <Controller
                            name="date" // Name of the field
                            control={control}
                            defaultValue="dd/mm/yyyy" // Set the default value if needed
                            render={({ field }) => (
                                <Datetime
                                    {...field}
                                    timeFormat={false}
                                    // initialValue={"mm/dd/yyyy"}
                                    isValidDate={isDateDisabled}
                                    inputProps={{ readOnly: true }}
                                />
                            )}
                        />
                        {errors.date && <p className="error">Date is required</p>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold text-slate-500">Time*</span>
                        </label>
                        <Controller
                            name="time" // Name of the field
                            control={control}
                            defaultValue="-- / -- --" // Set the default value if needed
                            render={({ field }) => (
                                <Datetime
                                    {...field}
                                    dateFormat={false}
                                    // initialValue={"-- / -- --"}
                                    inputProps={{ readOnly: true }}
                                />
                            )}
                        />
                    </div>

                    {/* <select {...register("guest", { required: true })} className="rounded-lg p-2">
                        <option selected>Pick One</option>
                        <option>1 Person</option>
                    </select> */}

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold text-slate-500">Guest*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("guest", { required: true })} className="select select-bordered border border-purple-700">
                            <option selected>1 Person</option>
                            <option>2 Person</option>
                            <option>3 Person</option>
                            <option>4 Person</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold text-slate-500">Name*</span>
                        </label>
                        <input defaultValue={user?.displayName} {...register("name", { required: true })} type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold text-slate-500">Phone*</span>
                        </label>
                        <input {...register("phone", { required: true })} type="tel" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        {errors.phone && <p className="text-red-700 mt-1">Phone is required</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold text-slate-500">Email*</span>
                        </label>
                        <input defaultValue={user?.email} {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                {/* <input type="submit" value="Booking" className="btn"/> */}
                <button className="btn btn-primary mt-4 w-1/2 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white text-lg border-none" type="submit">Booking a Table</button>
            </form>

            <SectionTitle subHeading="Visit Us" heading="Our Location" />

            <div className="grid grid-cols-3  bg-[#F3F3F3] w-full rounded-2xl py-2 gap-x-4 px-2">
                <div className="text-center">
                    <div className="bg-[#D1A054] py-2 rounded-md">
                        <FaPhoneAlt className="w-full" color="white" />
                    </div>
                    <div className="my-2">
                        <h4 className="uppercase text-xs font-semibold">Phone</h4>
                        <p>(+880) 1776529824</p>
                    </div>
                </div>
                <div className="text-center">
                    <div className="bg-[#D1A054] py-2 rounded-md">
                        <FaLocationArrow className="w-full" color="white" />
                    </div>
                    <div className="my-2">
                        <h4 className="uppercase text-xs font-semibold">Address</h4>
                        <p>House - 14, Sector - 12, Uttara</p>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className="text-center">
                    <div className="bg-[#D1A054] py-2 rounded-md">
                        <FaClock className="w-full" color="white" />
                    </div>
                    <div className="my-2">
                        <h4 className="uppercase text-xs font-semibold">Working Hours</h4>
                        <p>Mon - Fri: 08:00 - 22:00
                            <br />
                            Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reservation