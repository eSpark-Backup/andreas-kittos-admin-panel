import { api } from './rtk';

export const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: `/product`,
            }),
        }),
        getProduct: builder.query({
            query: (id) => ({
                url: `/product/${id}`,
            }),
        }),
        addProduct: builder.mutation({
            query: (product) => ({
                url: `/product`,
                method: 'POST',
                body: product
            }),
        }),
        updateProduct: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/product/${id}`,
                method: 'PATCH',
                body: rest
            }),
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method: 'DELETE',
            }),
        }),
    }),

});

export const {
    useGetProductsQuery,
    useGetProductQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productApi;