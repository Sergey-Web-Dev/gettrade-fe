import { create } from 'zustand'
import {cartItems} from "@/lib/constants";
import {persist} from "zustand/middleware";

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
    count: number;
    isChecked: boolean;
}

export interface cartItemsType {
    cartItems: any | undefined;
    setCartItems: (orders: CartItem[]) => void;
}

export const useStore = create<cartItemsType>()(
    persist(
        (set) => ({
            cartItems: cartItems,
            setCartItems: (items) => set({ cartItems: items }),
        }),
        {
            name: 'cart-storage',

        }
    )
)