import { api } from './rtk';

export const customersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllCustomers: builder.query({
            query: ({ page = 1, take = 7, userId, userStatus}) => {
                const params = {
                    page: page.toString(),
                    take: take.toString(),
                    // ...(userId && { userId }),
                    ...(userStatus && { userStatus }),
                };

                const queryString = new URLSearchParams(params).toString();

                return {
                    url: `/user/user-list?${queryString}`,
                    method: 'GET',
                };
            },
        })

    }),

});


export const { useGetAllCustomersQuery} = customersApi