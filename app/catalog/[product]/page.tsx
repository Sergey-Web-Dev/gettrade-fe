'use client';

import { useParams } from "next/navigation";
import styles from './page.module.scss';
import ProductPrice from "@/components/product-by-id/product-price/ProductPrice";
import ProductContent from "@/components/product-by-id/product-content/ProductContent";

const mockData = {
    title: 'Beyerdynamic DT 990 PRO 250 ohms',
    gallery: [ {} ],
    originalPrice: 1999,
    discountedPrice: 1599,
    isBestseller: true,
    articul: '21837',
    isFavorite: false,
    bonuses: 339,
    availability: 15,
    partners: [],
    characteristics: [ {} ],
    delivery: [ {} ],
    description: '',
    features: [ {} ],
    guarantee: '',
    serviceLife: '',
    reviews: {
        rating: 4.7,
        amount: 12,
        data: [ {} ]
    },

}

export default function ProductByID() {

    const { product } = useParams(); /* извлекаем id и получаем товар */

    return (
        <div className={`container ${styles.product}`}>
            <div className={styles.product__container}>
                <ProductContent 
                    title={mockData.title}
                    gallery={mockData.gallery}
                    isBestseller={mockData.isBestseller}
                    articul={mockData.articul}
                    partners={mockData.partners}
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
                    isFavorite={mockData.isFavorite}
                    bonuses={mockData.bonuses}
                    availability={mockData.availability}
                />
            </div>
        </div>
    )
}