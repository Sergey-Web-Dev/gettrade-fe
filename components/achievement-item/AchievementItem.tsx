import Image from "next/image"
import { FC } from "react";
import styles from './achievement-item.module.scss';

interface IAchievementItemProps {
  value: string;
  text: string;
}

const AchievementItem: FC<IAchievementItemProps> = ({ value, text }) => {
  return (
    <div className={styles['achievement-item']}>
      <Image src='/arrow-icon.svg' width={36} height={36} alt='Иконка стрелки' />
      <div>
        <p className={styles['achievement-item__value']}>{value}</p>
        <p className={styles['achievement-item__text']}>{text}</p>
      </div>
    </div>
  )
}

export default AchievementItem