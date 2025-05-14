import { FC } from "react";
import styles from './product-garanty-block.module.scss';

interface IProductGarantyBlock {
    guarantee: string;
    serviceLife: string
}

const ProductGarantyBlock: FC<IProductGarantyBlock> = ({ guarantee, serviceLife }) => {
    return (
        <div className={styles.productGarantyBlock}>
            <ul className={styles.productGarantyBlock__list}>
                <li className={styles.productGarantyBlock__item}>
                    <p className={styles.productGarantyBlock__title}>Срок службы:</p>
                    <p className={styles.productGarantyBlock__value}>{guarantee}</p>
                </li>
                <li className={styles.productGarantyBlock__item}>
                    <p className={styles.productGarantyBlock__title}>Гарантийный срок:</p>
                    <p className={styles.productGarantyBlock__value}>{serviceLife}</p>
                </li>
            </ul>
        </div>
    )
}

export default ProductGarantyBlock;