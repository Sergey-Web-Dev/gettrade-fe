import Image from "next/image"
import { FC } from "react"
import styles from './header-button.module.scss';
import Link from 'next/link';

interface IHeaderButtonProps {
  imgSrc: string,
  text: string
    href: string,
}

const HeaderButton: FC<IHeaderButtonProps> = ({ imgSrc, text, href }) => {
  return (
      <Link href={href} passHref>
        <button className={styles['header-button']}>
          <Image className={styles['header-button__icon']} src={imgSrc} width={20} height={20} alt={`Иконка ${text}`} />
          <span>{text}</span>
        </button>
      </Link>
  )
}

export default HeaderButton