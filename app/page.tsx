import Achievements from "@/components/achievements/Achievements";
import Bestsellers from "@/components/bestsellers/Bestsellers";
import Blog from "@/components/blog/Blog";
import DualSliders from "@/components/dual-sliders/DualSliders";
import MainSlider from "@/components/main-slider/MainSlider";
import PopularCategories from "@/components/popular-categories/PopularCategories";
import { Product } from "@/components/types/products";

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

const bestsellers: Product[] = [
  {
    title: 'Гарнитура Cooler Master CH331 USB',
    imgSrc: '/ch331.png',
    originalPrice: 1999,
    discountedPrice: 1599,
    discount: 15,
    isBestseller: true,
    reviews: {
      rating: 4.7,
      amount: 12,
    }
  },
  {
    title: 'Гарнитура Cooler Master CH331 USB',
    imgSrc: '/ch331.png',
    originalPrice: 1999,
    discountedPrice: 1599,
    discount: 15,
    isBestseller: true,
    reviews: {
      rating: 4.7,
      amount: 12,
    }
  },
  {
    title: 'Гарнитура Cooler Master CH331 USB',
    imgSrc: '/ch331.png',
    originalPrice: 1999,
    discountedPrice: 1599,
    discount: 15,
    isBestseller: true,
    reviews: {
      rating: 4.7,
      amount: 12,
    }
  },
  {
    title: 'Гарнитура Cooler Master CH331 USB',
    imgSrc: '/ch331.png',
    originalPrice: 1999,
    discountedPrice: 1599,
    discount: 15,
    isBestseller: true,
    reviews: {
      rating: 4.7,
      amount: 12,
    }
  },
  {
    title: 'Гарнитура Cooler Master CH331 USB',
    imgSrc: '/ch331.png',
    originalPrice: 1999,
    discountedPrice: 1599,
    discount: 15,
    isBestseller: true,
    reviews: {
      rating: 4.7,
      amount: 12,
    }
  },
  {
    title: 'Гарнитура Cooler Master CH331 USB',
    imgSrc: '/ch331.png',
    originalPrice: 1999,
    discountedPrice: 1599,
    discount: 15,
    isBestseller: true,
    reviews: {
      rating: 4.7,
      amount: 12,
    }
  },
]

const blogItems = [
  {
    imgSrc: '/blog-item.png',
    title: 'Профессиональное звуковое оборудование для мероприятий - сцены концертного зала',
    date: '12 янв 2025 12:33'
  },
  {
    imgSrc: '/blog-item.png',
    title: 'Профессиональное звуковое оборудование для мероприятий - сцены концертного зала',
    date: '12 янв 2025 12:33'
  },
  {
    imgSrc: '/blog-item.png',
    title: 'Профессиональное звуковое оборудование для мероприятий - сцены концертного зала',
    date: '12 янв 2025 12:33'
  },
  {
    imgSrc: '/blog-item.png',
    title: 'Профессиональное звуковое оборудование для мероприятий - сцены концертного зала',
    date: '12 янв 2025 12:33'
  },
  {
    imgSrc: '/blog-item.png',
    title: 'Профессиональное звуковое оборудование для мероприятий - сцены концертного зала',
    date: '12 янв 2025 12:33'
  },
  {
    imgSrc: '/blog-item.png',
    title: 'Профессиональное звуковое оборудование для мероприятий - сцены концертного зала',
    date: '12 янв 2025 12:33'
  },
  {
    imgSrc: '/blog-item.png',
    title: 'Профессиональное звуковое оборудование для мероприятий - сцены концертного зала',
    date: '12 янв 2025 12:33'
  },
  {
    imgSrc: '/blog-item.png',
    title: 'Профессиональное звуковое оборудование для мероприятий - сцены концертного зала',
    date: '12 янв 2025 12:33'
  },
]

const bigImages = [
  {
    imgSrc: '/slider-big-mock.png',
    link: ''
  },
  {
    imgSrc: '/slider-big-mock.png',
    link: ''
  },
  {
    imgSrc: '/slider-big-mock.png',
    link: ''
  },
  {
    imgSrc: '/slider-big-mock.png',
    link: ''
  },
  {
    imgSrc: '/slider-big-mock.png',
    link: ''
  },
  {
    imgSrc: '/slider-big-mock.png',
    link: ''
  },
  {
    imgSrc: '/slider-big-mock.png',
    link: ''
  },
  {
    imgSrc: '/slider-big-mock.png',
    link: ''
  },
]

const smallImages = [
  {
    imgSrc: '/slider-small-mock.png',
    link: ''
  },
  {
    imgSrc: '/slider-small-mock.png',
    link: ''
  },
  {
    imgSrc: '/slider-small-mock.png',
    link: ''
  },
  {
    imgSrc: '/slider-small-mock.png',
    link: ''
  },
  {
    imgSrc: '/slider-small-mock.png',
    link: ''
  },
  {
    imgSrc: '/slider-small-mock.png',
    link: ''
  },
]

export default function Home() {
  return (
    // <ImagesSlider />
    <>
      <MainSlider images={bigImages} />
      <PopularCategories categories={categories} />
      <DualSliders slider1Images={smallImages} slider2Images={smallImages} />
      <Bestsellers bestsellers={bestsellers} />
      <Blog blogItems={blogItems} />
      <Achievements achievements={achievements} />
    </>
  );
}
