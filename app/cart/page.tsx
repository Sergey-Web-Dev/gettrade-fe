'use client';

import React, { useState } from "react";
import styles from "./page.module.scss";
import PagesNavigation from "@/components/pages-navigation/PagesNavigation";
import {OrderItem} from "@/components/cart/order-card/OrderCard";
import Image from "next/image";
import {CartItem, useStore} from "@/app/stores/useStore";
import { CartTotal } from "@/components/cart/cart-total/CartTotal";

export default function Cart() {

    const orders = useStore((state) => state.cartItems);
    const setCartItems = useStore((state) => state.setCartItems);
    const [isSelectedAll, setSelectedAll] = useState<boolean>(false);

    const handleChooseAll = () => {
        setSelectedAll((prev: boolean) => !prev);
        setCartItems(
            (orders || []).map((item: CartItem) => ({
                ...item,
                isChecked: !item.isChecked,
            }))
        )
    };

    const handleDeleteChosen = () => {
        setCartItems((orders || []).filter((item: CartItem) => !item.isChecked));
    };

    return (
        <div className={styles.cart}>
            <div  className={styles.cart__navigation}>
                <PagesNavigation navigationData={[ { id: 0, title: 'главная' }, { id: 1, title: 'Корзина' } ]} />
            </div>
            <div className={`container ${styles.cart__container}`}>
                <div className={styles.cart__left}>
                    <div className={styles.cart__control}>
                        <p className={styles.cart__title}>Корзина</p>
                        <div className={styles.cart__filter}>
                            <div className={styles.cart__filterItem} onClick={handleChooseAll}>
                                <input type="checkbox" className={styles.cart__checkbox} checked={isSelectedAll} readOnly />
                                <p className={styles.cart__filterText}>Выбрать все</p>
                            </div>
                            <div className={styles.cart__filterItem} onClick={handleDeleteChosen} >
                                <Image src={'clear.svg'} alt={'clear.svg'} width={22} height={22} />
                                <p className={styles.cart__filterText}>Удалить выбранное</p>
                            </div>
                        </div>
                    </div>
                    <ul className={styles.cart__list}>
                        {orders && orders.map(({ id,
                            title,
                            imgSrc,
                            article,
                            originalPrice,
                            discountedPrice,
                            discount, availability, isChecked 
                        }: CartItem) => (
                            <OrderItem
                                key={id}
                                id={id}
                                image={imgSrc}
                                title={title}
                                discont={discount}
                                discountedPrice={discountedPrice}
                                originalPrice={originalPrice}
                                article={article}
                                availability={availability}
                                isChecked={isChecked}
                                orders={orders || []}
                                setOrders={setCartItems}
                            />
                        ))}
                    </ul>
                </div>
                <div className={styles.cart__right}>
                    <CartTotal items={orders || []} />
                </div>
            </div>
        </div>
    );
}
