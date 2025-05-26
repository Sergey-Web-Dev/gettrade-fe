import Image from "next/image"
import { FC } from "react"
import styles from './images-slider-item.module.scss';
import SliderImageDescription from "../slider-image-description/SliderImageDescription";

interface IImagesSliderItemProps {
  imgSrc: string,
  link: string,
  description: string
}

const ImagesSliderItem: FC<IImagesSliderItemProps> = ({ imgSrc, link, description }) => {
  return (
    <div className={styles.item}>
      <Image src={imgSrc} fill={true} objectFit='cover' alt="" />
      <SliderImageDescription description={description} />
    </div>
  )
}

export default ImagesSliderItem