import { FC } from "react";
import { PopularCategory } from "./types";
import CategoryItem from "../category-item/CategoryItem";
import styles from './popular-categories.module.scss';

interface IPopularCategoriesProps {
  categories: PopularCategory[]
}

const PopularCategories: FC<IPopularCategoriesProps> = ({ categories }) => {
  return (<main className={`container ${styles['popular-categories']}`}>
    <h2 className={`h2-header ${styles['popular-categories__header']}`}>Популярные категории</h2>
    <div className={styles['popular-categories__items']}>
      {categories.map(({ name, imgSrc, link }, index) => <CategoryItem key={index} name={name} imgSrc={imgSrc} link={link} />)}
    </div>
  </main>)
}

export default PopularCategories