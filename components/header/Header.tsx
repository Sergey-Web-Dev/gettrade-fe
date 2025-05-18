'use client';

import Image from "next/image";
import MenuButton from "../menu-button/MenuButton";
import styles from './header.module.scss';
import SearchBar from "../search-bar/SearchBar";
import HeaderButton from "../header-button/HeaderButton";
import { useRef, useState } from "react";
import CatalogNavMenu from "../catalog-menu/CatalogMenu";
import { useClickOutsideAndClose } from "@/hooks/useClickOutside";

const headerButtons = [
  { imgSrc: '/favourites-icon.svg', text: 'Избранное', href: '/cart' },
  { imgSrc: '/cart-icon.svg', text: 'Корзина', href: '/cart' },
  { imgSrc: '/login-icon.svg', text: 'Войти' , href: '/cart'}
]

const Header = () => {

  const catalogNavMenuRef = useRef(null);
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  useClickOutsideAndClose(catalogNavMenuRef, () => setIsMenuActive(false));

  const handleChangeMenuVisible = () => {
    setIsMenuActive((prev: boolean) => !prev);
  };

  return (
    <header style={{ borderBottom: '1px solid rgba(209, 209, 209, 1)', position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#fff' }}>
      <div className={`container ${styles.header}`}>
        <Image src='/header-logo.svg' width={230} height={56} alt="Логотип GetTrade" />
        <div className={styles.header__nav}>
          <MenuButton isMenuActive={isMenuActive} onChangeMenuVisible={handleChangeMenuVisible} />
          <SearchBar />
          <div className={styles.header__nav__buttons}>
            {headerButtons.map(({ imgSrc, text, href }, index) => <HeaderButton key={index} imgSrc={imgSrc} text={text} href={href} />)}
          </div>
        </div>
      </div>
      {isMenuActive ? <div ref={catalogNavMenuRef}><CatalogNavMenu /></div> : null}
    </header>
  )
}

export default Header;