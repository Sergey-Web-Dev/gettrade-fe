import { FC, useState } from "react";
import styles from './product-features-block.module.scss';
import Image from "next/image";

interface IProductFeaturesBlock {
    features: { id: number, text: string }[];
}

const ProductFeaturesBlock: FC<IProductFeaturesBlock> = ({ features }) => {

    const [controlledFeatures ,setControlledFeatures] = useState<{ id: number, text: string }[]>(features.slice(0, 4));
    const [showAll, setShowAll] = useState<boolean>(false);

    const handleSwitchMode = () => {
        setShowAll((prev: boolean) => !prev);
        if(showAll) {
            setControlledFeatures(features.slice(0, 4));
        }   else {
            setControlledFeatures(features);
        }
    }

    return (
        <div className={styles.productFeaturesBlock}>
            <ul className={styles.productFeaturesBlock__list}>
                {controlledFeatures && controlledFeatures.map((feature: { id: number, text: string }) => (
                    <li key={feature.id} className={styles.productFeaturesBlock__feature}>
                        <span /> {feature.text}
                    </li>
                ))}
            </ul>
            <p className={styles.productFeaturesBlock__more} onClick={handleSwitchMode}>
                {!showAll ? 'Показать еще' : 'Скрыть'}
                <Image src='/arrow-down.svg' alt="" width={16} height={16} />
            </p>
        </div>
    )
}

export default ProductFeaturesBlock;