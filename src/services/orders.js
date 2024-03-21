import { api } from './rtk';

export const orderApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrders: builder.query({
            query: ({ page = 1, take = 10, userid } = {}) => ({
                url: `/order/order-list`,
                params: {
                    page,
                    take,
                    userid,
                },
            }),
        }),

    }),

});


export const {useGetAllOrdersQuery} = orderApi