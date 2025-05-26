import Image from "next/image";
import { FC } from "react";
import styles from './category-item.module.scss';
import Link from "next/link";

interface ICategoryItemProps {
  name: string;
  imgSrc: string;
  link: string;
}

const CategoryItem: FC<ICategoryItemProps> = ({ name, link }) => { //картинка быдет bgImage или обычная, растянутая на фон? или как сейчас - на фоне смещенная в угол?
  return (
    <Link href={link} className={styles['category-item']}>
        <h3 className={styles['category-item__name']}>{name}</h3>

        <div className={styles['category-item__wrapper']}>
            <Image style={{marginBottom: '20px'}} src='/arrow_up_right_45.svg' width={36} height={36} alt="Иконка стрелки" />
            <Image src='/image_for_top_cat.png' width={125} height={158} alt="Иконка стрелки" />
        </div>

    </Link>
  )
}

export default CategoryItem