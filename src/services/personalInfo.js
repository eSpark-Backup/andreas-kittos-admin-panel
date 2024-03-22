import { api } from './rtk';

export const personalInfoAPi = api.injectEndpoints({
    endpoints: (builder) => ({
        getInfo: builder.query({
            query: () => ({
                url: `/user/user-profile`,
            }),
        }),

    }),

});

export const {useGetInfoQuery} = personalInfoAPi