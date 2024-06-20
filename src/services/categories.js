import { api } from './rtk';

export const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: `/category`,
        method: 'GET'
      }),
      providesTags: ['categories']
    }),
    addCategory: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (category) => ({
        url: `/category`,
        method: 'POST',
        body: category
      }),
      invalidatesTags: ['products', 'categories'],
    }),
    updateCategory: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: ({ id, ...rest }) => ({
        url: `/category/${id}`,
        method: 'PATCH',
        body: rest
      }),
      invalidatesTags: ['products', 'categories'],
    }),
    deleteCategory: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (id) => ({
        url: `/category/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['products', 'categories'],
    }),
  }),

});

export const {
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
  useAddCategoryMutation
} = categoryApi;
