import Achievements from "@/components/achievements/Achievements";
import Bestsellers from "@/components/bestsellers/Bestsellers";
import ImagesSlider from "@/components/images-slider/ImagesSlider";
import PopularCategories from "@/components/popular-categories/PopularCategories";
import { Product } from "@/components/types/products";

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

export default function Home() {
  return (
    // <ImagesSlider />
    <>
      <PopularCategories categories={categories} />
      <Bestsellers bestsellers={bestsellers} />
      <Achievements achievements={achievements} />
    </>
  );
}
