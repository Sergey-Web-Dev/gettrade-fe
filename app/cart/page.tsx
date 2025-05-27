'use client';

import React, { useState } from "react";
import styles from "./page.module.scss";
import PagesNavigation from "@/components/pages-navigation/PagesNavigation";
import {OrderItem} from "@/components/cart/order-card/OrderCard";
import Image from "next/image";
import { CartTotal } from "@/components/cart/cart-total/CartTotal";
import {useOrders} from "@/features/order/model/use-orders";

export default function Cart() {
    const [isChecked, setIsChecked] = useState(false);

    const {orders, isLoading} = useOrders();

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
                            <div className={styles.cart__filterItem} onClick={() => {}}>
                                <input type="checkbox" className={styles.cart__checkbox} checked={isChecked} onClick={() => {setIsChecked(!isChecked)}} readOnly />
                                <p className={styles.cart__filterText}>Выбрать все</p>
                            </div>
                            <div className={styles.cart__filterItem} onClick={() => {}} >
                                <Image src={'clear.svg'} alt={'clear.svg'} width={22} height={22} />
                                <p className={styles.cart__filterText}>Удалить выбранное</p>
                            </div>
                        </div>
                    </div>
                    <ul className={styles.cart__list}>
                        {orders && orders.orderItems.map(({ product, quantity, id
                        }) => (
                            <OrderItem
                                key={id}
                                id={id}
                                image={product.image}
                                title={product.name}
                                discont={product.discount}
                                quantity={quantity}
                                originalPrice={product.price}
                                article={product.article}
                                availability={product.quantityAvailable}
                                isChecked={product.isChecked}
                            />
                        ))}
                    </ul>
                </div>
                <div className={styles.cart__right}>
                    <CartTotal items={orders?.orderItems || []} />
                </div>
            </div>
        </div>
    );
}
