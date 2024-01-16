import React from 'react'
import BackBtn from '../../components/buttons/backBtn'
import { Box, Typography } from '@mui/material'


const OrderDetails = () => {

  return (
    <main className='main-container'>
      <BackBtn />

      <Box sx={{ display: "flex", justifyContent: { xs: "", md: "center" }, alignItems: { xs: "", md: "center" }, marginTop: "20px" }}>
        <Box sx={{ width: { xs: "100%", md: "100%", lg: "65%", xl: "55%" }, border: "1px solid #424755", height: "100%", borderRadius: "10px", py: "20px", px: { xs: "5px", md: "10px", lg: "30px" } }}>
          <Typography sx={{ color: "#FFFFFF", fontWeight: "700" }}>ADD PRODUCT</Typography>
        </Box>
      </Box>
    </main>
  )
}

export default OrderDetails