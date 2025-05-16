import { StepControllerType } from "@/components/types/stepController";
import { FC } from "react";
import styles from './checkout-block.module.scss';

interface ICheckoutBlock {
    setActive: (active: StepControllerType) => void;
}

const CheckoutBlock: FC<ICheckoutBlock> = ({ setActive }) => {
    return (
        <div className={styles.checkoutBlock}></div>
    )
}

export default CheckoutBlock;