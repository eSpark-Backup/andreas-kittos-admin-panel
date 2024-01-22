import { Box, Typography } from '@mui/material'
import React from 'react'

const ChartLabel = ({ heading, color, rotate }) => {
    return (
        <Box sx={{
            display: "flex", alignItems: "center", transform:
                rotate ? "rotate(-90deg)" : "rotate(0deg)", marginY: "auto", width: "14%"
        }}>
            <Box sx={{ width: "10px", height: "10px", borderRadius: "20%", bgcolor: color, mr: 1 }} />
            <Typography variant="span" sx={{
                color: "#fff", fontSize: {
                    xs: "10px",
                    lg: "13px",
                    xl: "20px",
                }
            }}>{heading}</Typography>
        </Box>
    )
}

export default ChartLabel