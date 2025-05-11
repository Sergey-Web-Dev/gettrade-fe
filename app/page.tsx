import Achievements from "@/components/achievements/Achievements";
import Bestsellers from "@/components/bestsellers/Bestsellers";
import Blog from "@/components/blog/Blog";
import ImagesSlider from "@/components/images-slider/ImagesSlider";
import PopularCategories from "@/components/popular-categories/PopularCategories";
import { Product } from "@/components/types/products";
import { title } from "process";

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
]

export default function Home() {
  return (
    // <ImagesSlider />
    <>
      <PopularCategories categories={categories} />
      <Bestsellers bestsellers={bestsellers} />
      <Blog blogItems={blogItems} />
      <Achievements achievements={achievements} />
    </>
  );
}
