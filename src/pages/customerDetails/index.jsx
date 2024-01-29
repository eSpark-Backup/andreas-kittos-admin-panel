import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BackBtn, ConfirmationModal, CustomButton, PageHeader } from '../../components';
import { Box, Grid, Stack, Typography } from '@mui/material';
import user from "../../assets/images/User.svg"
import { userData } from '../../constant';
import CustomerOrders from '../../components/customerOrders/CustomerOrders';
import Back from "../../assets/icons/Back.svg"


const CustomerDetails = () => {
    const { id } = useParams();
    const [openModal, setOpenModal] = useState(false)
    const navigate = useNavigate()
    const onConfirm = () => {
        setOpenModal(false)
    }
    return (
        <main className='main-container'>
            <BackBtn />
            <Box sx={{ height: "60px", marginTop: "20px" }}>
                <PageHeader title={"CUSTOMER DETAILS"} />
            </Box>
            <Grid container gap={3} sx={{ marginTop: "8px" }}>
                <Grid item xs={12} md={12} lg={3} xl={2.3}>
                    <Box sx={{ display: "flex", flexDirection: "column", padding: "30px 0px", justifyContent: "center", alignItems: "center", rowGap: "15px", border: "1px solid #424755", borderRadius: "10px" }}>
                        <Typography sx={{ color: "#FFFFFF", fontSize: "20px", fontWeight: "700" }}>Customer Profile</Typography>
                        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:{xs:"row", sm:"column"}, px:"4px", columnGap:"10px"}}>
                            <img src={user} alt='User' style={{height:"70px", width:"70px"}} />
                            <Box>
                                {userData.map((eachItem, index) => (
                                    <Stack columnGap={1} direction={"row"} sx={{ paddingLeft: { md: "25px" }, marginTop: "10px" }} key={index}>
                                        <Typography sx={{ color: "#FFFFFF", fontSize: "14px", fontWeight: "bold" }}>{eachItem.title}: </Typography>
                                        <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>{eachItem.description}</Typography>
                                    </Stack>
                                ))}
                            </Box>
                        </Box>
                        <Stack sx={{ borderTop: "1px solid #424755", width: "100%", marginTop: "10px", height: "30px" }} direction={"row"}>
                            <Box sx={{ width: "50%", height: "200%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <Typography sx={{ color: "#FFFFFF", fontSize: { xs: "14px", lg: "15px", xl: "16px" }, textAlign: "center" }}>Total orders</Typography>
                                <Typography sx={{ color: "#FFFFFF", fontSize: { xs: "14px", lg: "15px", xl: "16px" }, textAlign: "center" }}>50</Typography>
                            </Box>
                            <Box sx={{ width: "50%", height: "200%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", borderLeft: "1px solid #424755" }}>
                                <Typography sx={{ color: "#FFFFFF", fontSize: { xs: "14px", lg: "15px", xl: "16px" }, textAlign: "center" }}>Completed orders</Typography>
                                <Typography sx={{ color: "#FFFFFF", fontSize: { xs: "14px", lg: "15px", xl: "16px" }, textAlign: "center" }}>50</Typography>
                            </Box>
                        </Stack>
                    </Box>
                    <CustomButton variant="outlined" color="primary" sx={{ width: "100%", my:"50px" }} onClick={() => setOpenModal(true)}>
                        Deactivate Customer
                    </CustomButton>
                </Grid>

                <Grid item xs={12} md={12} lg={8.5} sx={{ border: "1px solid #424755", borderRadius: "10px", maxHeight: "79vh", padding: "5px 15px" }}>
                    <div className='main-title'>
                        <Typography sx={{ color: "white", fontSize: "20px", fontWeight: "700", margin: "10px", textAlign:{xs:"center", md:"start"}  }}>Orders <span style={{ fontWeight: "500"}}>(50)</span></Typography>
                    </div>
                    <CustomerOrders />
                </Grid>
            </Grid>
            <ConfirmationModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                description={`Are you sure you want to Deactivate this customer?`}
                onConfirm={onConfirm}
                acceptBtnText={"Deactivate"}
                cancelBtnText={"Cancel"}
            />
        </main>
    )
}

export default CustomerDetails
