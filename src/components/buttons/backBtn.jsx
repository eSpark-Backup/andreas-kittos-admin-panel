import { Box, Typography } from '@mui/material'
import React from 'react'
import Back from "../../assets/icons/Back.svg"
import { useNavigate } from 'react-router-dom'

const BackBtn = () => {
    const navigate = useNavigate()
    return (
        <>
            <Box sx={{ display: "flex", alignItems: "center" }} >
                <Box sx={{ mr: "15px" }}>
                    <img src={Back} alt='Back' />
                </Box>
                <Typography onClick={() => navigate(-1)} sx={{ color: "white", cursor: "pointer", width: "fit-content" }}>
                    Back</Typography>
            </Box>
        </>
    )
}

export default BackBtn