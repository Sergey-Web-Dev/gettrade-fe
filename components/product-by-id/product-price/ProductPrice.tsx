import { FC } from "react"
import styles from './product-price.module.scss';
import Image from "next/image";
import ActionButton from "@/components/action-button/ActionButton";

interface IProductPrice {
    originalPrice: number;
    discountedPrice: number;
    isFavorite: boolean;
    bonuses: number;
    availability: number;
}

const ProductPrice: FC<IProductPrice> = ({  }) => {
    return (
        <div className={styles.productPrice}>
            <div className={styles.productPrice__priceAndFavorite}>
                <p className={styles.productPrice__discountPrice}>
                    <span className={styles.productPrice__discount}></span>
                </p>
                <button className={styles.productPrice__favorite}>
                    <Image src='/favourites.svg' width={20} height={18} alt={`Добавить в избранное`} />
                </button>
            </div>
            <p className={styles.productPrice__originalPrice}></p>
            <p className={styles.productPrice__bonuses}>
                +339
                <span className={styles.productPrice__bonusIcon}></span>
                <span className={styles.productPrice__bonusText}></span>
            </p>
            <div className={styles.productPrice__btns}>
                <ActionButton text="В корзину" onClick={() => null} />
                <ActionButton text="Купить в 1 клик" onClick={() => null} />
            </div>
        </div>
    )
}

export default ProductPrice;