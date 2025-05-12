'use client'

import {FC, useRef} from "react"
import { Product } from "../types/products"
import ProductItem from "../product-item/ProductItem"
import styles from './bestsellers.module.scss';
import ItemsSlider from "@/components/slider-for-items/ItemsSlider";
import Image from "next/image";

interface IBestsellersProps {
  bestsellers: Product[]
}

const Bestsellers: FC<IBestsellersProps> = ({ bestsellers }) => {
    const nextRef = useRef(null);
    const prevRef = useRef(null);

  return (
    <main className={`container ${styles.bestsellers}`}>
        <div className={styles.bestsellers__title_and_nav}>
            <h2 className={`h2-header ${styles.bestsellers__header}`}>Хиты продаж</h2>
            <div className={styles.bestsellers__slider_nav}>
                <button ref={prevRef} className={styles.prevEl}>
                    <Image src='/arrow_left_bg_lightblue.png' width={48} height={48} alt='' />
                </button>
                <button ref={nextRef} className={styles.nextEl}>
                    <Image src='/arrow_right_bg_lightblue.png' width={48} height={48} alt='' />
                </button>
            </div>

        </div>
      <div className={`h2-header ${styles.bestsellers__items}`}>
          <ItemsSlider
              items={bestsellers.map((bestseller, index) => <ProductItem key={index} product={bestseller} />)}
              width={''}
              height={'500px'}
              prevRef={prevRef}
              nextRef={nextRef}
              slidesPerView={6}
          />
      </div>
    </main>
  )
}

export default Bestsellers