import React from 'react'
import { Typography } from '@mui/material'
import CustomButton from '../buttons/customButton'

const PageHeader = ({title, btnText, sx}) => {
  return (
    <div className='main-title'>
      <Typography sx={{textTransform: "uppercase",fontSize:"20px", color:"white", fontWeight:"700", ...sx}}>{title}</Typography>
      {btnText && <CustomButton sx={{ width: "270px" }} >{btnText}</CustomButton>}
    </div>
  )
}

export default PageHeader