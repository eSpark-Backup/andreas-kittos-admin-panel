import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { customerDetailsTableData, ordersTabs } from '../../constant';
import { Box } from '@mui/material';
import { Table } from '../../components'
import { columns } from '../../columns/cutomerDetails';


const CustomerOrders = () => {
    const [value, setValue] = useState(0);
    const [data, setData] = useState([])

    useEffect(() => {
        let filteredData = [...customerDetailsTableData];
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

    const handleChange = (event, newValue) => {
        setValue(newValue);

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
                        <Tab label={item} key={index} />
                    ))}
                </Tabs>
            </Box>
            {/*  */}
            <Box sx={{ maxHeight: { xs: "75%", md: "82%" }, overflowY:"scroll", marginTop:"12px" }}>
                <Box sx={{ marginTop: "15px", width:"99%" }}>
                    <Table
                        data={data}
                        columns={columns()}
                        isLoading={false}
                        total={data.length}
                    />
                </Box>
            </Box>
        </>
    )
}

export default CustomerOrders
