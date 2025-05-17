import { FC } from "react";
import styles from './order-card.module.scss';
import { OrderCardType } from "@/components/types/orderCard";
import Image from "next/image";

interface IOrderCard {
    order: OrderCardType
}

const OrderCard: FC<IOrderCard> = ({ order }) => {
    return (
        <div className={styles.completionBlock}>
            <div className={styles.completionBlock__left}>
                <Image src={order.img} alt="" width={64} height={64} className={styles.completionBlock__img} />
                <div className={styles.completionBlock__inf}>
                    <p className={styles.completionBlock__category}>{order.category}</p>
                    <p className={styles.completionBlock__name}>{order.title}</p>
                    <p className={styles.completionBlock__articul}>{order.articul}</p>
                </div>
            </div>
            <div className={styles.completionBlock__right}>
                <p>{order.count}</p> <span>x</span> <p>{order.price}</p>
            </div>
        </div>
    )
}

export default OrderCard;