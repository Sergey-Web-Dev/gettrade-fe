'use client';

import React from "react";
import Section from "@/components/section/Section";
import styles from "@/app/catalog/[product]/page.module.scss";
import cartItemsStyles from "./scss/cartItems.module.scss";
import PagesNavigation from "@/components/pages-navigation/PagesNavigation";
import {OrderItem} from "@/components/cart/OrderItem";
import {cartItems, mockData} from "@/lib/constants";
import ProductPrice from "@/components/product-by-id/product-price/ProductPrice";

export default function Home() {

  return (
    <>
        <div className={` ${styles.product__navigation}`}>
            <PagesNavigation navigationData={[ { id: 0, title: 'главная' }, { id: 1, title: 'Корзина' } ]} />
        </div>
      <Section title={'Корзина'} stylesName={'cart'}/>
        <div  style={{display: "flex"}}>

        <div className={`container ${cartItemsStyles.cartItems}`} style={{borderRight: '1px solid var(--border)'}}>
            {cartItems.map(({ id,
                                  title,
                                  imgSrc,
                                article,
                                  originalPrice,
                                  discountedPrice,
                                  discount, availability }) => (

            <OrderItem key={id} image={imgSrc} title={title} discont={discount} discountedPrice={discountedPrice}  originalPrice={originalPrice} article={article} availability={availability} />
            ))}


        </div>
            <div  style={{display: "flex", width: "40%"}}>

            <ProductPrice
                originalPrice={mockData.originalPrice}
                discountedPrice={mockData.discountedPrice}
                discont={mockData.discont}
                isFavorite={mockData.isFavorite}
                bonuses={mockData.bonuses}
                availability={mockData.availability}
            />
            </div>
        </div>
    </>
  );
}
