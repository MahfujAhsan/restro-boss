import Cover from "../Shared/Cover/Cover";
import contactCover from '../../assets/contact/banner.jpg';
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaClock, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Contact</title>
      </Helmet>
      <Cover img={contactCover} title={"Contact Us"} />
      <div className="w-10/12 mx-auto">
        <SectionTitle subHeading="Visit Us" heading="OUR LOCATION" />
        <div className="grid grid-cols-3 bg-white border  w-full rounded-2xl py-8 gap-x-4 px-8">
          <div className="text-center border border-white bg-[#F3F3F3] pb-8 rounded-md">
            <div className="bg-[#D1A054] py-2 rounded-b-md">
              <FaPhoneAlt className="w-full" color="white" />
            </div>
            <div className="my-2">
              <h4 className="uppercase text-xs font-semibold">Phone</h4>
              <p>(+880) 1776529824</p>
            </div>
          </div>
          <div className="text-center border border-white bg-[#F3F3F3] pb-8 rounded-md">
            <div className="bg-[#D1A054] py-2 rounded-b-md">
              <FaLocationArrow className="w-full" color="white" />
            </div>
            <div className="my-2">
              <h4 className="uppercase text-xs font-semibold">Address</h4>
              <p>House - 14, Sector - 12, Uttara</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="text-center border border-white bg-[#F3F3F3] pb-8 rounded-md">
            <div className="bg-[#D1A054] py-2 rounded-b-md">
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
      <div className="w-10/12 mx-auto">
        <SectionTitle subHeading="Send Us a Message" heading="CONTACT FORM" />
        <div className="bg-[#F3F3F3] py-16 px-16 mb-16 rounded-md">
          <form className="text-center">
            <div className="flex justify-center items-center space-x-16">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name*</span>
                </label>
                <input type="text" placeholder="Enter your name" className="input input-bordered w-full" />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input type="email" placeholder="Enter your email" className="input input-bordered w-full" />
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone*</span>
              </label>
              <input type="tel" placeholder="Enter your phone number" className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone*</span>
              </label>
              <textarea rows={8} cols={50} placeholder="Write your message here" className="input-bordered w-full pt-4 pl-4 rounded-md outline-gray-200"></textarea>
            </div>
            <button type="submit" className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] mt-8 w-4/12 mx-auto text-white">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact