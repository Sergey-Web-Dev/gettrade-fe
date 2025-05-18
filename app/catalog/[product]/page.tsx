'use client';

import styles from './page.module.scss';
import ProductPrice from "@/components/product-by-id/product-price/ProductPrice";
import ProductContent from "@/components/product-by-id/product-content/ProductContent";
import Bestsellers from "@/components/bestsellers/Bestsellers";
import PagesNavigation from "@/components/pages-navigation/PagesNavigation";
import {bestsellers, mockData} from "@/lib/constants";




export default function ProductByID() {

    return (
        <div className={styles.product}>
            <div className={` ${styles.product__navigation}`}>
                <PagesNavigation navigationData={[ { id: 0, title: 'каталог' }, { id: 1, title: 'наушники' } ]} />
            </div>
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
                <Bestsellers bestsellers={bestsellers} title={'С этим товаром покупают'} />
            </div>
        </div>
    )
}