import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import TestCard from './TestCard';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase/firebase.init'
const Swiperslide = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='container mx-auto p-5 lg-p-0'>

            <Swiper
                breakpoints={{
                    640: {
                        width: 640,
                        slidesPerView: 1,
                    },
                    868: {
                        width: 868,
                        slidesPerView: 2,
                    },
                    1200: {
                        width: 1200,
                        slidesPerView: 3,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                spaceBetween={20}
                loop={true}
                loopFillGroupWithBlank={false}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <TestCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TestCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TestCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TestCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TestCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TestCard />
                </SwiperSlide>
            </Swiper>
            {
                !user &&
                <div className='flex justify-center mt-10'>
                    <button className='btn btn-primary text-white'>Write A Review</button>
                </div>}
        </div>
    )
}

export default Swiperslide