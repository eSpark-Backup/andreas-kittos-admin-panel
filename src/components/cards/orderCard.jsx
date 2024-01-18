import { Box, Typography } from '@mui/material'
import React from 'react'

const OrderCard = ({ heading, children }) => {
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
                <Typography sx={{ color: '#FFFFFF' }}>{heading}</Typography>
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

export default OrderCard