import Image from "next/image";
import styles from './menu-button.module.scss';

const MenuButton = () => {
  return (
    <button className={styles['menu-button']}>
      <Image src='/menu-button-lines.svg' width={18} height={12} alt='Меню' />
      <span>КАТАЛОГ</span>
    </button>
  )
}

export default MenuButton;