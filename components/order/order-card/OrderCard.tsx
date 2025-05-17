import { FC } from "react";
import styles from './order-card.module.scss';
import { OrderCardType } from "@/components/types/orderCard";

interface IOrderCard {
    order: OrderCardType
}

const OrderCard: FC<IOrderCard> = ({ order }) => {
    return (
        <div className={styles.completionBlock}>
            
        </div>
    )
}

export default OrderCard;