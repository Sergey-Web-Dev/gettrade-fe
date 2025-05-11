'use client';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {FC, ReactNode, Ref, useRef, useState} from "react";
import styles from './items-slider.module.scss';

interface IItemsSliderProps {
    items: ReactNode[],
    width: string,
    height: string,
    prevRef?: Ref<HTMLDivElement>,
    nextRef?: Ref<HTMLDivElement>,
    slidesPerView: number,
}

const ItemsSlider: FC<IItemsSliderProps> = ({
                                                items,
                                                width,
                                                height,
                                                prevRef,
                                                nextRef,
                                                slidesPerView = 1 }) => {
    const swiperRef = useRef(null);

    const paginationRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    //@ts-ignore
    const goToSlide = (index: number) => swiperRef.current?.slideTo(index)

    return (
        <Swiper
            style={{ width, height, position: 'relative' }}
            modules={[Navigation, Pagination, Autoplay]}
            loop
            autoplay
            navigation={{ nextEl: '.nextEl', prevEl: '.prevEl' }}
            pagination={{ el: '.progressbar' }}
            slidesPerView={slidesPerView}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onInit={(swiper) => {
                //@ts-ignore
                swiperRef.current = swiper;
                //@ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
                //@ts-ignore
                swiper.params.pagination.el = paginationRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }}
        >
            {items.map((item, index) => <SwiperSlide key={index}>{item}</SwiperSlide>)}
            <div className={styles.pagination} ref={paginationRef}>
                {items.map((_, index) => (
                    //@ts-ignore
                    <button style={{ backgroundColor: index === activeIndex ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, .4)' }} key={index} onClick={() => goToSlide(index)} className={styles.pagination__item}>
                    </button>
                ))}
            </div>
        </Swiper>
    )
}

export default ItemsSlider