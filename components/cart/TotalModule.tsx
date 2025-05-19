import React, {FC, useEffect} from "react"
import Section from "@/components/section/Section";
import styles from "../product-by-id/product-content/product-content-blocks/product-main-info/product-main-info.module.scss";
import totalStyle from "./total.module.scss";
import titleStyle from "./orderItem.module.scss";
import ActionButton from "@/components/action-button/ActionButton";
import {CartItem} from "@/app/stores/useStore";
import {redirect} from "next/navigation";

interface IProductPrice {
    originalPrice: number;
    discountedPrice: number;
    discont: number;
    isFavorite: boolean;
    bonuses: number;
    availability: number;
}

const totalFields = (length: number, totalPrice: string, totalDiscount: string, totalBonus: string)  => {
    return [
    {
        id: 1,
        title: `Товары, ${length} шт.`,
        value: `${totalPrice} ₽`
    },
    {
        id: 2,
        title: 'Доставка',
        value: '498 ₽'
    },
    {
        id: 3,
        title: 'Скидка',
        value: `-${totalDiscount} ₽`
    },
    {
        id: 4,
        title: 'Бонусные GETы',
        value: `+ ${totalBonus}`
    },

]}

type TotalModuleProps = {
    items: CartItem[];
}

export const TotalModule: FC<TotalModuleProps> = ({items}) => {
    const totalDiscountedPrice = items.filter(el => Number(el.availability) > 0).reduce((sum, item) => sum + item.discountedPrice * item.count, 0).toFixed(2);
    const totalBonus = items.filter(el => Number(el.availability) > 0).reduce((sum, item) => sum + item.bonus * item.count, 0).toFixed(2);
    const totalDiscount = items.filter(el => Number(el.availability) > 0).reduce((sum, item) => {
        const discountAmount = item.originalPrice * (item.discount / 100) ;
        return sum + discountAmount * item.count;
    }, 0).toFixed(2);

    return (
        <div  style={{padding:'1.5rem'}}>
            <input className={totalStyle.inputText}  type='text' placeholder={'Промокод'} />
            <ul className={styles.productMainInfo__list} style={{margin: '1rem 0 1rem 0', gap: '1rem'}}>
                {totalFields && totalFields(items.length, totalDiscountedPrice, totalDiscount, totalBonus).map((characteristic: { id: number, title: string, value: string }) => (
                    <li className={styles.productMainInfo__item} key={characteristic.id}>
                        <p className={styles.productMainInfo__title}>{characteristic.title}</p>
                        <p style={
                            characteristic.id === 3
                                ? { color: 'red' }
                                : { color: 'black' }
                        } className={styles.productMainInfo__value}>{characteristic.value}  {characteristic.id === 4 && (
                            <span
                                style={{
                                    backgroundColor: 'var(--brand-blue)',
                                    width: '1rem',
                                    height: '1rem',
                                    display: 'inline-block',
                                    marginLeft: '0.5rem',
                                }}
                            ></span>
                        )}</p>
                    </li>
                ))}
            </ul>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: '1rem'}}>
                <Section title={'К оплате'} stylesName={'toPay'}/>
                <h4 className={titleStyle.orderItem__titles__prices__discounted}>{totalDiscountedPrice} ₽</h4>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", gap: '1rem', marginBottom: '1rem'}}>
                <input  style={{ transform: 'scale(1.5)', cursor: 'pointer' }}
                         type='checkbox'
                        />
                <p className={styles.productPrice__availability_text}>Я прочитал и согласен с условиями  <span style={{color:'blue', textDecoration: 'underline', cursor: 'pointer'}}>публичной оферты</span></p>
            </div>
            <ActionButton text="ЗАКАЗАТЬ" onClick={() => redirect(`/order`)} type="medium-blue" />
        </div>
    )
}
