import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import { Pagination } from 'swiper/modules';
import "./Category.css"


const Category = () => {


    return (
        <section className='px-2 md:px-0'>
            <SectionTitle
                subHeading={"From 11.00am to 10.00pm"}
                heading={"Order Online"} />
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='rounded-lg mx-auto' src={slide1} alt="" />
                    <p className='text-center uppercase mt-3 text-xs md:text-sm tracking-widest font-semibold'>Salad</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-lg mx-auto' src={slide2} alt="" />
                    <p className='text-center uppercase mt-3 text-xs md:text-sm tracking-widest font-semibold'>Pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-lg mx-auto' src={slide3} alt="" />
                    <p className='text-center uppercase mt-3 text-xs md:text-sm tracking-widest font-semibold'>Soup</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-lg mx-auto' src={slide4} alt="" />
                    <p className='text-center uppercase mt-3 text-xs md:text-sm tracking-widest font-semibold'>Dessert</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-lg mx-auto' src={slide5} alt="" />
                    <p className='text-center uppercase mt-3 text-xs md:text-sm tracking-widest font-semibold'>Drinks</p>
                </SwiperSlide>
               
            </Swiper>
            
        </section>
    )
}

export default Category