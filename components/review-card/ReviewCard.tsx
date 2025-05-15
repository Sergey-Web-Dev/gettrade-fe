import { FC } from "react";
import styles from './review-card.module.scss';
import { Review } from "../types/review";
import Image from "next/image";
import RatingStars from "../rating-stars/RatingStars";

interface IReviewCard {
    review: Review
}

const ReviewCard: FC<IReviewCard> = ({ review }) => {

    return (
        <div className={styles.reviewCard}>
            <div className={styles.reviewCard__head}>
                <div className={styles.reviewCard__person}>
                    <Image src={review.person.avatar} alt="avatar" width={36} height={36} className={styles.reviewCard__avatar} />
                    <div className={styles.reviewCard__rerson_inf}>
                        <p className={styles.reviewCard__person_name}>{review.person.name}</p>
                        <p className={styles.reviewCard__buy_by}>Товар куплен на gettrade.ru</p>
                    </div>
                </div>
                <div className={styles.reviewCard__rate}>
                    <RatingStars rate={review.rate} />
                    <p className={styles.reviewCard__rate_num}>{review.rate}</p>
                </div>
            </div>
            <ul className={styles.reviewCard__attaches}>
                {review.attaches.length ? review.attaches.map((attach: { id: number, imgSrc: string }) => (
                    <li key={attach.id}>
                        <Image src={attach.imgSrc} alt="attach" width={64} height={64} className={styles.reviewCard__attach} />
                    </li>
                )) : null}
            </ul>
            <ul className={styles.reviewCard__data}>
                <li className={styles.reviewCard__option}>
                    <p className={styles.reviewCard__option_text}>
                        <span className={styles.reviewCard__option_name}> Комментарий: </span> 
                        {review.comment}
                    </p>
                </li>
                <li className={styles.reviewCard__option}>
                    <p className={styles.reviewCard__option_text}>
                        <span className={styles.reviewCard__option_name}>Достоинства: </span> 
                        {review.advantages}
                    </p>
                </li>
                <li className={styles.reviewCard__option}>
                    <p className={styles.reviewCard__option_text}>
                        <span className={styles.reviewCard__option_name}>Недостатки: </span> 
                        {review.disadvantages}
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default ReviewCard;