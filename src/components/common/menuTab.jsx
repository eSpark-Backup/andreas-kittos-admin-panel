import { Box, Typography } from '@mui/material'
import React from 'react'

const MenuTab = ({key, item, onClick, currentTab}) => {
    return (
        <Box key={key} onClick={onClick} sx={{ border: "1px solid #424755", height: "40px", borderRadius: "5px", display: "flex", alignItems: "center", paddingLeft: { xs: "7px", md: "10px" }, cursor: "pointer", backgroundColor: currentTab == item.id ? "#424755" : "", width: { xs: "50%", md: "90%", lg: "95%" } }} >
            <Typography sx={{ color: "white", fontSize: { xs: "12px", lg: "16px" } }}>{item.title}</Typography>
        </Box>
    )
}

export default MenuTab