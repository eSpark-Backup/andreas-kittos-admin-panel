import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import PageHeader from '../common/pageHeader'
import { personalInfoInutsData } from '../../constant'
import CustomInput from '../inputs/customInput'
import { useGetInfoQuery } from '../../services/personalInfo'

const InformationForm = () => {

    const {data:infoData,isLoading} = useGetInfoQuery()
    if (isLoading) {
        return (
            <Box sx={{ width: "80vw", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="loader"></div>
            </Box>
        )
    }
    const inputsData = {
        "First name:":infoData?.data?.firstName,
        "Last name:":infoData?.data?.lastName,
        "Full name:":infoData?.data?.firstName+" "+infoData?.data?.lastName,
        "Email:":infoData?.data?.email,
        "Phone:":infoData?.data?.phoneNumber
    }

    return (
        <Box sx={{ width: "100%", marginTop: {xs:"20px", md:"20px"}, padding: { xs: "0px 10px", md: "0px 20px" } }}>
            <PageHeader title="Information" sx={{textTransform:"capitalize"}} />
            <Grid container columnGap={10} rowGap={3} sx={{ marginTop: "25px" }}>
                {personalInfoInutsData.map((eachItem, index) => (
                    <Grid item xs={12} md={7} lg={5.5} key={index}>
                        <Stack direction={"column"} gap={1} sx={{ marginBottom: index === 4 ? "10px" : "" }}>
                            <CustomInput 
                            sx={{
                                "& .MuiInputBase-input.Mui-disabled": {
                                    WebkitTextFillColor: "#9E9EA4",
                                    
                                },
                            }}
                            disabled={true} type={"text"} label={eachItem.label}
                            placeholder={inputsData[eachItem?.label]} />
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default InformationForm