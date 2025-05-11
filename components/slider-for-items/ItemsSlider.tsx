'use client';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {FC, ReactNode, Ref, useRef, useState} from "react";
import styles from './items-slider.module.scss';
import cn from 'classnames';

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
    const pageCount = Math.ceil(items.length / slidesPerView);
    const paginationRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);




    const goToSlide = (index: number) => {
        //@ts-ignore
        swiperRef.current?.slideTo(index * slidesPerView);
    };

    return (
        <Swiper
            style={{ width, height, position: 'relative' }}
            modules={[Navigation, Pagination, Autoplay]}
            loop
            autoplay
            navigation={{ nextEl: '.nextEl', prevEl: '.prevEl' }}
            pagination={{ el: '.progressbar', dynamicBullets: true }}
            slidesPerView={slidesPerView}
            spaceBetween={10}
            onSlideChange={(swiper) => {
                const currentPage = Math.floor(swiper.realIndex / slidesPerView);
                console.log('swioper active index', swiper.activeIndex)
                console.log('cp', currentPage)

                setActiveIndex(currentPage);
            }}
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
                {Array.from({ length: pageCount }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={cn(styles.pagination__item, {
                            [styles['pagination__item--active']]: index === activeIndex,
                        })}
                    />
                ))}
            </div>
        </Swiper>
    )
}

export default ItemsSlider