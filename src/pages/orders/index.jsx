import React, { useEffect, useState } from 'react'
import { PageHeader, Table } from '../../components'
import { Box, Stack } from '@mui/material'
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
      // Do nothing for other cases
    }

    // switch (value) {
    //   case 1:
    //     filteredData = filteredData.filter((item) => item.status === "Pending");
    //     break;
    //   case 2:
    //     filteredData = filteredData.filter((item) => item.status === "Processing");
    //     break;
    //   case 3:
    //     filteredData = filteredData.filter((item) => item.status === "On-hold");
    //     break;
    //   case 4:
    //     filteredData = filteredData.filter((item) => item.status === "Completed");
    //     break;
    //   case 5:
    //     filteredData = filteredData.filter((item) => item.status === "Cancelled");
    //     break;
    //   case 6:
    //     filteredData = filteredData.filter((item) => item.status === "Refunded");
    //     break;
    //   case 7:
    //     filteredData = filteredData.filter((item) => item.status === "Failed");
    //     break;
      
    //   default:
    //     // Do nothing for other cases
    //     break;
    // }

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
      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>
        <TextField placeholder='Search by order number or name' sx={{ width: "30%" }} InputProps={{ startAdornment: <SearchIcon sx={{ color: "#9E9EA4", height: "20px", width: "20px" }} /> }} />
        <Box sx={{ width: "30%" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack direction={"row"} gap={2}>
              <DatePicker label="Search from" sx={{ width: "48%" }} />
              <DatePicker label="Search to" sx={{ width: "48%" }} />
            </Stack>
          </LocalizationProvider>
        </Box>
      </Box>
      <Box>
        <Table
          data={data}
          columns={columns()}
          isLoading={false}
          total={data.length}
        />
      </Box>

      {/*  */}

    </main>
  )
}

export default Orders