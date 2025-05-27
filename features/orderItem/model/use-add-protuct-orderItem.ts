import {useAddOrderItemsProductQuery} from "@/entities/orderItem";

export function useAddProtuctOrderItem() {
    const addProductQuery = useAddOrderItemsProductQuery();

    return {
        addProduct: addProductQuery.mutate,
        isSuccess: addProductQuery.isSuccess,
        isLoading: addProductQuery.isPending,
    };
}