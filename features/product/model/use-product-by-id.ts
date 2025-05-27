import {useProductsByIdQuery} from "@/entities/product";

export   function useProductById({ id }: { id: string }) {
    const productIdQuery = useProductsByIdQuery({ id });
    const productById =  (productIdQuery.data) ?? [];

    return {
        productById,
        isLoadingById: productIdQuery.isLoading,
    };
}