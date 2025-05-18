import { FC } from "react";
import styles from './pages-navigation.module.scss';

interface IPagesNavigation {
    navigationData: { id: number, title: string} [];
}

const PagesNavigation: FC<IPagesNavigation> = ({ navigationData }) => {
    return (
        <ul className={`container ${styles.pagesNavigation}`}>
            {navigationData && navigationData.map((navigationItem: { id: number, title: string}) => (
                <li key={navigationItem.id} className={styles.pagesNavigation__item}>
                    <span className={styles.pagesNavigation__item_slash}>/</span> <span>{navigationItem.title}</span>
                </li>
            ))}
        </ul>
    )
}

export default PagesNavigation;