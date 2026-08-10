import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const TabButton = ({ title, id, handleTab, currentTab }) => {
    return (
        <Box onClick={()=> handleTab(id)} sx={{
            border: "1px solid #424755", height: "45px", borderRadius: "5px", marginBottom: "10px", display: "flex", alignItems: "center", paddingLeft: "10px", cursor: "pointer",
            backgroundColor: currentTab === id ? "#424755" : "transparent"
        }}>
            <Typography sx={{ color: "white", fontSize: "14px" }}>{title}</Typography>
        </Box>
    )
}

export default TabButton