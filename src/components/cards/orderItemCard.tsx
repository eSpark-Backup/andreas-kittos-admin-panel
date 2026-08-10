import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const OrderItemCard = ({ children }) => {
    return (
        <Box
            sx={{
                border: "1px solid #424755",
                p: "10px 0px",
                borderRadius: "10px",
            }}
        >
            <Box sx={{
                borderBottom: "1px solid #424755",
                borderRadius: "10px",
                paddingBottom: "10px",
                px: "20px",
            }}>
                <Grid container p={"0px 30px"} rowGap={2}>
                    <Grid item xs={4} lg={4}>
                        <Typography sx={{ color: '#FFFFFF' }}>{"Items"}</Typography>
                    </Grid>
                    <Grid item xs={3} lg={3}>
                        <Typography sx={{ color: '#FFFFFF' }}>{"Quantity"}</Typography>
                    </Grid>
                    <Grid item xs={3} lg={3}>
                        <Typography sx={{ color: '#FFFFFF' }}>{"Category"}</Typography>
                    </Grid>
                    <Grid item xs={2} lg={2}>
                        <Typography sx={{ color: '#FFFFFF' }}>{"Price"}</Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box
                sx={{
                    p: "15px 20px",
                }}
            >

                <Box>{children}</Box>


            </Box>
        </Box>
    )
}

export default OrderItemCard