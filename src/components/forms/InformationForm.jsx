import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import PageHeader from '../common/pageHeader'
import { personalInfoInutsData } from '../../constant'
import CustomInput from '../inputs/customInput'

const InformationForm = () => {

    return (
        <Box sx={{ width: "100%", marginTop: {xs:"20px", md:"20px"}, paddingLeft: { xs: "10px", md: "20px" } }}>
            <PageHeader title="Information" sx={{textTransform:"capitalize"}} />
            <Grid container columnGap={10} rowGap={3} sx={{ marginTop: "25px" }}>
                {personalInfoInutsData.map((eachItem, index) => (
                    <Grid item xs={12} md={7} lg={5.5} key={index}>
                        <Stack direction={"column"} gap={1} sx={{ marginBottom: index === 4 ? "10px" : "" }}>
                            <CustomInput disabled={true} type={"text"} label={eachItem.label} placeholder={eachItem.placeholder} />
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default InformationForm