import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BackBtn, ConfirmationModal, CustomButton, PageHeader } from '../../components';
import { Box, Grid, Stack, Typography } from '@mui/material';
import user from "../../assets/images/User.svg"
import CustomerOrders from '../../components/customerOrders/CustomerOrders';
import Back from "../../assets/icons/Back.svg"
import { useGetAllOrdersQuery } from '../../services/orders';
import { DateMonthYear } from '../../utility/DateConverter';
import { useUpdateCustomerStatusMutation } from '../../services/customers';
import { toast } from 'react-toastify';


const CustomerDetails = () => {
    const [openModal, setOpenModal] = useState(false)
    const navigate = useNavigate()

    const params = useParams()
    const { data: CustomerInfoData, isLoading,refetch } = useGetAllOrdersQuery({ userId: params?.id })
    const [updateStatus, { data: statusData, isLoading: statusLoading,isSuccess,isError }] = useUpdateCustomerStatusMutation()

    const userData = [
        {
            title: "Name",
            description: CustomerInfoData?.data?.user?.displayName
        },
        {
            title: "Email",
            description: CustomerInfoData?.data?.user?.email
        },
        {
            title: "Phone",
            description: CustomerInfoData?.data?.user?.phoneNumber
        },
        {
            title: "Joined Date",
            // description:CustomerInfoData?.data?.items[0]?.user?.
            description: DateMonthYear(CustomerInfoData?.data?.user?.createdAt)
        }
    ]
    const onConfirm = (data) => {
        updateStatus({ id: params?.id, status: { userStatus: data } })
    }
    
    useEffect(() => {
        if (isSuccess) {
            toast.success('Status has been updated successfully', {
            });
            setOpenModal(false)
        }
        refetch()
        if (isError) {
            toast.error("An error occurred. Please try again");
        }
    }, [isSuccess, isError])
    if (isLoading) {
        return (
            <Box sx={{ width: "80vw", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="loader"></div>
            </Box>
        )
    }

    return (
        <main className='main-container'>
            <BackBtn />
            <Box sx={{ height: "60px", marginTop: "20px" }}>
                <PageHeader title={"CUSTOMER DETAILS"} />
            </Box>
            <Grid container gap={2.5} sx={{ marginTop: "8px" }}>
                <Grid item xs={12} md={12} lg={3} xl={2}>
                    <Box sx={{ display: "flex", flexDirection: "column", padding: "30px 0px", justifyContent: "center", alignItems: "center", rowGap: "15px", border: "1px solid #424755", borderRadius: "10px" }}>
                        <Typography sx={{ color: "#FFFFFF", fontSize: "20px", fontWeight: "700" }}>Customer Profile</Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: { xs: "row", sm: "column" }, px: "4px", columnGap: "10px" }}>
                            <img src={CustomerInfoData?.data?.user?.profileImage ? CustomerInfoData?.data?.user?.profileImage : user} alt='User' className='cutomer-detail-icon' />
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
                            <Box sx={{ width: "45%", height: "200%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <Typography sx={{ color: "#FFFFFF", fontSize: { xs: "14px", lg: "15px", xl: "16px" }, textAlign: "center" }}>Total orders</Typography>
                                <Typography sx={{ color: "#FFFFFF", fontSize: { xs: "14px", lg: "15px", xl: "16px" }, textAlign: "center" }}>{CustomerInfoData?.data?.userOrderData?.orderCount}</Typography>
                            </Box>
                            <Box sx={{ width: "55%", height: "200%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", borderLeft: "1px solid #424755" }}>
                                <Typography sx={{ color: "#FFFFFF", fontSize: { xs: "14px", lg: "15px", xl: "16px" }, textAlign: "center" }}>Completed orders</Typography>
                                <Typography sx={{ color: "#FFFFFF", fontSize: { xs: "14px", lg: "15px", xl: "16px" }, textAlign: "center" }}>{CustomerInfoData?.data?.userOrderData?.completedOrderCount}</Typography>
                            </Box>
                        </Stack>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: { xs: "45px", lg: "20px" }, marginBottom: { xs: "25px" } }}>
                        <CustomButton variant="outlined" color="primary" sx={{ width: "87%" }} onClick={() => setOpenModal(true)}>
                            {CustomerInfoData?.data?.user?.userStatus === "active" ? "Deactivate Customer" : "Activate Customer"}
                        </CustomButton>
                    </Box>
                </Grid>

                <Grid item xs={12} md={12} lg={8.5} sx={{ border: "1px solid #424755", borderRadius: "10px", maxHeight: "79vh", padding: "5px 15px", }}>
                    <div className='main-title'>
                        <Typography sx={{ color: "white", fontSize: "20px", fontWeight: "700", margin: "10px", textAlign: { xs: "center", md: "start" } }}>Orders <span style={{ fontWeight: "500" }}>({CustomerInfoData?.data?.userOrderData?.orderCount})</span></Typography>
                    </div>
                    <CustomerOrders />
                </Grid>
            </Grid>
            <ConfirmationModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                description={`Are you sure you want to ${CustomerInfoData?.data?.user?.userStatus === "active"?"Deactivate":"Activate"} this customer?`}
                onConfirm={()=>onConfirm(CustomerInfoData?.data?.user?.userStatus === "active"?"inactive":"active")}
                acceptBtnText={CustomerInfoData?.data?.user?.userStatus === "active"?"Deactivate":"Activate"}
                cancelBtnText={"Cancel"}
            />
        </main>
    )
}

export default CustomerDetails
