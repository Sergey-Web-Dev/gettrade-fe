import {useMutation, useQueryClient} from "@tanstack/react-query";
import {
    orderItemControllerAddOrderItemProduct,
    orderItemControllerAddToCart, orderItemControllerRemoveFromCart,
    orderItemControllerRemoveOrderItemProduct
} from "@/lib/api/generated";

const itemsKey = ["orderItems"] as unknown[];

export function useAddToCartQuery() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ data }: {data: any}) => {
            return orderItemControllerAddToCart(data);
        },
        onSuccess(data) {
            queryClient.setQueryData(itemsKey, data);
        },
        onSettled() {
            //@ts-ignore
            queryClient.invalidateQueries(itemsKey);
        },
    });
}

export function useAddOrderItemsProductQuery() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id }: {id: string}) => {
            return orderItemControllerAddOrderItemProduct(id);
        },
        onSuccess(data) {
            queryClient.setQueryData(itemsKey, data);
        },
        onSettled() {
            //@ts-ignore
            queryClient.invalidateQueries(itemsKey);
        },
    });
}

export function useRemoveOrderItemsProductQuery() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id }: {id: string}) => {
            return orderItemControllerRemoveOrderItemProduct(id);
        },
        onSuccess(data) {
            queryClient.setQueryData(itemsKey, data);
        },
        onSettled() {
            //@ts-ignore
            queryClient.invalidateQueries(itemsKey);
        },
    });

}

export function useRemoveFromCartQuery() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id }: {id: string}) => {
            return orderItemControllerRemoveFromCart(id);
        },
        onSuccess(data) {
            queryClient.setQueryData(itemsKey, data);
        },
        onSettled() {
            //@ts-ignore
            queryClient.invalidateQueries(itemsKey);
        },
    });
}



