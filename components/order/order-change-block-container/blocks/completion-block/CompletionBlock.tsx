import { FC } from "react";
import styles from './completion-block.module.scss';
import { OrderCardType } from "@/components/types/orderCard";
import OrderCard from "@/components/order/order-card/OrderCard";
import ActionButton from "@/components/action-button/ActionButton";
import { useRouter } from "next/navigation";
import Image from "next/image";

const orders = [
    { id: 0, title: 'Гарнитура Cooler Master CH331 USB', category: 'Наушники', articul: 'А066242', img: '', count: 2, price: '1 599 ₽' },
    { id: 1, title: 'Beyerdynamic DT 990 PRO 250 ohms', category: 'Наушники', articul: 'А066242', img: '', count: 1, price: '1 599 ₽' },
];

const isSuccess = true;

const CompletionBlock: FC = () => {

    const router = useRouter();

    const title = isSuccess ? 'Заказ успешно оформлен' : 'Неудалось завершить оплату';
    const img = isSuccess ? '/blue-check.png' : '/red-cross.png';
    const subtitle = isSuccess ? 'Номер отслеживания появится на страничке «Мои заказы» после того, как заказ получит статус «Выполнен»' : 'Попробуйте сменить метод оплаты или попробуйте позже';

    const handleNavigateToOrders = () => {
        router.push('/');
    }

    return (
        <div className={styles.completionBlock}>
            <div className={styles.completionBlock__head}>
                <Image 
                    src={img}
                    alt=""
                    width={32}
                    height={32}
                />
                <p className={styles.completionBlock__title}>{title}</p>
            </div>
            <p className={styles.completionBlock__subtitle}>{subtitle}</p>
            <ul className={styles.completionBlock__orders}>
                {orders && orders.map((order: OrderCardType) => (
                    <OrderCard order={order} />
                ))}
            </ul>
            <div className={styles.completionBlock__btn}>
                <ActionButton text="ПЕРЕЙТИ В МОИ ЗАКАЗЫ" onClick={handleNavigateToOrders} type="medium-blue" />
            </div>
        </div>
    )
}

export default CompletionBlock;