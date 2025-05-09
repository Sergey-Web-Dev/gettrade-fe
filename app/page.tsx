import Achievements from "@/components/achievements/Achievements";
import ImagesSlider from "@/components/images-slider/ImagesSlider";
import PopularCategories from "@/components/popular-categories/PopularCategories";

// const sliderImages = [
//   { src: '', text: 'Гарнитура Cooler Master CH331 USB' },
// ]

const categories = [
  {
    name: 'Микрофоны и радиосистемы',
    imgSrc: '/',
    link: '/'
  },
  {
    name: 'Наушники',
    imgSrc: '/',
    link: '/'
  },
  {
    name: 'Наушники',
    imgSrc: '/',
    link: '/'
  },
  {
    name: 'Наушники',
    imgSrc: '/',
    link: '/'
  },
  {
    name: 'Наушники',
    imgSrc: '/',
    link: '/'
  },
  {
    name: 'Наушники',
    imgSrc: '/',
    link: '/'
  },
  {
    name: 'Наушники',
    imgSrc: '/',
    link: '/'
  },
  {
    name: 'Наушники',
    imgSrc: '/',
    link: '/'
  },
  {
    name: 'Наушники',
    imgSrc: '/',
    link: '/'
  },
  {
    name: 'Наушники',
    imgSrc: '/',
    link: '/'
  },
  {
    name: 'Наушники',
    imgSrc: '/',
    link: '/'
  },
  {
    name: 'Наушники',
    imgSrc: '/',
    link: '/'
  }
]

const achievements = [
  {
    value: '11 лет',
    text: 'на рынке'
  },
  {
    value: '350 тыс',
    text: 'позиций на складе'
  },
  {
    value: '15 тыс',
    text: 'отправляется ежедневно'
  },
  {
    value: '320',
    text: 'ПВЗ по всей России'
  },
  {
    value: '4 млн',
    text: 'клиентов в клубе'
  },
  {
    value: '37+ млн',
    text: 'заказов выполнено'
  },
]

export default function Home() {
  return (
    // <ImagesSlider />
    <>
      <PopularCategories categories={categories} />
      <Achievements achievements={achievements} />
    </>
  );
}
