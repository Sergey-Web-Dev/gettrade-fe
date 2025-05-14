import { FC } from "react";
import styles from './product-content.module.scss';
import ProductDescriptionBlock from "./product-content-blocks/product-description-block/ProductDescriptionBlock";
import ProductFeaturesBlock from "./product-content-blocks/product-features-block/ProductFeaturesBlock";
import ProductCharacteristicsBlock from "./product-content-blocks/product-characteristics-block/ProductCharacteristicsBlock";
import ProductGarantyBlock from "./product-content-blocks/product-garanty-block/ProductGaranty";
import GallerySlider from "@/components/gallery-slider/GallerySlider";
import ProductMainInfo from "./product-content-blocks/product-main-info/ProductMainInfo";
import Reviews from "@/components/reviews/Reviews";
import { Review } from "@/components/types/review";

interface IProductContent {
    title: string;
    gallery: any[];
    isBestseller: boolean;
    articul: string;
    brand: { id: number, imgSrc: string };
    characteristics: any[];
    delivery: any[];
    description: string;
    features: any[];
    guarantee: string;
    serviceLife: string;
    reviews: {
        rating: number;
        amount: number;
        data: Review[];
    }
}

const ProductContent: FC<IProductContent> = ({
    title,
    gallery,
    isBestseller,
    articul,
    brand,
    characteristics,
    delivery,
    description,
    features,
    guarantee,
    serviceLife,
    reviews
}) => {
    return (
        <div className={styles.productContent}>
            <div className={styles.productContent__galleryAndInfo}>
                <GallerySlider />
                <ProductMainInfo 
                    title={title} 
                    isBestseller={isBestseller} 
                    articul={articul} 
                    brand={brand} 
                    characteristics={characteristics.slice(0, 6)}
                    delivery={delivery}
                    rate={reviews.rating}
                    reviews={reviews.amount}
                />
            </div>
            <div className={styles.productContent__section}>
                <p className={styles.productContent__title}>Описание</p>
                <ProductDescriptionBlock description={description} />
            </div>
            <div className={styles.productContent__section}>
                <p className={styles.productContent__title}>Основные особенности</p>
                <ProductFeaturesBlock features={features} />
            </div>
            <div className={styles.productContent__section}>
                <p className={styles.productContent__title}>Общие характеристики</p>
                <ProductCharacteristicsBlock characteristics={characteristics} />
            </div>
            <div className={`${styles.productContent__section} ${styles.productContent__garanty}`}>
                <p className={styles.productContent__title}>Срок службы и гарантии</p>
                <ProductGarantyBlock guarantee={guarantee} serviceLife={serviceLife} />
            </div>
            <div className={styles.productContent__section}>
                <p className={styles.productContent__title}>Отзывы <span> {reviews.amount} </span></p>
                <Reviews reviews={reviews.data} />
            </div>
        </div>
    )
}

export default ProductContent;