'use client'

import {FC, useRef} from 'react';
import styles from './blog.module.scss';
import { BlogItemType } from '../types/blog';
import BlogItem from '../blog-item/BlogItem';
import ItemsSlider from "@/components/slider-for-items/ItemsSlider";
import Image from "next/image";

interface IBlogProps {
  blogItems: BlogItemType[]
}

const Blog: FC<IBlogProps> = ({ blogItems }) => {
    const nextRef = useRef(null);
    const prevRef = useRef(null);

  return (
    <main className={`container ${styles.blog}`}>
        <div className={styles.blog__title_and_nav}>
            <h2 className={`h2-header ${styles.blog__header}`}>Блог</h2>
            <div className={styles.blog__slider_nav}>
                <button ref={prevRef} className={styles.prevEl}>
                    <Image src='/arrow-prev.svg' width={48} height={48} alt='' />
                </button>
                <button ref={nextRef} className={styles.nextEl}>
                    <Image src='/arrow-next.svg' width={48} height={48} alt='' />
                </button>
            </div>

        </div>
      <div className={`h2-header ${styles.blog__items}`}>
          <ItemsSlider
              items={blogItems.map(({imgSrc, title, date}, index) => <BlogItem key={index} imgSrc={imgSrc} title={title} date={date}/>)}
              width={''}
              height={'500px'}
              prevRef={prevRef}
              nextRef={nextRef}
              slidesPerView={5}

          />
      </div>
    </main>
  )
}

export default Blog