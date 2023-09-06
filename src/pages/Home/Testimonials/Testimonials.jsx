import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import quote from '../../../assets/quote.png'


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://bistro-boss-server-v2.vercel.app/api/v1/reviews/general')
            .then((res) => res.json())
            .then((data) => setReviews(data))
    }, []);
    return (
        <section className="my-20">
            <SectionTitle
                subHeading="What Our Client Say"
                heading="Testimonials"
            />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map((review) => <SwiperSlide key={review._id}>
                        <div className="my-0 mx-24 flex flex-col items-center space-y-2">
                            <Rating
                                style={{ maxWidth: 180, marginBottom: '15px' }}
                                value={review.rating}
                                readOnly
                            />
                            <img className="w-[70px]" src={quote} alt="" />
                            <p>{review.details.reviewDetail}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    )
}

export default Testimonials