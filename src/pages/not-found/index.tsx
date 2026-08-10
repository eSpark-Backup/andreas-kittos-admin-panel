import { Box, Typography } from '@mui/material'
import React from 'react'

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw'
      }}
    >
      <Typography sx={{ color: "white" }} variant="h1" component="h2" >
        404
      </Typography>
      &nbsp;
      <Typography sx={{ color: "white" }} variant="h5" component="h2" >
        |
      </Typography>
      &nbsp;
      <Typography sx={{ color: "white" }} variant="h5" component="h2" >
        Page not found
      </Typography>

    </Box>
  )
}

export default NotFound