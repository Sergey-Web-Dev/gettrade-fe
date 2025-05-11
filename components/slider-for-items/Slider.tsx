'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'

import styles from './slider.module.scss';

interface SliderProps {
    items: React.ReactNode[]
}

export default function Slider({ items }: SliderProps) {



    return (
        <div className="w-full">
            {/* Title and Arrows */}
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className={styles.swiper}
                    // onSwiper={(swiper) => {
                    //     if (prevRef.current && nextRef.current) {
                    //         //@ts-expect-error
                    //         swiper.params.navigation.prevEl = prevRef.current
                    //         //@ts-expect-error
                    //         swiper.params.navigation.nextEl = nextRef.current
                    //         swiper.navigation.init()
                    //         swiper.navigation.update()
                    //     }
                    // }}
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center items-center">{item}</div>
                        </SwiperSlide>
                    ))}
                </Swiper>

        </div>
    )
}