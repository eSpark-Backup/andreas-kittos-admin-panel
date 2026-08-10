import { api } from './rtk';

export const dashboardApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardStaticData: builder.query({
            query: () => {        
                return {
                    url: `/order/dashboard`,
                    method: 'GET',
                };
            },
        }),
        getDashboardChartData: builder.query({
            query: () => {        
                return {
                    url: `/order/chart`,
                    method: 'GET',
                };
            },
        }),

    }),

});


export const { useGetDashboardStaticDataQuery,useGetDashboardChartDataQuery} = dashboardApi