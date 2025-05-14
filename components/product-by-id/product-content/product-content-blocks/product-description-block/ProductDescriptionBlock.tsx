import { FC, useState } from "react";
import styles from './product-description-block.module.scss';
import Image from "next/image";

interface IProductDescriptionBlock {
    description: string;
}

const ProductDescriptionBlock: FC<IProductDescriptionBlock> = ({ description }) => {

    const slicedDescription = description.slice(0, 456);
    const [showAll, setShowAll] = useState<boolean>(false);

    const handleSwitchMode = () => {
        setShowAll((prev: boolean) => !prev);
    }

    return (
        <div className={styles.productDescriptionBlock}>
            <p>{showAll ? description : slicedDescription}</p>
            <p className={styles.productDescriptionBlock__more} onClick={handleSwitchMode}>
                {!showAll ? 'Показать еще' : 'Скрыть'}
                <Image src='/arrow-down.svg' alt="" width={16} height={16} />
            </p>
        </div>
    )
}

export default ProductDescriptionBlock;