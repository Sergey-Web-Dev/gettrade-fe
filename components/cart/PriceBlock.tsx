import styles from "@/components/product-by-id/product-price/product-price.module.scss";
import { FC } from "react";

interface PriceProps {
    count: number;
    discont: number;
    discountedPrice: number;
    originalPrice: number;
    parentClassName: string;
    childClassName: string;
}

const PriceBlock: FC<PriceProps> = ({ count, discont, discountedPrice, originalPrice, parentClassName, childClassName }) => {
    return (
        <div className={childClassName}>
            <div className={`${styles.productPrice__discountPrice} ${parentClassName}`}>
                <span className={styles.productPrice__discount}>-{discont}%</span>
                <p>{discountedPrice} ₽</p>
            </div>
            <p className={styles.productPrice__originalPrice}>{originalPrice} ₽</p>
        </div>
    );
};

export default PriceBlock;
