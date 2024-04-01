import { Box, Typography } from '@mui/material'
import React from 'react'
import Back from "../../assets/icons/Back.svg"
import { useNavigate } from 'react-router-dom'

const BackBtn = () => {
    const navigate = useNavigate()
    return (
        <>
            <Box onClick={() => navigate(-1)} sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} >
                <Box sx={{ mr: "15px" }}>
                    <img src={Back} alt='Back' />
                </Box>
                <Typography  sx={{ color: "white",  width: "fit-content" }}>
                    Back</Typography>
            </Box>
        </>
    )
}

export default BackBtn