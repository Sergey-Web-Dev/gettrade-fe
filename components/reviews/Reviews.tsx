import { FC, useState } from "react";
import styles from './reviews.module.scss';
import { Review } from "../types/review";
import ReviewCard from "../review-card/ReviewCard";
import ActionButton from "../action-button/ActionButton";

interface IReviews {
    reviews: Review[];
    pages: number;
}

const filters = [
    { id: 0, title: 'Сначала новые' },
    { id: 1, title: 'Сначала старые' },
    { id: 2, title: 'С высокой оценкой' },
    { id: 3, title: 'С низкой оценкой' },
];

const Reviews: FC<IReviews> = ({ reviews, pages }) => {

    const [activeTab, setActiveTab] = useState<{ id: number, title: string }>(filters[0]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const handleChangeActiveTab = (activeTab: { id: number, title: string }) => {
        setActiveTab(activeTab);
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
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
            <ActionButton text="ПОКАЗАТЬ ЕЩЕ" onClick={() => null} type="medium-grey"/>
            <ul className={styles.reviews__pages}>
                {Array.from({ length: pages }, (_, index) => (
                    <li 
                        key={index + 1}
                        className={`
                            ${styles.reviews__page} 
                            ${currentPage === index + 1 ? styles.reviews__pageActive : ''}
                        `}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Reviews;