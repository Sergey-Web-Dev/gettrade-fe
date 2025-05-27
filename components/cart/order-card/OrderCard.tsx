'use client';

import React, {FC, useState} from "react";
import Image from "next/image";
import PriceBlock from "@/components/cart/price-block/PriceBlock";
import styles from './order-card.module.scss';
import {CartItem} from "@/app/stores/useStore";
import IconButton from "@/components/buttons/icon-button/IconButton";

export type OrderItemProps = {
    id: number;
    image: string;
    orders: CartItem[];
    setOrders: (orders: CartItem[]) => void;
    title?: string;
    article?: string;
    availability?: number | string;
    isChecked?: boolean;
    discont?: number;
    discountedPrice?: number;
    originalPrice?: number;
};

export const OrderItem: FC<OrderItemProps> = ({
    id,
    image,
    title,
    article,
    availability,
    isChecked,
    discont,
    discountedPrice,
    originalPrice,
    orders, 
    setOrders
}) => {
    const [count, setCount] = useState(1);
    const [isActive, setIsActive] = useState(false);

    const handleChange = (e: any) => {
        const val = Number(e.target.value);
        if (val >= 1) {
            setCount(val);
        }
    };

    const addItem = () => {
        setCount(count + 1)
        setOrders(orders?.map((item: CartItem) => (item.id === id ? { ...item, count:  item.count + 1 } : item)))
    };

    const removeItem = () => {
        count === 1 ? setCount(1) : setCount(count - 1)
        setOrders(orders?.map((item: CartItem) => (item.id === id ? { ...item, count: item.count === 1 ? item.count = 1: item.count - 1 } : item)))
    };

    const removeItemFromCart = () => {
        setOrders(orders?.filter((item: CartItem) => item.id !== id))
    };

    return (
        <li className={styles.orderCard}>
            <div className={styles.orderCard__info}>
                <div className={!availability ? styles.orderCard__photo_container_blur : styles.orderCard__photo_container}>
                    <Image src={image} width={100} height={120} className={!availability ? styles.orderCard__photo_blur : styles.orderCard__photo} alt={`Фото ${title}`} />
                </div>
                <div className={!availability ? styles.orderCard__content_blur : styles.orderCard__content}>
                    <h4 className={styles.orderCard__title}>{title}</h4>
                    <p className={styles.orderCard__articul}>Артикул {article}</p>
                    <div className={styles.orderCard__buttons}>
                        <IconButton
                            src={'favourites.svg'}
                            fillSrc={'favorite.svg'}
                            alt={'Добавить в избранное'}
                            size={{width: 20, height: 20}}
                            onClick={() => setIsActive(!isActive)}
                            isActive={isActive}
                        />
                        <IconButton
                            src={'delete.svg'}
                            alt={'Удалить товар'}
                            size={{width: 20, height: 20}}
                            onClick={removeItemFromCart}
                        />
                    </div>
                    <div className={!availability ? styles.orderCard__availability_blur : styles.orderCard__availability}>
                        <Image src='/availability.svg' alt="" width={16} height={16} />
                        <p className={styles.orderCard__availability_text}>В наличии: <span>{availability || 0} шт.</span></p>
                    </div>
                </div>
            </div>


            {availability && (
                <>
                    <div className={styles.orderCard__prices}>
                        <h4 className={styles.orderCard__discounted_price}>{discountedPrice} ₽</h4>
                        <p className={styles.orderCard__original_price}>{originalPrice} ₽</p>
                    </div>

                    <div className={styles.orderCard__counter}>
                        <IconButton 
                            src={'minus.svg'}
                            alt={'Удалить 1 товар'}
                            size={{width: 12, height: 12}}
                            className={styles.orderCard__count_btn}
                            onClick={removeItem}
                        />
                        <div className={styles.orderCard__count}>{count}</div>
                        <IconButton 
                            src={'plus.svg'}
                            alt={'Добавить 1 товар'}
                            size={{width: 12, height: 12}}
                            className={styles.orderCard__count_btn}
                            onClick={addItem}
                        />
                    </div>
                </>
            )}

            {availability ? (
                <div className={styles.orderCard__price}>
                    <PriceBlock
                        discont={discont || 0} 
                        discountedPrice={discountedPrice || 0} 
                        originalPrice={originalPrice || 0} 
                    />
                    <input className={styles.orderCard__checkbox} type='checkbox' checked={isChecked} onChange={() => setOrders(orders?.map((item: CartItem) => (item.id === id ? { ...item, isChecked:  !item.isChecked } : item)))} />
                </div>
            ) : (
                <div className={styles.orderCard__unvailable_price}>
                    <div className={styles.orderCard__unvailable_text}>
                        <p>Закончился</p>
                        <Image src={'block.svg'} width={20} height={20} alt={`block.svg`} />
                    </div>
                    <IconButton
                        src={'delete.svg'} 
                        alt={'Удалить товар'} 
                        size={{width: 20, height: 20}} 
                        onClick={removeItemFromCart}
                    />
                </div>
            )}
        </li>
    );
}
