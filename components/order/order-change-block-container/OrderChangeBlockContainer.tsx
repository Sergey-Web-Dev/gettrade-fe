import { FC } from "react";
import styles from './order-change-block-container.module.scss';
import PersonalBlock from "./blocks/personal-block/PersonalBlock";
import CheckoutBlock from "./blocks/checkout-block/CheckoutBlock";
import CompletionBlock from "./blocks/completion-block/CompletionBlock";
import { StepControllerType } from "@/components/types/stepController";

interface IOrderChangeBlockContainer {
    active: string | undefined;
    setActive: (active: StepControllerType) => void;
}

const OrderChangeBlockContainer: FC<IOrderChangeBlockContainer> = ({ active, setActive }) => {
    switch(active) {
        case 'personal':
            return <div className={styles.container}> <PersonalBlock setActive={setActive} /> </div>
        case 'checkout':
            return <div className={styles.container}> <CheckoutBlock setActive={setActive} /> </div>
        case 'completion':
            return <div className={styles.container}> <CompletionBlock setActive={setActive} /> </div>
        default:
            return <div className={styles.container}> <PersonalBlock setActive={setActive} /> </div>
    }
}

export default OrderChangeBlockContainer;