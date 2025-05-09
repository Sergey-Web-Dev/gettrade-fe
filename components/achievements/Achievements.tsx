import { FC } from "react";
import { Achievement } from "../types/achievements";
import AchievementItem from "../achievement-item/AchievementItem";
import styles from './achievements.module.scss';

interface IAchievementsProps {
  achievements: Achievement[];
}

const Achievements: FC<IAchievementsProps> = ({ achievements }) => {
  return (
    <main className={`container ${styles.achievements}`}>
      <h2 className={`h2-header ${styles.achievements__header}`}>Наши достижения</h2>
      <div className={`h2-header ${styles.achievements__items}`}>
        {achievements.map(({ value, text }, index) => <AchievementItem key={index} value={value} text={text} />)}
      </div>
    </main>
  )
}

export default Achievements