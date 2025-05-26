import { FC } from "react";
import ActionButton from "../action-button/ActionButton"
import styles from './slider-image-description.module.scss';

interface ISliderImageDescription {
  description?: string
}

const SliderImageDescription: FC<ISliderImageDescription> = ({ description }) => {
  return (
    <div className={styles['slider-image-description']}>
      <h3 className={styles['slider-image-description__header']}>{description}</h3>
      {description && <button className={styles['slider-image-description__button']}>Купить</button>}
    </div>
  )
}

export default SliderImageDescription