import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { customerDetailsTableData, ordersTabs } from '../../constant';
import { Box } from '@mui/material';
import { Table } from '../../components'
import { columns } from '../../columns/cutomerDetails';
import { useGetAllOrdersQuery } from '../../services/orders';
import { useParams } from 'react-router-dom';
import { DateConverter } from '../../utility/DateConverter';


const CustomerOrders = () => {
    const [value, setValue] = useState(0);
    const [page, setPage] = useState(1);
    const params = useParams()
    const statusMap = {
        1: "Pending",
        2: "Processing",
        3: "On-hold",
        4: "Completed",
        5: "Cancelled",
        6: "Refunded",
        7: "Failed"
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setPage(1)
    };
    const { data: CustomerOrdersData, isLoading,isFetching } = useGetAllOrdersQuery({ page,userId: params?.id, orderState: statusMap[value] })
    const tableData = CustomerOrdersData?.data?.items.map((item) => {
        const totalQuantity = item.orderDetail.reduce((acc, curr) => acc + curr.quantity, 0);
        return {
          id: item?.id,
          order: item?.orderNumber,
          prdDate: DateConverter(item?.orderStatus?.scheduledDate),
          qty: totalQuantity,
          status: item?.orderState.slice(0, 1).toUpperCase() + item?.orderState.slice(1).toLowerCase(),
          total: item?.total
        };
    });
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <>
            <Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {ordersTabs.map((item, index) => (
                        <Tab label={item} key={index} sx={{textTransform:"capitalize !important"}} />
                    ))}
                </Tabs>
            </Box>
            {/*  */}
            <Box sx={{ maxHeight: { xs: "75%", md: "82%" }, overflowY:"auto", marginTop:"12px" }}>
                <Box sx={{ marginTop: "15px", width:"99%" }}>
                    <Table
                        data={tableData}
                        columns={columns()}
                        isLoading={isLoading || isFetching}
                        handlePageChange={handlePageChange}
                        total={tableData && CustomerOrdersData?.data?.meta?.totalItems}
                    />
                </Box>
            </Box>
        </>
    )
}

export default CustomerOrders
