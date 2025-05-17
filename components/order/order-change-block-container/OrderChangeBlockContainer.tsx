import { FC } from "react";
import styles from './order-change-block-container.module.scss';
import PersonalBlock from "./blocks/personal-block/PersonalBlock";
import CheckoutBlock from "./blocks/checkout-block/CheckoutBlock";
import CompletionBlock from "./blocks/completion-block/CompletionBlock";

interface IOrderChangeBlockContainer {
    active: number;
    body: any;
    setNext: (values: any) => void;
    setPrev: (values: any) => void;
}

const OrderChangeBlockContainer: FC<IOrderChangeBlockContainer> = ({ active, body, setNext, setPrev }) => {
    switch(active) {
        case 0:
            return <div className={styles.container}> <PersonalBlock setNext={setNext} body={body} /> </div>
        case 1:
            return <div className={styles.container}> <CheckoutBlock setNext={setNext} setPrev={setPrev} body={body} /> </div>
        case 2:
            return <div className={styles.container}> <CompletionBlock /> </div>
        default:
            return <div className={styles.container}> <PersonalBlock setNext={setNext} body={body}  /> </div>
    }
}

export default OrderChangeBlockContainer;