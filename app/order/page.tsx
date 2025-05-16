import PagesNavigation from '@/components/pages-navigation/PagesNavigation';
import styles from './page.module.scss';
import OrderContent from '@/components/order/order-content/OrderContent';

const navigationMockData = [
    { id: 0, title: 'Главная' },
    { id: 1, title: 'Корзина' },
    { id: 2, title: 'Оформление заказа' },
]

export default function OrderPage() {

    return (
        <div className={styles.order}>
            <div className={`container ${styles.order__container}`}>
                <div className={styles.order__navigation}>
                    <PagesNavigation navigationData={navigationMockData} />
                </div>
                <p className={styles.order__title}>Оформление заказа</p>
                <OrderContent />
            </div>
        </div>
    )
}