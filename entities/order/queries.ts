import {  useQuery  } from "@tanstack/react-query";
import {
    orderControllerGetCart,
} from "@/lib/api/generated";

const itemsKey = ["orders"] as unknown[];

export function useOrdersQuery() {
    return useQuery({
        queryKey: itemsKey,
        queryFn: () => orderControllerGetCart(),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });
}