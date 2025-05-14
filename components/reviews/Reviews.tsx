import { FC, useState } from "react";
import styles from './reviews.module.scss';
import { Review } from "../types/review";
import ReviewCard from "../review-card/ReviewCard";

interface IReviews {
    reviews: Review[];
}

const filters = [
    { id: 0, title: 'Сначала новые' },
    { id: 1, title: 'Сначала старые' },
    { id: 2, title: 'С высокой оценкой' },
    { id: 3, title: 'С низкой оценкой' },
];

const Reviews: FC<IReviews> = ({ reviews }) => {

    const [activeTab, setActiveTab] = useState<{ id: number, title: string }>(filters[0]);

    const handleChangeActiveTab = (activeTab: { id: number, title: string }) => {
        setActiveTab(activeTab);
    }

    return (
        <div className={styles.reviews}>
            <ul className={styles.reviews__filters}>
                {filters && filters.map((filter: { id: number, title: string }) => (
                    <li
                    key={filter.id}
                        className={` ${styles.reviews__filter} ${activeTab.id === filter.id ? styles.reviews__filterActive : ''} `}
                        onClick={() => handleChangeActiveTab(filter)}
                    >
                        {filter.title}
                    </li>
                ))}
            </ul>
            <ul className={styles.reviews__cards}>
                {reviews && reviews.map((review: Review) => (
                    <div key={review.id}>
                        <ReviewCard review={review} />
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Reviews;