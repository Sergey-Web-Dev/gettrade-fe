import { FC } from "react";
import styles from './product-main-info.module.scss';
import Image from "next/image";
import Link from "next/link";

interface IProductMainInfo {
    title: string;
    isBestseller: boolean;
    articul: string;
    brand: { id: number, imgSrc: string };
    characteristics: { id: number, title: string, value: string }[];
    delivery: { id: number, type: string, time: string, price: string }[];
    rate: number;
    reviews: number;
}

const ProductMainInfo: FC<IProductMainInfo> = ({
    title,
    isBestseller,
    articul,
    brand,
    characteristics,
    delivery,
    rate,
    reviews
}) => {
    return (
        <div className={styles.productMainInfo}>
            <h3 className={styles.productMainInfo__name}>{title}</h3>
            <div className={styles.productMainInfo__head}>
                <div className={styles.productMainInfo__headLeft}>
                    <Image src='/rating-star.svg' alt="" width={24} height={24} />
                    <p className={styles.productMainInfo__rate}>{rate}</p>
                    <p className={styles.productMainInfo__reviewCount}>{reviews} оценок</p>
                    {isBestseller ? <div className={styles.productMainInfo__bestSelleer}>ХИТ ПРОДАЖ</div> : null}
                </div>
                <div className={styles.productMainInfo__headRight}>Артикул {articul}</div>
            </div>
            <ul className={styles.productMainInfo__list}>
                {characteristics && characteristics.map((characteristic: { id: number, title: string, value: string }) => (
                    <li className={styles.productMainInfo__item} key={characteristic.id}>
                        <p className={styles.productMainInfo__title}>{characteristic.title}</p>
                        <p className={styles.productMainInfo__value}>{characteristic.value}</p>
                    </li>
                ))}
            </ul>
            <Link href={'#characteristics'} className={styles.productMainInfo__more}>Все характеристики <Image src='/arrow-down.svg' alt="" width={20} height={20} /> </Link>
            <p className={styles.productMainInfo__deliveryTitle}>Способы доставки</p>
            <ul className={styles.productMainInfo__list}>
                {delivery && delivery.map((delivery: { id: number, type: string, time: string, price: string }) => (
                    <li className={styles.productMainInfo__item} key={delivery.id}>
                        <p className={styles.productMainInfo__title}>{delivery.type}</p>
                        <p className={styles.productMainInfo__time}>{delivery.time}</p>
                        <p className={styles.productMainInfo__value}>{delivery.price}</p>
                    </li>
                ))}
            </ul>
            <div className={styles.productMainInfo__brand}>
                <Image src={brand.imgSrc} alt="brand" width={115} height={68} />
                <p className={styles.productMainInfo__more}>Все товары бренда <Image src='/arrow-down.svg' alt="" width={20} height={20} /> </p>
            </div>
        </div>
    )
}

export default ProductMainInfo;