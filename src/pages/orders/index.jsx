import React, { useEffect, useState } from 'react'
import { ConfirmationModal, CustomButton, PageHeader, SearchInput, Table } from '../../components'
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
import { DateConverter, DateObjectConverter } from '../../utility/DateConverter'
import useProducts from '../../hooks/Product/useProducts'
import useOrders from '../../hooks/Order/useOrder'
import { useGetAllOrdersQuery, useUpdateOrderStatusMutation } from '../../services/orders'
import { toast } from 'react-toastify'

const Orders = () => {
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState("")
  const [updateOrderStatus, { isLoading: isOrderStatusLoading, isSuccess, isError, data, error }] = useUpdateOrderStatusMutation()

  useEffect(() => {
    const savedPage = sessionStorage.getItem('orderPage');
    if (savedPage) {
      setPage(parseInt(savedPage, 10));
    }
  }, []);

  // Update sessionStorage when page changes
  useEffect(() => {
    sessionStorage.setItem('orderPage', page);
  }, [page]);

  useEffect(() => {
    if (debouncedSearch) {
      setPage(1);
    }
  }, [debouncedSearch])


  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPage(1)
  };

  const statusMap = {
    1: "Pending",
    2: "Processing",
    3: "on-hold",
    4: "Completed",
    5: "cancelled",
    6: "Refunded",
    7: "Failed"
  };

  const { data: ordersData, isLoading, isFetching } = useGetAllOrdersQuery({ page, orderState: statusMap[value], OrderNameEmail: debouncedSearch, startDate, endDate });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);


  const tableData = ordersData?.data?.items.map((item) => {
    const totalQuantity = item.orderDetail.reduce((acc, curr) => acc + curr.quantity, 0);
    return {
      id: item?.id,
      order: item?.orderNumber,
      prdDate: item?.orderStatus?.scheduledDate.split("-").length > 1 ? DateConverter(item?.orderStatus?.scheduledDate) : DateConverter(Number(item?.orderStatus?.scheduledDate)),
      name: item?.user?.firstName + " " + item?.user?.lastName,
      qty: totalQuantity,
      status: item?.orderState.slice(0, 1).toUpperCase() + item?.orderState.slice(1).toLowerCase(),
      total: item?.total
    };
  });


  const isSmallScreen = useMediaQuery('(max-width: 360px)');
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleDateChange = (date, type) => {
    const formattedDate = DateObjectConverter(date?.$d);
    if (type === "from") {
      setStartDate(formattedDate)
    }
    else {
      setEndDate(formattedDate)
    }
  };

  const HandleDelete = (id) => {
    setDeleteId(id);
    setDeleteModal(true)
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message)
      setDeleteModal(false);
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong");
      setDeleteModal(false);
    }
  }, [isError])

  const HandleConfirm = () => {
    updateOrderStatus({ id: deleteId, orderState: "cancelled" })
  }


  return (
    <main className='main-container'>
      {/* <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", rowGap:"5px"}}> */}
      <Box sx={{ minHeight: "70px", marginTop: "14px", marginBottom: { xs: "25px", sm: "0px" } }}>
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
            setSearch={setSearch}
            placeholder="Search by order number or name" />
        </Grid>
        <Grid item xs={12} lg={4} md={12} sx={{ display: "flex", justifyContent: "flex-end", marginTop: { xs: "20px", sm: "0px" } }}>
          <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack direction={
                isSmallScreen ? "column" : "row"
              } gap={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <DesktopDatePicker label="Search from" sx={{ width: isSmallScreen ? "100%" : "150px" }} onChange={(data) => handleDateChange(data, 'from')} />
                <DesktopDatePicker label="Search to" sx={{ width: isSmallScreen ? "100%" : "150px" }} onChange={(data) => handleDateChange(data, 'to')} />
              </Stack>
            </LocalizationProvider>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Table
          data={tableData}
          columns={columns(page)}
          isLoading={isLoading || isFetching}
          handlePageChange={handlePageChange}
          page={page}
          handleDelete={(item) => HandleDelete(item?.id)}
          total={tableData && ordersData?.data?.meta?.totalItems}
        />

        <ConfirmationModal
          open={deleteModal}
          onClose={() => setDeleteModal(false)}
          description="This order will be deleted permanently."
          onConfirm={HandleConfirm}
          acceptBtnText={"Delete"}
          cancelBtnText={"Cancel"}
          isLoading={isOrderStatusLoading}
        />
      </Box>

    </main>
  )
}

export default Orders;
