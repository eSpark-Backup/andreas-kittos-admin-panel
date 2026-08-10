import { api } from './rtk';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.mutation({
      query: () => "/user/detail",
    }),
    login: builder.mutation({
      query: (credentials) => ({
        // url: "/user/sign-in",
        url: "/user/admin-sign-in",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useLoginMutation,
} = authApi;
