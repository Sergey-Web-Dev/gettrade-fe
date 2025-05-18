import Achievements from "@/components/achievements/Achievements";
import Bestsellers from "@/components/bestsellers/Bestsellers";
import Blog from "@/components/blog/Blog";
import Brands from "@/components/brands/Brands";
import DualSliders from "@/components/dual-sliders/DualSliders";
import MainSlider from "@/components/main-slider/MainSlider";
import PopularCategories from "@/components/popular-categories/PopularCategories";
import {achievements, bestsellers, bigImages, blogItems, categories, smallImages} from "@/lib/constants";



export default function Home() {
  return (
    // <ImagesSlider />
    <>
      <MainSlider images={bigImages} />
      <PopularCategories categories={categories} />
      <DualSliders slider1Images={smallImages} slider2Images={smallImages} />
      <Bestsellers bestsellers={bestsellers} title={'Хиты продаж'} />
      <Brands />
      <Blog blogItems={blogItems} />
      <Achievements achievements={achievements} />
    </>
  );
}
