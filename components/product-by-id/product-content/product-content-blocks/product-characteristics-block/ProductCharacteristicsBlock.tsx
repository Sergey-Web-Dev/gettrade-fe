import { FC } from "react";
import styles from './product-characteristics-block.module.scss';

interface IProductCharacteristicsBlock {
    characteristics: { id: number, title: string, value: string }[];
}

const ProductCharacteristicsBlock: FC<IProductCharacteristicsBlock> = ({ characteristics }) => {
    return (
        <div className={styles.productCharacteristicsBlock}>
            <ul className={styles.productCharacteristicsBlock__list}>
                {characteristics && characteristics.map((characteristic: { id: number, title: string, value: string }) => (
                    <li className={styles.productCharacteristicsBlock__item} key={characteristic.id}>
                        <p className={styles.productCharacteristicsBlock__title}>{characteristic.title}</p>
                        <p className={styles.productCharacteristicsBlock__value}>{characteristic.value}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductCharacteristicsBlock;