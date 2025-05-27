import { useProductsQuery} from "@/entities/product";

export   function useProducts() {
    const productsQuery = useProductsQuery();
    const products =  (productsQuery.data) ?? [];

    return {
        products,
        isLoading: productsQuery.isLoading,
    };
}