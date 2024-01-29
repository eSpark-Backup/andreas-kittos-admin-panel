import { api } from './rtk';

export const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: `http://universities.hipolabs.com/search?country=United+States`,
      }),
    }),
  }),
  addCategory: build.mutation({
    // note: an optional `queryFn` may be used in place of `query`
    query: (category) => ({
      url: `/add-category`,
      method: 'POST',
      body: category
    }),
  }),
  updateCategory: build.mutation({
    // note: an optional `queryFn` may be used in place of `query`
    query: ({id, ...rest}) => ({
      url: `/update-category/${id}`,
      method: 'PUT',
      body: rest
    }),
  }),
  deleteCategory: build.mutation({
    // note: an optional `queryFn` may be used in place of `query`
    query: (id) => ({
      url: `/delete-category/${id}`,
      method: 'DELETE',
    }),
  }),

});

export const {
  useGetCategoriesQuery,
  useUpdatePostMutation
} = categoryApi;
