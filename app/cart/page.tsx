'use client';

import React from "react";
import Section from "@/components/section/Section";
import styles from "@/app/catalog/[product]/page.module.scss";
import cartItemsStyles from "./scss/cartItems.module.scss";
import PagesNavigation from "@/components/pages-navigation/PagesNavigation";
import {OrderItem} from "@/components/cart/OrderItem";
import {cartItems} from "@/lib/constants";
import {TotalModule} from "@/components/cart/TotalModule";
import Image from "next/image";
import {useStore} from "@/app/stores/useStore";

export default function Home() {
    const orders = useStore((state) => state.cartItems);
    const setCartItems = useStore((state) => state.setCartItems);

    console.log(orders, 'ajhahjahj');

  return (
    <>
        <div className={` ${styles.product__navigation}`}>
            <PagesNavigation navigationData={[ { id: 0, title: 'главная' }, { id: 1, title: 'Корзина' } ]} />
        </div>

        <div  style={{display: "flex"}}>

        <div className={`container ${cartItemsStyles.cartItems}`} style={{borderRight: '1px solid var(--border)'}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline"}}>

                <Section title={'Корзина'} stylesName={'cart'}/>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: '2rem'}}>
                    <div style={{display: "flex", justifyContent: "space-between", gap: '1rem', marginBottom: '1rem'}}>
                        <input  style={{ transform: 'scale(1.5)', cursor: 'pointer' }}
                                type='checkbox'
                        />
                        <p className={styles.productPrice__availability_text}>Выбрать все</p>
                    </div>

                    <div style={{display: "flex", justifyContent: "space-between", alignItems:"center", gap: '0.5rem', marginBottom: '1rem', cursor: 'pointer'}}>
                        <Image src={'clear.svg'} alt={'clear.svg'} width={25} height={25} />
                        <p className={styles.productPrice__availability_text}>Удалить выбранное</p>
                    </div>
                </div>

            </div>

            {cartItems.map(({ id,
                                  title,
                                  imgSrc,
                                article,
                                  originalPrice,
                                  discountedPrice,
                                  discount, availability }) => (

            <OrderItem key={id} image={imgSrc} title={title} discont={discount} discountedPrice={discountedPrice}  originalPrice={originalPrice} article={article} availability={availability}/>
            ))}


        </div>
            <div  style={{display: "flex", flexDirection: 'column', width: "35%", marginTop: '2rem'}}>
                <Section title={'Итого'} stylesName={'total'}/>
            <TotalModule items={orders || []} />
            </div>
        </div>
    </>
  );
}
