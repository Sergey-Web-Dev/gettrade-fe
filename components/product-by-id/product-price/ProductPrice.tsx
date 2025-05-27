import { FC } from "react"
import styles from './product-price.module.scss';
import Image from "next/image";
import ActionButton from "@/components/action-button/ActionButton";
import {useAddToCart} from "@/features/orderItem/model/use-add-to-cart";

interface IProductPrice {
    originalPrice: number;
    discountedPrice: number;
    discont: number;
    isFavorite: boolean;
    bonuses: number;
    availability: number;
}

const ProductPrice: FC<IProductPrice> = ({ originalPrice, discountedPrice, discont, isFavorite, bonuses, availability }) => {
    const { addItem} = useAddToCart()
    return (
        <div className={styles.productPrice}>
            <div className={styles.productPrice__priceAndFavorite}>
                <div className={styles.productPrice__discountPrice}>
                    <p>{discountedPrice} ₽</p>
                    <span className={styles.productPrice__discount}>-{discont}%</span>
                </div>
                <button className={styles.productPrice__favorite}>
                    <Image src='/favourites.svg' width={20} height={18} alt={`Добавить в избранное`} />
                </button>
            </div>
            <p className={styles.productPrice__originalPrice}>{originalPrice} ₽</p>
            <p className={styles.productPrice__bonuses}>
                <span>+{bonuses}</span>
                <span className={styles.productPrice__bonusIcon}></span>
                <span className={styles.productPrice__bonusText}>бонусных GETов за покупку</span>
            </p>
            <div className={styles.productPrice__btns}>
                <ActionButton
                    text="В КОРЗИНУ"
                    type="medium-blue"
                    onClick={() => {
                        addItem({data: {
                                quantity: 1,
                                productId: '1f39019d-9fc4-436d-a2b6-094e75211bc9',
                                orderId: '1f39019d-9fc4-436d-a2b6-094e75211bc9',
                                available: 15,
                                price: 1599,
                            }})
                    }}
                />
                <ActionButton text="КУПИТЬ В 1 КЛИК" onClick={() => null} type="medium-grey" />
            </div>
            <div className={styles.productPrice__availability}>
                <Image src='/availability.svg' alt="" width={16} height={16} />
                <p className={styles.productPrice__availability_text}>В наличии: <span>{availability} шт.</span></p>
            </div>
        </div>
    )
}

export default ProductPrice;