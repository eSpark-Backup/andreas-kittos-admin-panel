import { Box, Typography } from '@mui/material'
import React from 'react'


const ChartLabel = ({ heading, color, rotate, icon }) => {
    return (
        <Box sx={{
            display: {xs:"none",md:"flex"}, alignItems: "center", transform:
                rotate ? "rotate(-90deg)" : "rotate(0deg)", marginY: "auto", width: "5%"
        }}>
            <Box sx={{mr: 1}}>
                <img src={icon} alt="purple square" />
            </Box>
            <Typography variant="span" sx={{
                color: "#fff", fontSize: {
                    xs: "10px",
                    lg: "13px",
                    xl: "20px",
                },
                textWrap: "nowrap",
            }}>{heading}</Typography>
        </Box>
    )
}

export default ChartLabel