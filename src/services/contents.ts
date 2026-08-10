import { api } from './rtk';

export const contentApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getContents: builder.query({
            query: () => ({
                url: `/static`,
            }),
            providesTags: ['contents'],
        }),
        getContent: builder.query({
            query: (id) => ({
                url: `/static/${id}`,
            }),
        }),
        addContent: builder.mutation({
            query: (content) => ({
                url: `/static`,
                method: 'POST',
                body: content
            }),
            invalidatesTags: ['contents'],
        }),

        updateContent: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/static/${id}`,
                method: 'PUT',
                body: rest
            }),
            invalidatesTags: ['contents'],
        }),
        deleteContent: builder.mutation({
            query: (id) => ({
                url: `/static/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['contents'],
        }),

    }),

});

export const {
    useGetContentsQuery,
    useGetContentQuery,
    useAddContentMutation,
    useUpdateContentMutation,
    useDeleteContentMutation
} = contentApi;