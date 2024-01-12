import React from 'react'
import { useParams } from 'react-router-dom'
import { CustomButton, PageHeader } from '../../components';
import { Box, Grid, Stack, Typography } from '@mui/material';
import user from "../../assets/images/User.svg"
import { userData } from '../../constant';
import CustomerOrders from '../../components/customerOrders/CustomerOrders';

const CustomerDetails = () => {
    const { id } = useParams();
    return (
        <main className='main-container'>
            <PageHeader title={"CUSTOMER DETAILS"} />
            <Grid container gap={3}>
                <Grid item xs={12} md={5} lg={3}>
                    <Box sx={{ display: "flex", flexDirection: "column", padding: "30px 0px", justifyContent: "center", alignItems: "center", rowGap: "15px", border: "1px solid #424755", borderRadius: "10px" }}>
                        <Typography sx={{ color: "#FFFFFF", fontSize: "20px", fontWeight: "700" }}>Customer Profile</Typography>
                        <img src={user} alt='User' />
                        <Box>
                            {userData.map((eachItem, index) => (
                                <Stack columnGap={1} direction={"row"} sx={{ paddingLeft: { md: "25px" }, marginTop: "10px" }} key={index}>
                                    <Typography sx={{ color: "#FFFFFF", fontSize: "14px", fontWeight: "bold" }}>{eachItem.title}: </Typography>
                                    <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>{eachItem.description}</Typography>
                                </Stack>
                            ))}
                        </Box>
                        <Stack sx={{ borderTop: "1px solid #424755", width: "100%", marginTop: "10px", height: "30px" }} direction={"row"}>
                            <Box sx={{ width: "50%", height: "200%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <Typography sx={{ color: "#FFFFFF", fontSize: "16px" }}>Total orders</Typography>
                                <Typography sx={{ color: "#FFFFFF", fontSize: "16px" }}>50</Typography>
                            </Box>
                            <Box sx={{ width: "50%", height: "200%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", borderLeft: "1px solid #424755" }}>
                                <Typography sx={{ color: "#FFFFFF", fontSize: "16px" }}>Completed orders</Typography>
                                <Typography sx={{ color: "#FFFFFF", fontSize: "16px" }}>50</Typography>
                            </Box>
                        </Stack>
                    </Box>
                    <CustomButton variant="outlined" color="primary" sx={{ marginTop: "30px", width: "100%" }}>
                        Deactivate Customer
                    </CustomButton>
                </Grid>

                <Grid item xs={12} md={12} lg={8.5} sx={{ border: "1px solid #424755", borderRadius: "10px", maxHeight: "80vh", padding: "5px 15px" }}>
                    <div className='main-title'>
                        <h3>Orders (50)</h3>
                    </div>
                    <CustomerOrders />
                </Grid>
            </Grid>
        </main>
    )
}

export default CustomerDetails
