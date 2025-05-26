'use client'

import {FC, useRef, useState} from "react"
import { Product } from "../types/products"
import ProductItem from "../product-item/ProductItem"
import styles from './bestsellers.module.scss';
import ItemsSlider from "@/components/slider-for-items/ItemsSlider";
import Image from "next/image";
import ActionButton from "@/components/action-button/ActionButton";
import cn from "classnames";

interface IBestsellersProps {
  bestsellers: Product[]
  title: string;
}

const CATS = [
    {id: 1, name: 'Наушники'},
    {id: 2, name: 'Проекторы'},
    {id: 3, name: 'Экраны'},
    {id: 4, name: 'Акустика'},
    {id: 5, name: 'Hifi компоненты'},
]

const Bestsellers: FC<IBestsellersProps> = ({ bestsellers, title }) => {
    const [activeCategory, setActiveCategory] = useState(CATS[0]);

    const nextRef = useRef(null);
    const prevRef = useRef(null);

    const handleSetActiveCategory = (cat: CategoryItem)=> {
        setActiveCategory(cat);
    }

  return (
    <main className={`container ${styles.bestsellers}`}>
        <div className={styles.bestsellers__title_and_cat}>
            <h2 className={`h2-header ${styles.bestsellers__header}`}>{title}</h2>
            <div className={styles.bestsellers__title_and_nav} >
                <div className={styles.bestsellers__categories}>
                    {CATS.map((cat) => <CategoryItem key={cat.id} isActive={activeCategory.id === cat.id} cat={cat} onClick={handleSetActiveCategory} />)}
                </div>
                <div className={styles.bestsellers__slider_nav}>
                    <button ref={prevRef} className={styles.prevEl}>
                        <Image src='/arrow_left_bg_lightblue.png' width={48} height={48} alt='' />
                    </button>
                    <button ref={nextRef} className={styles.nextEl}>
                        <Image src='/arrow_right_bg_lightblue.png' width={48} height={48} alt='' />
                    </button>
                </div>
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

type CategoryItemProps = {
    isActive: boolean, cat: CategoryItem,  onClick: (cat: CategoryItem) => void
}

type CategoryItem = {
    id: number,
    name: string
}

const CategoryItem: FC<CategoryItemProps> = ({ cat, onClick, isActive }) => {
    return (
        <button
            key={cat.id}
            className={cn(styles.category_item, {
                [styles._active]: isActive,
            })}
            onClick={() => onClick(cat)}
            type="button"
        >
            {cat.name}
        </button>
    );
};

export default Bestsellers