'use client';

import React from "react";
import Section from "@/components/section/Section";
import styles from "@/app/catalog/[product]/page.module.scss";
import cartItemsStyles from "./scss/cartItems.module.scss";
import PagesNavigation from "@/components/pages-navigation/PagesNavigation";
import {OrderItem} from "@/components/cart/OrderItem";
import {TotalModule} from "@/components/cart/TotalModule";
import Image from "next/image";
import {CartItem, useStore} from "@/app/stores/useStore";

export default function Home() {
    const orders = useStore((state) => state.cartItems);
    const setCartItems = useStore((state) => state.setCartItems);

  return (
    <>
        <div  className={` ${styles.product__navigation}`}>
            <PagesNavigation navigationData={[ { id: 0, title: 'главная' }, { id: 1, title: 'Корзина' } ]} />
        </div>

        <div className={'container '} style={{display: "flex", justifyContent: "end"}}>

        <div className={`addPad ${cartItemsStyles.cartItems}`} style={{borderRight: '1px solid var(--border)', width: '75%'}}>
            <div  style={{display: "flex", justifyContent: "space-between", alignItems: "baseline"}}>

                <Section title={'Корзина'} stylesName={'cart'}/>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: '2rem'}}>
                    <div style={{display: "flex", justifyContent: "space-between", gap: '1rem', marginBottom: '1rem'}}>
                        <input
                            style={{ transform: 'scale(1.5)', cursor: 'pointer' }}
                            type="checkbox"
                            onClick={() =>
                                setCartItems(
                                    (orders || []).map((item: CartItem) => ({
                                        ...item,
                                        isChecked: !item.isChecked,
                                    }))
                                )
                            }
                        />
                        <p className={styles.productPrice__availability_text}>Выбрать все</p>
                    </div>

                    <div >
                        <button style={{display: "flex", justifyContent: "space-between", alignItems:"center", gap: '0.5rem', marginBottom: '1rem', cursor: 'pointer'}} type={'button'} onClick={() => {setCartItems(
                            (orders || []).filter((item: CartItem) => !item.isChecked),
                        )}}>

                        <Image src={'clear.svg'} alt={'clear.svg'} width={25} height={25} />
                        <p className={styles.productPrice__availability_text}>Удалить выбранное</p>
                        </button>
                    </div>
                </div>

            </div>

            {orders && orders.map(({ id,
                                  title,
                                  imgSrc,
                                article,
                                  originalPrice,
                                  discountedPrice,
                                  discount, availability, isChecked }: any) => (

            <OrderItem key={id} id={id} image={imgSrc} title={title} discont={discount} discountedPrice={discountedPrice}  originalPrice={originalPrice} article={article} availability={availability} isChecked={isChecked} orders={orders || []} setOrders={setCartItems}/>
            ))}


        </div>
            <div  className={'container'} style={{display: "flex", flexDirection: 'column', width: "25%", margin: '5rem 1rem 0 1rem'}}>
                <Section title={'Итого'} stylesName={'total'}/>
            <TotalModule items={orders || []} />
            </div>
        </div>
    </>
  );
}
