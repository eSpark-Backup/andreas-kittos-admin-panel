import { Box, Grid, TextField, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import { CustomButton, Table } from "../../components";
import { columns } from "../../columns/categories";
import { catagoriesTableData } from "../../constant";

const Catagories = () => {

    const [currentTab, setCurrentTab] = useState(1)
    const [data, setData] = useState([])

    const handleTab = (id) => {
        setCurrentTab(id)
    }

    useEffect(() => {
        let filteredData = [...catagoriesTableData];
        const statusMap = {
            1: "Laundry",
            2: "Ironing",
            3: "Dry cleaning",
        };


        const statusToFilter = statusMap[currentTab];

        if (statusToFilter) {
            filteredData = filteredData.filter((item) => item?.category === statusToFilter);
        } else {
        }
        setData(filteredData);

    }, [currentTab]);


    const tabsData = [
        { title: 'Laundry', id: 1 },
        { title: 'Ironing', id: 2 },
        { title: 'Dry Cleaning', id: 3 },

    ];


    return (
        <main className='main-container'>
            <Box>
                <Typography sx={{ color: "#FFFFFF", fontSize: "20px", fontWeight: "700" }}>CATEGORIES</Typography>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <TextField
                        name='password'
                        id="filled-hidden-label-normal"
                        placeholder="Search by name..."
                        type={"text"}
                        InputProps={{
                            startAdornment: <SearchIcon sx={{ color: "#9E9EA4", height: "20px", width: "20px" }} />
                        }}
                    />
                </Box>


                <Grid container sx={{
                    gap: { xs: "10px", md: "20px", lg: "35px", xl: "65px" }, marginTop: "20px"
                }}>

                    <Grid item xs={12} lg={3} sx={{ border: "1px solid #424755", padding: "30px 10px 0px 10px", display: "flex", flexDirection: "column", alignItems: "center", rowGap: "30px", borderRadius: "10px" }}>
                        <Typography sx={{ color: "white", fontSize: "20px", fontWeight: "700" }}>Categories</Typography>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: { xs: "row", md: "column" }, rowGap: "20px", columnGap: "10px", marginBottom: "10px" }}>
                            {tabsData.map((eachItem, index) => (

                                <Box onClick={() => handleTab(eachItem.id)} sx={{ border: "1px solid #424755", height: "40px", borderRadius: "5px", display: "flex", alignItems: "center", paddingLeft: { xs: "7px", md: "10px" }, cursor: "pointer", backgroundColor: currentTab == eachItem.id ? "#424755" : "", width: { xs: "50%", md: "90%", lg: "95%" } }} key={index}>
                                    <Typography sx={{ color: "white", fontSize: { xs: "12px", lg: "16px" } }}>{eachItem.title}</Typography>
                                </Box>

                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={8.5} sx={{ border: "1px solid #424755", padding: "30px 10px 0px 10px", borderRadius: "10px" }}>

                        <Box>
                            <Box sx={{ maxHeight: { xs: "75%", md: "100%" }, overflowY: "scroll", marginTop: "15px" }}>
                                <Table
                                    data={data}
                                    columns={columns()}
                                    isLoading={false}
                                    total={data.length}
                                />
                            </Box>
                        </Box>

                        <Box>
                            <CustomButton sx={{width:"100%", margin:"10px 0px"}}> Add New Product</CustomButton>
                        </Box>


                    </Grid>
                </Grid>
            </Box>
        </main>
    )
}

export default Catagories