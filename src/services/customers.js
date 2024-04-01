import { api } from './rtk';

export const customersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllCustomers: builder.query({
            query: ({ page = 1, take = 7, userId, userStatus,customerName}) => {
                const params = {
                    page: page.toString(),
                    take: take.toString(),
                    // ...(userId && { userId }),
                    ...(userStatus && { userStatus }),
                    ...(customerName && { customerName }),
                };


                const queryString = new URLSearchParams(params).toString();

                return {
                    url: `/user/user-list?${queryString}`,
                    method: 'GET',
                };
            },
            providesTags:['Customer']
        }),
        updateCustomerStatus: builder.mutation({
            query: ({ id, status }) => ({
              url: `/user/change-user-status/${id}`,
              method: "PUT",
              body: status,
            }),
            invalidatesTags: ['Customer'],
        }),
    }),

});


export const { useGetAllCustomersQuery, useUpdateCustomerStatusMutation} = customersApi