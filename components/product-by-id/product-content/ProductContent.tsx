import { FC } from "react"

interface IProductContent {
    title: string;
    gallery: any[];
    isBestseller: boolean;
    articul: string;
    partners: any[];
    characteristics: any[];
    delivery: any[];
    description: string;
    features: any[];
    guarantee: string;
    serviceLife: string;
    reviews: {
        rating: number;
        amount: number;
        data: any[];
    }
}

const ProductContent: FC<IProductContent> = ({  }) => {
    return (
        <div></div>
    )
}

export default ProductContent;