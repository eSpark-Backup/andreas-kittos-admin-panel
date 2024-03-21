import { api } from './rtk';

export const orderApi = api.injectEndpoints({
    endpoints: (builder) => ({
        // getAllOrders: builder.query({
        //     query: ({ page = 1, take = 10, userid } = {}) => ({
        //         url: `/order/order-list`,
        //         params: {
        //             page,
        //             take,
        //             userid,
        //         },
        //     }),
        // }),
        getAllOrders: builder.query({
            query: ({ page = 1, take = 7, userId }) => {
                const queryString = new URLSearchParams({
                    page: page.toString(),
                    take: take.toString(),
                    ...(userId && { userId }),
                }).toString();

                return {
                    url: `/order/order-list?${queryString}`,
                    method: 'GET',
                };
            },
        }),

    }),

});


export const { useGetAllOrdersQuery } = orderApi