import {useAddToCartQuery} from "@/entities/orderItem";

export function useAddToCart() {
    const addToCartQuery = useAddToCartQuery();

    return {
        addItem: addToCartQuery.mutate,
        isSuccess: addToCartQuery.isSuccess,
        isLoading: addToCartQuery.isPending,
    };
}