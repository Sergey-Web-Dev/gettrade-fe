import Image from "next/image";
import { FC } from "react";
import styles from './category-item.module.scss';
import Link from "next/link";

interface ICategoryItemProps {
  name: string;
  imgSrc: string;
  link: string;
}

const CategoryItem: FC<ICategoryItemProps> = ({ name, imgSrc, link }) => { //картинка быдет bgImage или обычная, растянутая на фон? или как сейчас - на фоне смещенная в угол?
  return (
    <Link href={link} className={styles['category-item']}>
      <h3 className={styles['category-item__name']}>{name}</h3>
      <Image src='/arrow-icon.svg' width={36} height={36} alt="Иконка стрелки" />
    </Link>
  )
}

export default CategoryItem