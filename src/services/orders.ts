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
            query: ({ page = 1, take = 7, userId, orderState, OrderNameEmail, startDate, endDate }) => {
                const params = {
                    page: page.toString(),
                    take: take.toString(),
                    ...(userId && { userId }),
                    ...(orderState && { orderState }),
                    ...(OrderNameEmail && { 'Order#/Name/Email': OrderNameEmail }),
                };
        
                // Check if both startDate and endDate are provided
                if (startDate && endDate) {
                    params.startDate = startDate;
                    params.endDate = endDate;
                }
        
                const queryString = new URLSearchParams(params).toString();
        
                return {
                    url: `/order/order-list?${queryString}`,
                    method: 'GET',
                };
            },
            providesTags:['orders']
        }),        
        getOrderDetails: builder.query({
            query: (id) => ({
                url: `/order/order-detail/${id}`,
            }),
            providesTags: ['SingeOrderDetails'],
        }),

        updateOrderStatus: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/order/status/${id}`,
                method: 'PUT',
                body: rest
            }),
            invalidatesTags: ['SingeOrderDetails',"orders"],
        }),

    }),

});


export const { useGetAllOrdersQuery, useGetOrderDetailsQuery, useUpdateOrderStatusMutation } = orderApi