'use client';

import styles from './page.module.scss';
import ProductPrice from "@/components/product-by-id/product-price/ProductPrice";
import ProductContent from "@/components/product-by-id/product-content/ProductContent";
import Bestsellers from "@/components/bestsellers/Bestsellers";
import PagesNavigation from "@/components/pages-navigation/PagesNavigation";

const mockData = {
    title: 'Beyerdynamic DT 990 PRO 250 ohms',
    gallery: [
        { id: 0, img: '/headphones1.jpg' },
        { id: 1, img: '/headphones2.jpg' },
        { id: 2, img: '/headphones3.jpg' },
        { id: 3, img: '/headphones4.jpg' },
    ],
    originalPrice: 1999,
    discountedPrice: 1599,
    discont: 15,
    isBestseller: true,
    articul: '21837',
    isFavorite: false,
    bonuses: 339,
    availability: 15,
    brand: { id: 0, imgSrc: '/test-brand.jpg' },
    characteristics: [
        { id: 0, title: 'Длина кабеля:', value: '3м' },
        { id: 1, title: 'Тип:', value: 'Открытые' },
        { id: 2, title: 'Цвет:', value: 'Черные' },
        { id: 3, title: 'Чувствительность:', value: '96 дБ SPL / mW' },
        { id: 4, title: 'Сменные амбушюры:', value: 'Нет' },
        { id: 5, title: 'Съемный кабель:', value: 'Нет' },
        { id: 6, title: 'Дополнительная информация:', value: 'прозрачный режим, качественные материалы, объёмный звук, эргономичный OverEar дизайн, Версия Bluetooth: 5.0, профили Bluetooth: A2DP, AVRCP, HFP, HSP; дальность действия: в пределах 10 метров (без препятствий), диаметр динамика: 40 мм; напряжение: 3,7 В, импеданс: 32 Ом ± 15% на 1 кГц, чувствительность: 127 ± 3 дБ на 1 кГц, максимальный диапазон шумоподавления: -30 дБ, входное напряжение: 5 В ⎓ 1 A' },
    ],
    delivery: [
        { id: 0, type: 'Самовывоз в Москве', time: 'Завтра', price: 'Бесплатно' },
        { id: 1, type: 'Самовывоз в Москве', time: 'До 3 дней', price: '1 000 ₽' },
        { id: 2, type: 'Самовывоз в Москве', time: 'До 5 дней', price: 'от 500 ₽' },
        { id: 3, type: 'Самовывоз в Москве', time: 'До 4 дней', price: 'от 500 ₽' },
    ],
    description: 'Beyerdynamic DT 990 Pro - открытые головные наушники профессиональной серии PRO. Наушники предназначены для прослушиванию музыки и мониторинга в студии звукозаписи. Наушники Beyerdynamic DT 990 Pro обладают элегантным стилем, который не оставит никого равнодушным. Звучание наушников выделяет четкая звуковая картина и сбалансированное звучание низких частот. Наушники имеют витой кабель, длиной 1 - 3 м.. Для подключения к устройствам медиа есть позолочен. Наушники предназначены для прослушиванию музыки и мониторинга в студии звукозаписи. Наушники Beyerdynamic DT 990 Pro обладают элегантным стилем, который не оставит никого равнодушным. Звучание наушников выделяет четкая звуковая картина и сбалансированное звучание низких частот. Наушники имеют витой кабель, длиной 1 - 3 м.. ',
    features: [
        { id: 0, text: 'Стереонаушники открытого типа для прослушивания музыки и мониторинга в студии;' },
        { id: 1, text: 'Четкое и детализированное звучание с сбалансированными басами;' },
        { id: 2, text: 'Размер и форма наушников и форма гарантируют исключительный комфорт при постоянном использовании;' },
        { id: 3, text: 'Качественный, витой кабель, длиной 1 - 3 м.;' },
        { id: 4, text: 'Стереонаушники открытого типа для прослушивания музыки и мониторинга в студии;' },
    ],
    guarantee: '5 лет',
    serviceLife: '1 год',
    reviews: {
        rating: 4.7,
        amount: 12,
        pages: 4,
        data: [
            {
                id: 0,
                rate: 3.1,
                attaches: [ { id: 0, imgSrc: '/example-review-attach.jpg' }, { id: 1, imgSrc: '/example-review-attach.jpg' } ],
                person: {
                    name: 'Виталий',
                    avatar: '/example-avatar.png',
                },
                comment: 'Комментарий: Натуральный оригинал, доставка на следующий день, работает без проблем как и должно для продукции apple, два гнезда, рекомендую',
                advantages: 'Крутые два уха',
                disadvantages: 'нет',
            },
            {
                id: 1,
                rate: 4.8,
                attaches: [],
                person: {
                    name: 'Виталий',
                    avatar: '/example-avatar.png',
                },
                comment: 'Комментарий: Натуральный оригинал, доставка на следующий день, работает без проблем как и должно для продукции apple, два гнезда, рекомендую',
                advantages: 'Крутые два уха',
                disadvantages: 'нет',
            },
        ]
    },

}

const mockNavData = [
    { id: 0, title: 'Главная' },
    { id: 1, title: 'Каталог' },
    { id: 2, title: 'наушники' },
    { id: 3, title: 'Студийные/мониторные наушники' },
    { id: 4, title: 'cooler master' },
    { id: 5, title: 'Гарнитура Cooler Master CH331 USB' },
]

export default function ProductByID() {


    return (
        <div className={styles.product}>
            <div className={`container ${styles.product__navigation}`}>
                <PagesNavigation navigationData={mockNavData} />
            </div>
            <div className={styles.product__border}></div>
            <div className={`container ${styles.product__container} `}>
                <ProductContent 
                    title={mockData.title}
                    gallery={mockData.gallery}
                    isBestseller={mockData.isBestseller}
                    articul={mockData.articul}
                    brand={mockData.brand}
                    characteristics={mockData.characteristics}
                    delivery={mockData.delivery}
                    description={mockData.description}
                    features={mockData.features}
                    guarantee={mockData.guarantee}
                    serviceLife={mockData.serviceLife}
                    reviews={mockData.reviews}
                />
                <ProductPrice 
                    originalPrice={mockData.originalPrice}
                    discountedPrice={mockData.discountedPrice}
                    discont={mockData.discont}
                    isFavorite={mockData.isFavorite}
                    bonuses={mockData.bonuses}
                    availability={mockData.availability}
                />
            </div>
            <div className={styles.product__anotherProducts}>
                <Bestsellers title={'С этим товаром покупают'} />
            </div>
        </div>
    )
}