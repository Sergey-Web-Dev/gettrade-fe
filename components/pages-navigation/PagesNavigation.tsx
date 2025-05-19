import { FC } from "react";
import styles from './pages-navigation.module.scss';

interface IPagesNavigation {
    navigationData: { id: number, title: string} [];
}

const PagesNavigation: FC<IPagesNavigation> = ({ navigationData }) => {
    return (
        <ul style={{padding: '0 1rem 0 1rem'}} className={`container  ${styles.pagesNavigation}`}>
            {navigationData && navigationData.map((navigationItem: { id: number, title: string}) => (
                <li key={navigationItem.id} className={styles.pagesNavigation__item}>
                    <span className={styles.pagesNavigation__item_slash}>/</span> <span>{navigationItem.title}</span>
                </li>
            ))}
        </ul>
    )
}

export default PagesNavigation;