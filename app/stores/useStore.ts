import { create } from 'zustand'
import zukeeper from 'zukeeper';
import {cartItems} from "@/lib/constants";

export interface CartItem {
    id: number;
    title: string;
    article: string;
    imgSrc: string;
    originalPrice: number;
    discountedPrice: number;
    discount: number;
    availability: number | '';
    bonus: number;
}

export interface cartItems {
    cartItems: CartItem[] | undefined;
    setCartItems: (data: string) => void;
}




export const useStore = create<cartItems>()(
    zukeeper((set: any) => ({
        cartItems: cartItems,
        setCartItems: (item: Partial<CartItem>) => set({ cartItems: item }),
    })),
);