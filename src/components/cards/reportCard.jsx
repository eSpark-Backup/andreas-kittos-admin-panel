import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CustomButton from '../buttons/customButton'

const ReportCard = ({
    img,
    title,
    description,
    btnText,
    onClick,
}) => {
    return (
        <Box
            sx={{
                border: '1px solid #424755',
                width: { xs: '100%', md: '100%', lg: '35%', xl: '40%' },
                padding: '40px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '20px',
        
            }}
        >
            <Box>
                <img src={img} alt="Reports" />
            </Box>

            <Box>
                <Typography
                    sx={{
                        color: '#fff',
                    }}
                    variant="h6"  >
                   {title}
                </Typography>
            </Box>

            <Box>
                <Typography
                    sx={{
                        color: '#9E9EA4',
                    }}
                    variant="body2" >
                    {description}
                </Typography>
            </Box>

            <Box>
                <CustomButton onClick={onClick} sx={{ width: '150px' }} variant="outlined" color="primary" >
                   {btnText}
                </CustomButton>
            </Box>
        </Box>
    )
}

export default ReportCard