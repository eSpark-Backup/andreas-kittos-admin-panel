import { Grid, Typography } from '@mui/material'
import React from 'react'

const OrderDetailItem = ({ label, value }) => {
    return (
        <>
            <Grid item xs={6} lg={4}>
                <Typography sx={{ color: '#FFFFFF', fontSize: {xs:"12px", lg:"14px"}}}>{label}</Typography>
            </Grid>
            <Grid item xs={6} lg={8}>
                <Typography sx={{ color: '#FFFFFF', fontSize: {xs:"12px", lg:"14px"}}}>{value}</Typography>
            </Grid>
        </>
    )
}

export default OrderDetailItem