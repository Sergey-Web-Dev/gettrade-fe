import {useRemoveFromCartQuery} from "@/entities/orderItem";

export function useRemoveFromCart() {
    const removeFromCartQuery = useRemoveFromCartQuery();

    return {
        removeCartItem: removeFromCartQuery.mutate,
        isSuccess: removeFromCartQuery.isSuccess,
        isLoading: removeFromCartQuery.isPending,
    };
}