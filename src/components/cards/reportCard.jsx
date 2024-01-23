import { Card, Typography } from '@mui/material'
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
        <Card sx={{
            width: { xs: '100%', md: '100%', lg: '35%', xl: '40%' },
            padding: '30px',
            rowGap: '12px',
            marginBottom: '20px',

        }}>

            <Box>
                <img src={img} alt="Reports" />
            </Box>

            <Box>
                <Typography
                    sx={{
                        color: '#fff',
                        fontSize:{xs:"16px",md:"20px"}
                    }}
                    variant="h6"  >
                    {title}
                </Typography>
            </Box>

            <Box>
                <Typography
                    sx={{
                        color: '#9E9EA4',
                        fontSize:{xs:"14px",md:"16px"}
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

        </Card>
    )
}

export default ReportCard