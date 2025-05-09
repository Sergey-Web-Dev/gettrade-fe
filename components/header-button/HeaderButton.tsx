import Image from "next/image"
import { FC } from "react"
import styles from './header-button.module.scss';

interface IHeaderButtonProps {
  imgSrc: string,
  text: string
}

const HeaderButton: FC<IHeaderButtonProps> = ({ imgSrc, text }) => {
  return (
    <button className={styles['header-button']}>
      <Image src={imgSrc} width={20} height={20} alt={`Иконка ${text}`} />
      <span>{text}</span>
    </button>
  )
}

export default HeaderButton