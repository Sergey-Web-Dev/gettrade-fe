import React, { FC } from "react"
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

const totalFields = (length: number, totalPrice: number, totalDiscount: number, totalBonus: number)  => {
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
        value: `${totalDiscount} ₽`
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
    const totalDiscountedPrice = items.reduce((sum, item) => sum + item.discountedPrice, 0);
    const totalBonus = items.reduce((sum, item) => sum + item.bonus, 0);
    const totalDiscount = items.reduce((sum, item) => {
        const discountAmount = item.originalPrice * (item.discount / 100);
        return sum + discountAmount;
    }, 0);

    return (
        <div  style={{padding:'1.5rem'}}>
            <input className={totalStyle.inputText}  type='text' placeholder={'Промокод'} />
            <ul className={styles.productMainInfo__list} style={{margin: '1rem 0 1rem 0', gap: '1rem'}}>
                {totalFields && totalFields(items.length, totalDiscountedPrice, totalDiscount, totalBonus).map((characteristic: { id: number, title: string, value: string }) => (
                    <li className={styles.productMainInfo__item} key={characteristic.id}>
                        <p className={styles.productMainInfo__title}>{characteristic.title}</p>
                        <p className={styles.productMainInfo__value}>{characteristic.value}</p>
                    </li>
                ))}
            </ul>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: '1rem'}}>
                <Section title={'К оплате'} stylesName={'toPay'}/>
                <h4 className={titleStyle.orderItem__titles__prices__discounted}>123 ₽</h4>
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
