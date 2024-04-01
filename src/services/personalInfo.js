import { api } from './rtk';

export const personalInfoAPi = api.injectEndpoints({
    endpoints: (builder) => ({
        getInfo: builder.query({
            query: () => ({
                url: `/user/user-profile`,
            }),
        }),
        changePassword: builder.mutation({
            query: (credentials) => ({
              url: "/user/change-password",
              method: "PUT",
              body: credentials,
            }),
        }),

    }),

});

export const {useGetInfoQuery, useChangePasswordMutation} = personalInfoAPi