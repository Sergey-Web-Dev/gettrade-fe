'use client';

import Image from "next/image";
import MenuButton from "../menu-button/MenuButton";
import styles from './header.module.scss';
import SearchBar from "../search-bar/SearchBar";
import HeaderButton from "../header-button/HeaderButton";
import { useState } from "react";
import CatalogNavMenu from "../catalog-menu/CatalogMenu";

const headerButtons = [
  { imgSrc: '/favourites-icon.svg', text: 'Избранное' },
  { imgSrc: '/cart-icon.svg', text: 'Корзина' },
  { imgSrc: '/login-icon.svg', text: 'Войти' }
]

const Header = () => {

  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const handleChangeMenuVisible = () => {
    setIsMenuActive((prev: boolean) => !prev);
  };

  return (
    <header style={{ borderBottom: '1px solid rgba(209, 209, 209, 1)' }}>
      <div className={`container ${styles.header}`}>
        <Image src='/header-logo.svg' width={230} height={56} alt="Логотип GetTrade" />
        <div className={styles.header__nav}>
          <MenuButton isMenuActive={isMenuActive} onChangeMenuVisible={handleChangeMenuVisible} />
          <SearchBar />
          <div className={styles.header__nav__buttons}>
            {headerButtons.map(({ imgSrc, text }, index) => <HeaderButton key={index} imgSrc={imgSrc} text={text} />)}
          </div>
        </div>
      </div>
      {isMenuActive ? <CatalogNavMenu /> : null}
    </header>
  )
}

export default Header;