'use client'

import { FC, useRef } from "react"
import Image from "next/image";
import BrandsSlide from "../brand-item/BrandsSlide";
import ItemsSlider from "../slider-for-items/ItemsSlider";
import styles from './brands.module.scss';

const brands = [
  {
    imgSrc: '/brand.png'
  },
  {
    imgSrc: '/brand.png'
  },
  {
    imgSrc: '/brand.png'
  },
  {
    imgSrc: '/brand.png'
  },
  {
    imgSrc: '/brand.png'
  },
  {
    imgSrc: '/brand.png'
  },
  {
    imgSrc: '/brand.png'
  },
  {
    imgSrc: '/brand.png'
  },
  {
    imgSrc: '/brand.png'
  },
  {
    imgSrc: '/brand.png'
  },
  {
    imgSrc: '/brand.png'
  },
  {
    imgSrc: '/brand.png'
  },
]

const Brands: FC = () => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  return (
    <main className={`container`}>
      <div className={styles.brands}>
        <h2 className={`h2-header`}>Бренды</h2>
        <div className={styles.brands__nav}>
          <button ref={prevRef}>
            <Image src='/arrow_left_bg_lightblue.png' width={48} height={48} alt='' />
          </button>
          <button ref={nextRef}>
            <Image src='/arrow_right_bg_lightblue.png' width={48} height={48} alt='' />
          </button>
        </div>

      </div>
      <div>
        <ItemsSlider
          items={Array.from({ length: 6 }).map((_, index) => <BrandsSlide brands={brands} />)}
          width={''}
          height={'288px'}
          prevRef={prevRef}
          nextRef={nextRef}
          slidesPerView={1}
        />
      </div>
    </main>
  )
}

export default Brands