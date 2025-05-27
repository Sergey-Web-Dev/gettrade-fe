import {useOrdersQuery} from "@/entities/order";
import {Order} from "@/lib/types/orderTypes/types";

export function useOrders() {
    const ordersQuery = useOrdersQuery();

    return {
        orders: ordersQuery.data as Order | undefined,
        isLoading: ordersQuery.isLoading,
    };
}