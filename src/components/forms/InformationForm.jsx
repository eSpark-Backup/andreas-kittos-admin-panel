import { Box, Grid, InputLabel, Stack, TextField } from '@mui/material'
import React from 'react'
import PageHeader from '../common/pageHeader'
import { personalInfoInutsData } from '../../constant'

const InformationForm = () => {



    return (
        <Box sx={{ width: "100%" }}>
            <PageHeader title="Information" />
            <Grid container columnGap={12} rowGap={3} sx={{ marginTop: "20px" }}>
                {personalInfoInutsData.map((eachItem,index) => (
                    <Grid item md={5.5} key={index}>
                        <Stack direction={"column"} gap={1}>
                            <InputLabel sx={{ color: "#FFFFFF", fontSize: "14px", fontWeight: "500" }}>{eachItem.label}</InputLabel>
                            <TextField
                                id="filled-hidden-label-normal"
                                value={eachItem.placeholder}
                                fullWidth
                                disabled
                            />
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default InformationForm