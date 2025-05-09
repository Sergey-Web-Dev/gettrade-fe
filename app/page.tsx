import CategoryItem from "@/components/category-item/CategoryItem";
import ImagesSlider from "@/components/images-slider/ImagesSlider";
import PopularCategories from "@/components/popular-categories/PopularCategories";
import { link } from "fs";

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

export default function Home() {
  return (
    // <ImagesSlider />
    <PopularCategories categories={categories} />
  );
}
