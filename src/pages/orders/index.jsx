import React, { useEffect, useState } from 'react'
import { PageHeader, Table } from '../../components'
import { Box, Grid, Stack } from '@mui/material'
import { columns } from '../../columns/orders'
import { ordersTableData, ordersTabs } from '../../constant'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TextField } from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';


const Orders = () => {
  const [value, setValue] = React.useState(0);
  const [data, setData] = useState([])

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  useEffect(() => {
    let filteredData = [...ordersTableData];
    const statusMap = {
      1: "Pending",
      2: "Processing",
      3: "On-hold",
      4: "Completed",
      5: "Cancelled",
      6: "Refunded",
      7: "Failed"
    };

    const statusToFilter = statusMap[value];

    if (statusToFilter) {
      filteredData = filteredData.filter((item) => item.status === statusToFilter);
    } else {
    }
    setData(filteredData);
  }, [value]);





  return (
    <main className='main-container'>
      <PageHeader title="Orders" />
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
      <Grid container rowGap={2} sx={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>
        <Grid item xs={12} lg={4}>
          <TextField placeholder='Search by order number or name' sx={{ width: "100%" }} InputProps={{ startAdornment: <SearchIcon sx={{ color: "#9E9EA4", height: "20px", width: "20px" }} /> }} />
        </Grid>
        <Grid item xs={12} lg={4} md={7}>
          <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack direction={"row"} gap={2}>
                <DatePicker label="Search from" sx={{ width: "50%" }}  />
                <DatePicker label="Search to" sx={{ width: "50%" }} />
              </Stack>
            </LocalizationProvider>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Table
          data={data}
          columns={columns()}
          isLoading={false}
          total={data.length}
        />
      </Box>

    </main>
  )
}

export default Orders