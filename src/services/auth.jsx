import { baseUrl, prepareHeaders } from './_utils'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders
  }),

  endpoints: (builder) => ({
    getUserInfo: builder.mutation({
      query: () => "/user/detail",
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/user/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useGetUserInfoMutation,
  useLoginMutation,
} = authApi;
