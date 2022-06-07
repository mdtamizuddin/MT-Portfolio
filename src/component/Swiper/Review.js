import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import TestCard from './TestCard';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../Firebase/firebase.init'
import { useQuery } from 'react-query';
const Review = () => {
    const [user] = useAuthState(auth)
    const url = 'https://mt-portfolio2.herokuapp.com/review'
    const { isLoading, data, refetch } = useQuery(['review'], () =>
        fetch(url)
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return
    }
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
                {
                    data.map(review => <SwiperSlide key={review._id}>
                        <TestCard review={review}/>
                    </SwiperSlide>)
                }


            </Swiper>
            {
                !user &&
                <div className='flex justify-center mt-10'>
                    <button className='btn btn-primary text-white'>Write A Review</button>
                </div>}
        </div>
    )
}

export default Review