'use client';

import Image from "next/image";
import MenuButton from "../menu-button/MenuButton";
import styles from './header.module.scss';
import SearchBar from "../search-bar/SearchBar";
import HeaderButton from "../header-button/HeaderButton";
import { useRef, useState } from "react";
import CatalogNavMenu from "../catalog-menu/CatalogMenu";
import { useClickOutsideAndClose } from "@/hooks/useClickOutside";
import {redirect} from "next/navigation";
import Link from "next/link";

const headerButtons = [
  { imgSrc: '/favourites-icon.svg', text: 'Избранное', href: '/cart' },
  { imgSrc: '/cart-icon.svg', text: 'Корзина', href: '/cart' },
  { imgSrc: '/login-icon.svg', text: 'Войти' , href: '/cart'}
]

const Header = () => {

  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);


  const handleChangeMenuVisible = () => {
    setIsMenuActive((prev: boolean) => !prev);
  };

  console.log('222')

  return (
    <header   style={{ backgroundColor: 'white', borderBottom: '1px solid rgba(209, 209, 209, 1)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ backgroundColor: 'black', width: '100%'}}>

          <div className={'container'}  style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',  padding: '1rem 1rem'}}>
        <div  style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' , color: 'white', gap: '1rem'}}>
          <Image src='/room.svg' alt={'room.svg'} width={20} height={20} />
          <h4>Москва</h4>
        </div>


          <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', color: '#8C8C8C'}}>

            <Link  style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: "0.5rem"}} href="/">
                <Image src='/whatshot.svg' alt={'whatshot.svg'} width={20} height={20} />
                <p>Акции</p>
             </Link>
            <Link href="/">Статьи</Link>
            <Link href="/">Услуги</Link>
            <Link href="/">Доставка и оплата</Link>
            <Link href="/">Обмен и возврат</Link>
            <Link href="/">Гарантии</Link>
            <Link href="/">О нас</Link>
            <Link href="/">Контакты</Link>
          </nav>
      </div>
      </div>
      <div style={{padding: '0 1rem 0 1rem'}} className={`container ${styles.header}`}>
        <Image onClick={() => redirect('/')} style={{cursor: 'pointer'}} src='/header-logo.svg' width={230} height={56} alt="Логотип GetTrade" />
        <div className={styles.header__nav}>
          <MenuButton isMenuActive={isMenuActive} onChangeMenuVisible={handleChangeMenuVisible} />
          <SearchBar />
          <div className={styles.header__nav__buttons}>
            {headerButtons.map(({ imgSrc, text, href }, index) => <HeaderButton key={index} imgSrc={imgSrc} text={text} href={href} />)}
          </div>
        </div>
      </div>
      {isMenuActive ? <CatalogNavMenu /> : null}
    </header>
  )
}

export default Header;