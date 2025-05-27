import { useRemoveOrderItemsProductQuery} from "@/entities/orderItem";

export function useRemoveProtuctOrderItem() {
    const removeProductQuery = useRemoveOrderItemsProductQuery();

    return {
        removeProduct: removeProductQuery.mutate,
        isSuccess: removeProductQuery.isSuccess,
        isLoading: removeProductQuery.isPending,
    };
}