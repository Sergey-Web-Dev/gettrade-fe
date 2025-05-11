import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import styles from './images-slider-item.module.scss';

interface IImagesSliderItemProps {
  imgSrc: string,
  link: string,
}

const ImagesSliderItem: FC<IImagesSliderItemProps> = ({ imgSrc, link }) => {
  return (
    <Link className={styles.item} href={link}>
      <Image src={imgSrc} fill={true} alt="" />
    </Link>
  )
}

export default ImagesSliderItem