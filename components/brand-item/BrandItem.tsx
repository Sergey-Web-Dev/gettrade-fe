import Image from "next/image"
import { FC } from "react"
import styles from './brand-item.module.scss';

interface IBrandItemProps {
  imgSrc: string
}

const BrandItem: FC<IBrandItemProps> = ({ imgSrc }) => {
  return (
    <Image className={styles['brand__image']} style={{objectFit: 'cover'}} src={imgSrc} width={250} height={134} alt="" />
  )
}

export default BrandItem