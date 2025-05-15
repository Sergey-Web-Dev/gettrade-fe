import { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import './gallery.css'
import styles from './gallery-slider.module.scss';
import { FreeMode, Thumbs } from 'swiper/modules';
import Image from "next/image";

interface IGallerySlider {
    gallery: { id: number, img: string }[];
}


const GallerySlider: FC<IGallerySlider> = ({ gallery }) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const horizontalSliderRef = useRef(null);

    const handleNext = () => {
        if (horizontalSliderRef.current) {
            //@ts-ignore
            horizontalSliderRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (horizontalSliderRef.current) {
            //@ts-ignore
            horizontalSliderRef.current.swiper.slidePrev();
        }
    };

    return (
        <div className={styles.gallerySwiper}>
            <Swiper
                //@ts-ignore
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                direction={'vertical'}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className={` vertical ${styles.gallerySwiper__vertical} `}
            >
                {gallery && gallery.map((photo: { id: number, img: string }) => (
                    <SwiperSlide className={styles.gallerySwiper__vertical_slide} key={photo.id}>
                        <img src={photo.img} /> {/* //Заменить на Image Next когда появятся бек картинки */}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.gallerySwiper__horizontalWrapper}>
                <Swiper
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Thumbs]}
                    className={styles.gallerySwiper__horizontal}
                    ref={horizontalSliderRef}
                >
                    {gallery && gallery.map((photo: { id: number, img: string }) => (
                        <SwiperSlide className={styles.gallerySwiper__horizontal_slide} key={photo.id}>
                            <img src={photo.img} /> {/* //Заменить на Image Next когда появятся бек картинки */}
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={styles.gallerySwiper__nav}>
                    <button onClick={handlePrev}>
                        <Image src='/gallery-prev.svg' width={48} height={48} alt='' />
                    </button>
                    <button onClick={handleNext}>
                        <Image src='/gallery-next.svg' width={48} height={48} alt='' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GallerySlider;