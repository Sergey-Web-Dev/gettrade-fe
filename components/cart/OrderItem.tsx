'use client';

import styles from './orderItem.module.scss';
import React, {FC, useState} from "react";
import Image from "next/image";
import ItemButton from "@/components/buttons/ItemButton";
import PriceBlock from "@/components/cart/PriceBlock";
import {CartItem} from "@/app/stores/useStore";

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
                                                  orders, setOrders
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
        <>
            <div   style={!availability ? { color: '#d3d3d3' } : undefined} className={styles.orderItem}>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center",gap: '2.5rem'}}>
                    <div>
                        {!availability ? (<Image src={image} width={100} height={120}   style={{ filter: 'blur(5px)' }} alt={`Фото ${title}`} />) : (<Image src={image} width={100} height={120} alt={`Фото ${title}`} />)}
                    </div>
                    <div className={styles.orderItem__titles}>
                        <h4>{title}</h4>
                        <p>Артикул {article}</p>
                        <div className={styles.orderItem__buttons}>
                            <ItemButton src={'favourites.svg'} fillSrc={'favorite.svg'} alt={'Добавить в избранное'} className={styles['orderItem__buttons__fav']} size={{width: 30, height: 31}}  onClick={() => setIsActive(!isActive)}  isActive={isActive}/>
                            <ItemButton src={'delete.svg'} alt={'Удалить товар'} className={styles['orderItem__buttons__delete']} size={{width: 30, height: 31}} onClick={removeItemFromCart}/>
                        </div>
                        <div className={styles.orderItem__availability}>
                            <Image src='/availability.svg' alt="" width={16} height={16} />
                            <p className={styles.productPrice__availability_text}>В наличии: <span>{availability} шт.</span></p>
                        </div>
                    </div>
                </div>


                {availability && (
                    <>
                    <div className={styles.orderItem__titles__prices}>
                        <h4 className={styles.orderItem__titles__prices__discounted}>{discountedPrice} ₽</h4>
                        <p className={styles.orderItem__titles__prices__original}>{originalPrice} ₽</p>
                    </div>

                    <div className={styles.orderItem__input}>
                <ItemButton src={'minus.svg'} alt={'Удалить 1 товар'} className={styles['orderItem__buttons__minus']} size={{width: 20, height: 18}} onClick={removeItem} />
                <input type='number' value={count}
                       onChange={handleChange}
                       min={1} />
                <ItemButton src={'plus.svg'} alt={'Добавить 1 товар'} className={styles['orderItem__buttons__plus']} size={{width: 20, height: 18}} onClick={addItem}/>
            </div>
                    </>
                )}

                {!availability && (
                    <div style={{display: "flex", flexDirection: 'column',  alignItems: "end",gap: '4rem'}}>

                    <div style={{display: "flex", justifyContent: "center", alignItems: "center",gap: '0.5rem'}}>
                        <p style={{color: "black"}}>Закончился</p>
                        <Image src={'block.svg'} width={20} height={20} alt={`block.svg`} />
                    </div>
                        <ItemButton src={'delete.svg'} alt={'Удалить товар'} className={styles['orderItem__buttons__delete']} size={{width: 20, height: 20}} onClick={removeItemFromCart}/>
                    </div>
                )}
                {availability && (
                    <div style={{display: "flex", flexDirection: 'column',  alignItems: "end",gap: '4rem'}}>
                        <PriceBlock count={count} discont={discont || 0} discountedPrice={discountedPrice || 0} originalPrice={originalPrice || 0} parentClassName={styles['orderItem__titles__prices__priceBlock']} childClassName={styles['orderItem__titles__prices__priceUnderlineBlock']}/>
                        <input  style={{ transform: 'scale(1.5)', cursor: 'pointer'}}
                                type='checkbox' checked={isChecked} onChange={() => setOrders(orders?.map((item: CartItem) => (item.id === id ? { ...item, isChecked:  !item.isChecked } : item)))}
                        />
                    </div>
                )}
                 </div>
        </>
    );
}
