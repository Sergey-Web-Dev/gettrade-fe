import Image from 'next/image';
import styles from './footer.module.scss';
import Link from 'next/link';

const socials = [
  {
    imgSrc: '/rutube.svg',
    link: 'https://rutube.ru/',
    width: 35,
    height: 35
  },
  {
    imgSrc: '/vk.svg',
    link: 'https://vk.com/',
    width: 34,
    height: 20
  },
  {
    imgSrc: '/telegram.svg',
    link: 'https://web.telegram.org/',
    width: 28,
    height: 22
  },
  {
    imgSrc: '/odnoklassniki.svg',
    link: 'https://ok.ru/',
    width: 27,
    height: 33
  },
]

const forBuyers = [
  {
    name: 'Каталог Товаров',
    link: '/'
  },
  {
    name: 'Помощь И Поддержка',
    link: '/'
  },
  {
    name: 'Политика Конфиденциальности',
    link: '/'
  },
  {
    name: 'Пользовательское Соглашение',
    link: '/'
  },
  {
    name: 'Подарочные Карты',
    link: '/'
  },
  {
    name: 'Мобильная Версия',
    link: '/'
  },
]

const about = [
  {
    name: 'О Нас',
    link: '/'
  },
  {
    name: 'Реквизиты',
    link: '/'
  },
  {
    name: 'Вакансии',
    link: '/'
  },
  {
    name: 'Новости',
    link: '/'
  },
  {
    name: 'Сертификаты',
    link: '/'
  },
]

const services = [
  {
    name: 'Установка Оборудования',
    link: '/'
  },
  {
    name: 'Гарантийное Обслуживание',
    link: '/'
  },
  {
    name: 'Доставка',
    link: '/'
  },
  {
    name: 'Самовывоз',
    link: '/'
  },
  {
    name: 'Аренда Оборудования',
    link: '/'
  },
]

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className='container'>
        <div className={styles.footer__main}>
          <div className={styles.footer__main__logo}>
            <Image src='/footer-logo.svg' width={343} height={84} alt='Логотип Gettrade' />
            <ul className={styles.footer__main__logo__socials}>
              {socials.map(({ imgSrc, width, height, link }, index) => <li key={index} className={styles.footer__main__logo__socials__item}><Link href={link}><Image src={imgSrc} width={width} height={height} alt='' /></Link></li>)}
            </ul>
          </div>
          <div className={styles.footer__main__links}>
            <div className={styles.footer__main__links__items}>
              <h5>ДЛЯ ПОКУПАТЕЛЕЙ</h5>
              <ul className={styles.footer__main__links__items__list}>
                {forBuyers.map(({ name, link }, index) => <li key={index}><Link href={link}>{name}</Link></li>)}
              </ul>
            </div>
            <div className={styles.footer__main__links__items}>
              <h5>О КОМПАНИИ</h5>
              <ul className={styles.footer__main__links__items__list}>
                {about.map(({ name, link }, index) => <li key={index}><Link href={link}>{name}</Link></li>)}
              </ul>
            </div>
            <div className={styles.footer__main__links__items}>
              <h5>УСЛУГИ</h5>
              <ul className={styles.footer__main__links__items__list}>
                {services.map(({ name, link }, index) => <li key={index}><Link href={link}>{name}</Link></li>)}
              </ul>
            </div>
          </div>
        </div>
        <p className={styles.footer__tm}><span>gettrade.ru</span><span>2025</span></p>
      </div>
    </footer>
  )
}

export default Footer;