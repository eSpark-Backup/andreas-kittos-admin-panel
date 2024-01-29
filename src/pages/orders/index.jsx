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


const Orders = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")

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

  const isSmallScreen = useMediaQuery('(max-width: 400px)');


  return (
    <main className='main-container'>
      {/* <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", rowGap:"5px"}}> */}
      <Box sx={{ minHeight: "70px", marginTop:"14px" }}>
        <PageHeader title="Orders" btnText={"Download report"} />
      </Box>

      {/* <Box>
        <CustomButton sx={{ width: "270px" }} >Download Report</CustomButton>
      </Box> */}
      {/* </Box> */}
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
        <Grid item xs={12} lg={4}>
          <SearchInput setSearch={setSearch} placeholder="Search by order number or name"/>
        </Grid>
        <Grid item xs={12} lg={4} md={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack direction={"row"} gap={2}>
                <DesktopDatePicker label="Search from" sx={{ width: isSmallScreen ? "120px" : "150px" }} />
                <DesktopDatePicker label="Search to" sx={{ width: isSmallScreen ? "120px" : "150px" }} />
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