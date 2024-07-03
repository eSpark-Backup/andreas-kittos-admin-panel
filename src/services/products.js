import { api } from './rtk';

export const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.mutation({
            query: ({ categoryId, page = 1, productName, take = 7 }) => {
                const queryString = new URLSearchParams({
                    categoryId,
                    page: page.toString(),
                    take: take.toString(),
                    ...(productName && { productName }),
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
            query: ({ id, categoryIds, description, file, isGeneral, name, price, quantity, tags }) => {
                const formData = new FormData();
                formData.append('categoryIds', categoryIds);
                formData.append('description', description);
                if (file) {
                    formData.append('file', file);
                }
                formData.append('isGeneral', isGeneral);
                formData.append('name', name);
                formData.append('price', price);
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