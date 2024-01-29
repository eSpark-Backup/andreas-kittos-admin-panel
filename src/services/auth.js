import { api } from './rtk';

export const authApi = api.injectEndpoints({
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
