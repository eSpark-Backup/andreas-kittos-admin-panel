import { Grid, Typography } from '@mui/material'
import React from 'react'

const OrderDetailItem = ({ label, value }) => {
    return (
        <>
            <Grid item xs={6} lg={2.9}>
                <Typography sx={{ color: '#FFFFFF', fontSize: { xs: "12px", lg: "14px" }, fontWeight: "500" }}>{label}</Typography>
            </Grid>
            <Grid item xs={6} lg={8}>
                <Typography
                    sx={{
                        color: '#FFFFFF',
                        fontSize: { xs: "12px", lg: "16px" },
                        fontWeight: "500",
                        textAlign: {
                            xs: "right",
                            lg: "left"
                        },
                        ...(label?.toLowerCase() === "customer note: " && value?.length > 65 && {
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            border: '1px solid #ffffff',
                        })
                    }}
                    title={label?.toLowerCase() === "customer note: " && value?.length > 65 ? value : ""}
                >
                    {label?.toLowerCase() === "customer note: " && value?.length > 65 ? `${value.slice(0, 62)}...` : value}
                </Typography>

            </Grid>
        </>
    )
}

export default OrderDetailItem