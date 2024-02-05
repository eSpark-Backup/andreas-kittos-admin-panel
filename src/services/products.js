import { api } from './rtk';

export const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (id) => ({
                url: `/product/${id}`,
            }),
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
            query: ({ id, ...rest }) => ({
                url: `/product/${id}`,
                method: 'PATCH',
                body: rest
            }),
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
    useGetProductsQuery,
    useGetProductQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productApi;