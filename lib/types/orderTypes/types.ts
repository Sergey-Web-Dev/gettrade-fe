interface Product {
    id: string;
    name: string;
    description: string;
    article: string;
    image: string;
    price: number;
    discount: number;
    quantityAvailable: number;
    categoryId: string | null;
    isChecked: boolean;
    isBestseller: boolean;
    bonuses: number;
    rating: number;
    reviewAmount: number;
    createdAt: string;
    updatedAt: string;
}

export interface OrderItem {
    id: string;
    productId: string;
    orderId: string;
    quantity: number;
    price: number;
    available: number;
    product: Product;
}

export interface Order {
    id: string;
    userId: string | null;
    total: number;
    status: string;
    createdAt: string;
    updatedAt: string;
    orderItems: OrderItem[];
}
