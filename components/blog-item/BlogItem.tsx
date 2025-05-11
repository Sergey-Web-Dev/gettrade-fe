import Image from 'next/image';
import styles from './blog-item.module.scss';
import { FC } from 'react';

interface IBlogItemProps {
  imgSrc: string;
  title: string;
  date: string;
}

const BlogItem: FC<IBlogItemProps> = ({ imgSrc, title, date }) => {
  return (
    <div className={styles['blog-item']}>
      <Image objectFit='cover' src={imgSrc} width={304} height={275} alt='' />
      <div className={styles['blog-item__description']}>
        <div className={styles['blog-item__description__main']}>
          <p>{title}</p>
          <Image src='/arrow-icon.svg' width={36} height={36} alt='' />
        </div>
        <p className={styles['blog-item__description__date']}>{date}</p>
      </div>
    </div>
  )
}

export default BlogItem