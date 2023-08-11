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
        <section>
            <SectionTitle
                subHeading={"From 11.00am to 10.00pm"}
                heading={"Order Online"} />
            {/* <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h4 className='text-4xl text-center uppercase -mt-16 text-white font-semibold'>Salads</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h4 className='text-4xl text-center uppercase -mt-16 text-white font-semibold'>Pizzas</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h4 className='text-4xl text-center uppercase -mt-16 text-white font-semibold'>Soups</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h4 className='text-4xl text-center uppercase -mt-16 text-white font-semibold'>Desserts</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h4 className='text-4xl text-center uppercase -mt-16 text-white font-semibold'>Salads</h4>
                </SwiperSlide>
            </Swiper> */}
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
                    <img className='rounded-lg' src={slide1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-lg' src={slide2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-lg' src={slide3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-lg' src={slide4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-lg' src={slide5} alt="" />
                </SwiperSlide>
               
            </Swiper>
            
        </section>
    )
}

export default Category