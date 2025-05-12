import Image from "next/image";
import styles from './menu-button.module.scss';

interface IMenuButtonProps {
  isMenuActive: boolean;
  onChangeMenuVisible: () => void;
}

const MenuButton = ({ isMenuActive, onChangeMenuVisible }: IMenuButtonProps) => {
  return (
    <button className={styles['menu-button']} onClick={onChangeMenuVisible}>
      {isMenuActive ? (
        <Image src='/cross-icon.svg' width={18} height={14} alt='Меню' />
      ) : (
        <Image src='/menu-button-lines.svg' width={18} height={12} alt='Меню' />
      )}
      <span>КАТАЛОГ</span>
    </button>
  )
}

export default MenuButton;