'use client';
import styles from './orderItem.module.scss';
import React, {FC, useState} from "react";
import Image from "next/image";
import ItemButton from "@/components/buttons/ItemButton";
import PriceBlock from "@/components/cart/PriceBlock";

export type OrderItemProps = {
    image: string;
    title?: string;
    article?: string;
    availability?: number;
    discont?: number;
    discountedPrice?: number;
    originalPrice?: number;
};

export const OrderItem: FC<OrderItemProps> = ({
    image,
    title,
    article,
    availability,
    discont,
    discountedPrice,
    originalPrice,
}) => {
    const [count, setCount] = useState(1);

    const handleChange = (e: any) => {
        const val = Number(e.target.value);
        if (val >= 1) {
            setCount(val);
        }
    };
    return (
        <>
            <div className={styles.orderItem}>
                <div>
                    <Image src={image} width={100} height={120} alt={`Фото ${title}`} />
                </div>
                <div className={styles.orderItem__titles}>
                    <h4>{title}</h4>
                    <p>Артикул {article}</p>
                    <div className={styles.orderItem__buttons}>
                        <ItemButton src={'favourites.svg'} alt={'Добавить в избранное'} className={styles['orderItem__buttons__fav']} size={{width: 30, height: 31}}/>
                        <ItemButton src={'delete.svg'} alt={'Удалить товар'} className={styles['orderItem__buttons__delete']} size={{width: 30, height: 31}}/>
                    </div>
                    <div className={styles.orderItem__availability}>
                        <Image src='/availability.svg' alt="" width={16} height={16} />
                        <p className={styles.productPrice__availability_text}>В наличии: <span>{availability} шт.</span></p>
                    </div>
                </div>
                <div className={styles.orderItem__titles__prices}>
                    <h4 className={styles.orderItem__titles__prices__discounted}>{discountedPrice} ₽</h4>
                    <p className={styles.orderItem__titles__prices__original}>{originalPrice} ₽</p>
                </div>
                <div className={styles.orderItem__input}>
                    <ItemButton src={'minus.svg'} alt={'Добавить 1 товар'} className={styles['orderItem__buttons__minus']} size={{width: 20, height: 18}}/>
                    <input className={styles['count-bar']} type='number' value={count}
                           onChange={handleChange}
                           min={1} />
                    <ItemButton src={'plus.svg'} alt={'Удалить 1 товар'} className={styles['orderItem__buttons__plus']} size={{width: 20, height: 18}}/>
                </div>
                <div>
                <PriceBlock count={count} discont={discont || 0} discountedPrice={discountedPrice || 0} originalPrice={originalPrice || 0} parentClassName={styles['orderItem__titles__prices__priceBlock']} childClassName={styles['orderItem__titles__prices__priceUnderlineBlock']}/>
                </div>
                 </div>

        </>
    );
}
