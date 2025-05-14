import { FC } from "react"
import styles from './product-price.module.scss';

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
                
            </div>
        </div>
    )
}

export default ProductPrice;