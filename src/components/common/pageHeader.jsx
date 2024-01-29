import React from 'react'
import { Box, Typography } from '@mui/material'
import CustomButton from '../buttons/customButton'

const PageHeader = ({ title, btnText, sx }) => {
  return (
    <div className='main-title'>
      <Typography sx={{ textTransform: "uppercase", fontSize: "20px", color: "white", fontWeight: "700", ...sx }}>{title}</Typography>
      {btnText && <Box sx={{display:"flex", justifyContent:"flex-end", marginBottom:"10px"}}><CustomButton sx={{ width: "270px" }} >{btnText}</CustomButton></Box>}

    </div>
  )
}

export default PageHeader