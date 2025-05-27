'use client';
import { FC } from "react";
import { Product } from "../types/products";
import Image from "next/image";
import ActionButton from "../action-button/ActionButton";
import styles from './product-item.module.scss';
import Link from "next/link";

interface IProductItemProps {
  product: Product,
}

const ProductItem: FC<IProductItemProps> = ({ product }) => {
  const { name, image, price, discount, isBestseller, rating, reviewAmount  } = product
    const discountedPrice = discount ?  price - (price * (discount / 100)) : 0

  return (
    <Link href={`/catalog/${product.description}-${product.id}`} className={styles['product-item']}>
      <div className={styles['product-item__image']}>
        <Image src={image} width={202} height={190} alt={`Фото ${name}`} />
        <button className={styles['product-item__image__favs']}><Image src='/favourites.svg' width={20} height={18} alt={`Добавить в избранное`} /></button>
        <div className={styles['product-item__image__labels']}>
          {discount && <span>-{discount}%</span>}
          {isBestseller && <span>ХИТ ПРОДАЖ</span>}
        </div>
      </div>
      <div className={styles['product-item__info']}>
        <p className={styles['product-item__info__prices']}>
          <span className={styles['product-item__info__prices__discounted']} style={{ color: discountedPrice ? 'rgba(186, 37, 40, 1)' : '' }}>{discount ? discountedPrice : price} ₽</span>
          {discountedPrice && <span className={styles['product-item__info__prices__original']} >{price} ₽</span>}
        </p>
        <h4 className={styles['product-item__info__title']}>{name}</h4>
        <div className={styles['product-item__info__reviews']}>
          <Image src='/rating-star.svg' width={17} height={17} alt={`Добавить в избранное`} />
          <span className={styles['product-item__info__reviews__rating']}>{rating}</span>
          <span className={styles['product-item__info__reviews__amount']}>{reviewAmount} оценок</span>
        </div>
      </div>
      <ActionButton text='КУПИТЬ' onClick={() => console.log('купить')} type="small-blue" />
    </Link>
  )
}

export default ProductItem;