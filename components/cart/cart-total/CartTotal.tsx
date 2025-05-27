import React, {FC} from "react"
import styles from "./cart-total.module.scss";
import {useRouter} from "next/navigation";
import ActionButton from "@/components/action-button/ActionButton";
import {OrderItem} from "@/lib/types/orderTypes/types";

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
    ]
}

type TotalModuleProps = {
    items: OrderItem[];
}

export const CartTotal: FC<TotalModuleProps> = ({ items }) => {

    const router = useRouter();

    const totalDiscountedPrice = items.filter(el => Number(el.product.quantityAvailable) > 0).reduce((sum, {product, quantity}) => sum + (product.price - (product.price * (product.discount / 100))) * quantity, 0).toFixed(2);
    const totalBonus = items.filter(el => Number(el.product.quantityAvailable) > 0).reduce((sum, {product, quantity}) => sum + product.bonuses * quantity, 0).toFixed(2);
    const totalDiscount = items.filter(el => Number(el.product.quantityAvailable) > 0).reduce((sum, {product, quantity}) => {
        const discountAmount = product.price * (product.discount / 100) ;
        return sum + discountAmount * quantity;
    }, 0).toFixed(2);

    const renderedFieldsData = totalFields(items.length, totalDiscountedPrice, totalDiscount, totalBonus);

    const handleOrder = () => {
        router.push('/order')
    }

    return (
        <div className={styles.totalModule}>
            <p className={styles.totalModule__title}>Итого</p>
            <input className={styles.totalModule__discount} type='text' placeholder={'Промокод'} />
            <ul className={styles.totalModule__list}>
                {renderedFieldsData && renderedFieldsData.map((field: { id: number, title: string, value: string }) => (
                    <li className={styles.totalModule__item} key={field.id}>
                        <p className={styles.totalModule__item_title}>{field.title}</p>
                        <p
                            style={ field.id === 3 ? { color: '#BA2528' } : { color: '#000' } }
                            className={styles.totalModule__value}
                        >
                            {field.value}
                            {field.id === 4 && (
                                <span className={styles.totalModule__bonuses}></span>
                            )}
                        </p>
                    </li>
                ))}
            </ul>
            <div className={styles.totalModule__pay}>
                <p className={styles.totalModule__title}>К оплате</p>
                <h4 className={styles.totalModule__amount}>{totalDiscountedPrice} ₽</h4>
            </div>
            <div className={styles.totalModule__agreement}>
                <input type='checkbox' className={styles.totalModule__checkbox} />
                <p className={styles.totalModule__agreementText}>
                    Я прочитал и согласен с условиями
                    <span className={styles.totalModule__agreementOfert}> публичной оферты</span>
                </p>
            </div>
            <ActionButton text="ЗАКАЗАТЬ" onClick={handleOrder} type="medium-blue" />
        </div>
    )
}
