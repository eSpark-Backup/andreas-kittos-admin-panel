import React, { useEffect, useState } from 'react'
import { PageHeader, SearchInput, Table } from '../../components'
import { Box, Grid } from '@mui/material'
import { columns } from '../../columns/customers'
import { customerTabs, customerTableData } from '../../constant'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const Customers = () => {
    const [value, setValue] = useState(0);
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        let filteredData = [...customerTableData];
        const statusMap = {
            1: "Active",
            2: "InActive",
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
            <PageHeader title="Customers" />
            <Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {customerTabs.map((item, index) => (
                        <Tab label={item} sx={{ width: "120px" }} key={index} />
                    ))}
                </Tabs>
            </Box>
            <Grid container rowGap={2} sx={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>
                <Grid item xs={12} lg={4}>
                   <SearchInput setSearch={setSearch}  placeholder="Search by order number or name" /> 
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

export default Customers