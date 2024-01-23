import React from 'react'
import { Typography } from '@mui/material'

const PageHeader = ({title, sx}) => {
  return (
    <div className='main-title'>
      <Typography sx={{textTransform: "uppercase",fontSize:"20px", color:"white", fontWeight:"700", ...sx}}>{title}</Typography>
    </div>
  )
}

export default PageHeader