import { FC } from "react";
import styles from './rating-stars.module.scss';
import Image from "next/image";

interface IRatingStars {
    rate: number;
}

const RatingStars: FC<IRatingStars> = ({ rate }) => {

    const roundedRate = Math.round(rate);

    return (
        <div className={styles.stars}>
            {Array.from({ length: 5 }, (_, index) => (
                <Image
                    key={index}
                    src={index < roundedRate ? '/star.svg' : '/empty-star.svg'} 
                    alt={index < roundedRate ? "Filled Star" : "Empty Star"} 
                    className={index < roundedRate ? styles.stars__star : styles.stars__empty_star}
                    width={24}
                    height={24}
                />
            ))}
        </div>
    )
}

export default RatingStars;