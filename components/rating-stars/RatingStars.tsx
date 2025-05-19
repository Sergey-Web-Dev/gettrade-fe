import { FC } from "react";
import styles from './rating-stars.module.scss';
import Image from "next/image";

interface IRatingStars {
    rate: number;
}

const RatingStars: FC<IRatingStars> = ({ rate }) => {

    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<Image key={i} src={'/star.svg'} alt="yellow star" width={24} height={24} />);
    }

    if (hasHalfStar) {
        stars.push( <Image key={fullStars} src={'/star-half.svg'} alt="half star" width={24} height={24}  />);
    }

    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
        stars.push(<Image key={i} src={'/empty-star.svg'} alt="gray star" width={24} height={24} />);
    }

    return <div className={styles.stars}> {stars} </div>;
}

export default RatingStars;