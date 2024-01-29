import { Box, Typography } from '@mui/material'
import React from 'react'

const MenuTab = ({key, item, onClick, currentTab, categories}) => {
    return (
        <Box key={key} onClick={onClick} sx={{ border: "1px solid #424755", height: "20px", borderRadius: "5px", display: "flex", alignItems: "center", cursor: "pointer", backgroundColor: currentTab == item.id ? "#424755" : "", width: { xs: categories?"96%":"45%", md: "75%", lg: categories?"94%":"88%" }, padding:"10px 3px"}} >
            <Typography sx={{ color: "white", fontSize: { xs: "14px", lg: "14px" } }}>{item.title}</Typography>
        </Box>
    )
}

export default MenuTab