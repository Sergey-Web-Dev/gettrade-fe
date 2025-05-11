'use client';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FC, useRef, useState } from "react";
import { ImagesSliderItemType } from "../types/imagesSlider";
import ImagesSliderItem from "../images-slider-item/ImagesSliderItem";
import Image from 'next/image';
import styles from './images-slider.module.scss';

interface IImagesSliderProps {
  images: ImagesSliderItemType[],
  width: string,
  height: string,
}

const ImagesSlider: FC<IImagesSliderProps> = ({ images, width, height }) => {
  const swiperRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
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
      slidesPerView={1}
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
      {images.map(({ imgSrc, link }, index) => <SwiperSlide key={index}><ImagesSliderItem imgSrc={imgSrc} link={link} /></SwiperSlide>)}
      <button ref={prevRef} className={styles.prevEl}>
        <Image src='/arrow-prev.svg' width={48} height={48} alt='' />
      </button>
      <button ref={nextRef} className={styles.nextEl}>
        <Image src='/arrow-next.svg' width={48} height={48} alt='' />
      </button>
      <div className={styles.pagination} ref={paginationRef}>
        {images.map((_, index) => (
          //@ts-ignore
          <button style={{ backgroundColor: index === activeIndex ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, .4)' }} key={index} onClick={() => goToSlide(index)} className={styles.pagination__item}>
          </button>
        ))}
      </div>
    </Swiper>
  )
}

export default ImagesSlider