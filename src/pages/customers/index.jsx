import React, { useEffect, useState } from 'react'
import { PageHeader, SearchInput, Table } from '../../components'
import { Box, Grid } from '@mui/material'
import { columns } from '../../columns/customers'
import { customerTabs, customerTableData } from '../../constant'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useGetAllCustomersQuery } from '../../services/customers'
import { DateConverter } from '../../utility/DateConverter'


const Customers = () => {
    const [value, setValue] = useState(0);
    const [search, setSearch] = useState("")
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [page, setPage] = useState(1);
    const statusMap = {
        1: "Active",
        2: "InActive",
    };


    useEffect(() => {
        const savedPage = sessionStorage.getItem('customerPage');
        if (savedPage) {
            setPage(parseInt(savedPage, 10));
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('customerPage', page);
    }, [page]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [search]);

    useEffect(() => {
        if (debouncedSearch) {
            setPage(1);
        }
    }, [debouncedSearch])

    const { data: customersData, isLoading, isFetching } = useGetAllCustomersQuery({ page, userStatus: statusMap[value], customerName: debouncedSearch })

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setPage(1)
    };

    const data = customersData?.data?.items.map((item) => {
        return {
            id: item?.id,
            customerName: item?.firstName + " " + item?.lastName,
            joinDate: DateConverter(item?.createdAt),
            totalOrders: item?.orderCount,
            earnings: item?.earning,
            status: item?.userStatus.slice(0, 1).toUpperCase() + item?.userStatus.slice(1).toLowerCase()
        }
    })
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    if (isLoading) {
        return (
            <Box sx={{ width: "80vw", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="loader"></div>
            </Box>
        )
    }




    return (
        <main className='main-container'>
            <Box sx={{ height: "80px" }}>
                <PageHeader title="Customers" />
            </Box>
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
            <Grid container rowGap={2} sx={{ display: "flex", justifyContent: "space-between", margin: "40px 0px 20px 0px" }}>
                <Grid item xs={12} lg={4}>
                    <SearchInput setSearch={setSearch} placeholder="Search by customer name" />
                </Grid>
            </Grid>
            <Box>
                <Table
                    data={data && data}
                    columns={columns(page)}
                    isLoading={isLoading || isFetching}
                    total={data && customersData?.data?.meta?.totalItems}
                    handlePageChange={handlePageChange}
                    page={page}
                />
            </Box>

        </main>
    )
}

export default Customers