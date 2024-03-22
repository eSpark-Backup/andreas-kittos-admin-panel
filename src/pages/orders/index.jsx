import React, { useEffect, useState } from 'react'
import { CustomButton, PageHeader, SearchInput, Table } from '../../components'
import { Box, Grid, Stack, useMediaQuery } from '@mui/material'
import { columns } from '../../columns/orders'
import { ordersTableData, ordersTabs } from '../../constant'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { useGetAllOrdersQuery } from '../../services/orders'
import { DateConverter } from '../../utility/DateConverter'
import useProducts from '../../hooks/Product/useProducts'
import useOrders from '../../hooks/Order/useOrder'
import { useGetAllOrdersQuery } from '../../services/orders'


const Orders = () => {
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };
  const statusMap = {
    1: "Pending",
    2: "Processing",
    3: "On-hold",
    4: "Completed",
    5: "Cancelled",
    6: "Refunded",
    7: "Failed"
  };
  const { data:ordersData,isLoading} = useGetAllOrdersQuery({page,orderState:statusMap[value]});

  const tableData = ordersData?.data?.items.map((item)=>({
    id:item?.id,
    order:item?.orderNumber,
    prdDate:DateConverter(Number(item?.orderStatus?.scheduledDate)),
    name:item?.user?.firstName+" "+item?.user?.lastName,
    qty:item?.orderDetail[0].quantity,
    status: item?.orderState.slice(0, 1).toUpperCase() + item?.orderState.slice(1).toLowerCase(),
    total:item?.total
  }))



  const isSmallScreen = useMediaQuery('(max-width: 360px)');
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };




  return (
    <main className='main-container'>
      {/* <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", rowGap:"5px"}}> */}
      <Box sx={{ minHeight: "70px", marginTop:"14px", marginBottom:{xs:"25px", sm:"0px"} }}>
        <PageHeader title="Orders" btnText={"Download report"} />
      </Box>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {ordersTabs.map((item, index) => (
            <Tab label={item} sx={{ width: "120px" }} key={index} />
          ))}
        </Tabs>
      </Box>
      <Grid container rowGap={2} sx={{ display: "flex", justifyContent: "space-between", margin: "45px 0px 20px 0px" }}>
        <Grid item xs={10} sm={12} lg={4}>
          <SearchInput
          //  setSearch={setSearch}
           placeholder="Search by order number or name"/>
        </Grid>
        <Grid item xs={12} lg={4} md={12} sx={{ display: "flex", justifyContent: "flex-end", marginTop:{xs:"20px", sm:"0px"}}}>
          <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack direction={
                isSmallScreen ? "column" : "row"
              } gap={2} sx={{display:"flex", justifyContent:"flex-end"}}>
                <DesktopDatePicker label="Search from" sx={{ width:  isSmallScreen ? "100%" : "150px" }} />
                <DesktopDatePicker label="Search to" sx={{ width: isSmallScreen ? "100%" : "150px" }} />
              </Stack>
            </LocalizationProvider>
          </Box>
        </Grid>
      </Grid>
      <Box>
      <Table
        data={tableData}
        columns={columns()}
        isLoading={isLoading}
        handlePageChange={handlePageChange}
        page={page}
        total={tableData && ordersData?.data?.meta?.totalItems}
      />
      </Box>

    </main>
  )
}

export default Orders