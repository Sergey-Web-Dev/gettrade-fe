import {  useQuery  } from "@tanstack/react-query";
import {productControllerGetProductById, productControllerGetProducts} from "@/lib/api/generated";

const itemsKey = ["products"] as unknown[];

export function useProductsQuery() {
    return useQuery({
        queryKey: itemsKey,
        queryFn: () => productControllerGetProducts(),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });
}

export function useProductsByIdQuery({ id }: { id: string }) {
    return useQuery({
        queryKey: itemsKey.concat([{ id }]),
        queryFn: () => productControllerGetProductById(id),
        retry: 0,
        staleTime: 5 * 60 * 1000,
    });
}

