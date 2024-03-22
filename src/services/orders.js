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
            query: ({ page = 1, take = 10, userId,orderState }) => {
                const queryString = new URLSearchParams({
                    page: page.toString(),
                    take: take.toString(),
                    ...(userId && { userId }),
                    ...(orderState && {orderState})
                }).toString();

                return {
                    url: `/order/order-list?${queryString}`,
                    method: 'GET',
                };
            },
        }),
        getOrderDetails: builder.query({
            query: (id) => ({
                url: `/order/order-detail/${id}`,
            }),
        }),

    }),

});


export const { useGetAllOrdersQuery, useGetOrderDetailsQuery } = orderApi