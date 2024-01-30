import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

const MenuTab = ({key, item, onClick, currentTab, categories}) => {
  const isSmallScreen = useMediaQuery('(max-width: 360px)');

    return (
        <Box key={key} onClick={onClick} sx={{ border: "1px solid #424755", height: "20px", borderRadius: "5px", display: "flex", alignItems: "center", cursor: "pointer", backgroundColor: currentTab == item.id ? "#424755" : "", minWidth: { xs: categories?"270px":"91%",sm:categories?"96":"91%", md: "80%", lg: categories?"88%":"88%" }, padding:"10px", marginBottom:{xs:categories?"10px":"0px"} }} >
            <Typography sx={{ color: "white", fontSize: "16px"}}>{item.title}</Typography>
        </Box>
    )
}

export default MenuTab