import { FC } from 'react';
import styles from './blog.module.scss';
import { BlogItemType } from '../types/blog';
import BlogItem from '../blog-item/BlogItem';

interface IBlogProps {
  blogItems: BlogItemType[]
}

const Blog: FC<IBlogProps> = ({ blogItems }) => {
  return (
    <main className={`container ${styles.blog}`}>
      <h2 className={`h2-header ${styles.blog__header}`}>Хиты продаж</h2>
      <div className={`h2-header ${styles.blog__items}`}>
        {blogItems.map(({ imgSrc, title, date }, index) => <BlogItem key={index} imgSrc={imgSrc} title={title} date={date} />)}
      </div>
    </main>
  )
}

export default Blog