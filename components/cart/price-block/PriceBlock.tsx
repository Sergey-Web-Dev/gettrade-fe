import { FC } from "react";
import styles from './price-block.module.scss';

interface PriceProps {
    discont: number;
    discountedPrice: number;
    originalPrice: number;
}

const PriceBlock: FC<PriceProps> = ({ discont, discountedPrice, originalPrice }) => {
    return (
        <div className={styles.priceBlock}>
            <div className={styles.priceBlock__discountPrice}>
                <span className={styles.priceBlock__discount}>-{discont}%</span>
                <p>{discountedPrice} ₽</p>
            </div>
            <p className={styles.priceBlock__originalPrice}>{originalPrice} ₽</p>
        </div>
    );
};

export default PriceBlock;
