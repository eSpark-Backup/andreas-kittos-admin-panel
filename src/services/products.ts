import { api } from './rtk';

export const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.mutation({
            query: ({ categoryId, page = 1, productName, take = 7, minPrice, maxPrice }) => {
                const queryString = new URLSearchParams({
                    categoryId,
                    page: page.toString(),
                    take: take.toString(),
                    ...(productName && { productName }),
                    ...(minPrice && { minPrice: minPrice.toString() }),
                    ...(maxPrice && { maxPrice: maxPrice.toString() }),
                }).toString();

                return {
                    url: `/product/?${queryString}`,
                    method: 'GET',
                };
            },
            providesTags: ['products'],
        }),
        getProduct: builder.query({
            query: (id) => ({
                url: `/product/product-detail/${id}`,
            }),
        }),
        addProduct: builder.mutation({
            query: (product) => ({
                url: `/product`,
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['products'],
        }),

        updateProduct: builder.mutation({
            query: ({ id, categoryIds, description, file, isGeneral, name, price1, quantity, tags, price2 }) => {
                const formData = new FormData();
                formData.append('categoryIds', categoryIds);
                formData.append('description', description);
                if (file) {
                    formData.append('file', file);
                }
                formData.append('isGeneral', isGeneral);
                formData.append('name', name);
                formData.append('price1', price1);
                formData.append('price2', price2);
                formData.append('quantity', quantity);
                formData.append('tags', tags);

                return {
                    url: `/product/${id}`,
                    method: 'PATCH',
                    body: formData,
                };
            },
            invalidatesTags: ['products'],
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['products'],
        }),

    }),

});

export const {
    useGetProductsMutation,
    useGetProductQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productApi;