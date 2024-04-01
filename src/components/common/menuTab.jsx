import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

const MenuTab = ({key, item, onClick, currentTab, categories}) => {
    // console.log(item)

    return (
        <Box key={key} onClick={onClick} sx={{ border: "1px solid #424755", height: "20px", borderRadius: "5px", display: "flex", alignItems: "center", cursor: "pointer", backgroundColor: currentTab == item.id ? "#424755" : "", width: { xs: categories?"270px":"92%",sm:categories?"96%":"91%", md: categories?"80%":"80%", lg: categories?"88%":"88%", xl:categories?"93%":"88%" }, padding:"10px", marginBottom:{xs:categories?"10px":"0px"}, minWidth:{xs:categories?"270px":"auto", md:"auto"} }} >
            <Typography sx={{ color: "white", fontSize: "16px"}}>{item?.name}</Typography>
        </Box>
    )
}

export default MenuTab