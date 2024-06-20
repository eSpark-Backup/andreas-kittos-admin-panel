import { api } from './rtk';

export const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: `/category`,
      }),
      providesTags: ['categories']
    }),
    addCategory: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (category) => ({
        url: `/add-category`,
        method: 'POST',
        body: category
      }),
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
  useUpdateCategoryMutation
} = categoryApi;
