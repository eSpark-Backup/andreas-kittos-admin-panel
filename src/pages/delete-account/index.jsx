import { Box, Container, InputLabel, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ConfirmationModal, CustomButton } from '../../components'
import { logo } from '../../assets'

const DeleteAccount = () => {
    const [showModal, setShowModal] = useState(false)
    const [email, setEmail] = useState("")
    return (
        <>
            <header className='header2'>
                <img src={logo} alt="Logo" style={{ height: "50px", width: "50px" }} />
                <Typography sx={{ color: "white", pt:"5px" }}>MPOUGADA LAUNDRY SERVICE</Typography>
            </header>
            <Container sx={{ minHeight: "92vh", display: 'flex', justifyContent: "center", alignItems: "center" }}>
                <Box className="delete-box" border={!showModal ? "1px solid lightgrey" : "none"}>
                    <Typography sx={{ color: "#FFFFFF", fontWeight: "700", fontSize: "24px", textAlign: "center" }}>Delete Account</Typography>
                    <Typography sx={{ color: "#FFFFFF", fontWeight: "500", fontSize: "14px", textAlign: "center" }}>We're sorry to see you go! If you choose to delete your account, all your personal information, laundry preferences, and order history will be permanently removed from our system. Thank you for using our service, and we hope to serve you again in the future.</Typography>
                    <Stack direction={"column"} gap={1} px={1}>
                        <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "12px", sm: "14px" }, fontWeight: "500" }}>Email</InputLabel>
                        <TextField
                            name='email'
                            id="filled-hidden-label-normal"
                            placeholder="Enter email"
                            fullWidth
                            type='email'
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </Stack>
                    <CustomButton variant="outlined" color="primary" onClick={() => setShowModal(true)}>
                        Delete Account
                    </CustomButton>
                </Box>
                <ConfirmationModal open={showModal} onClose={() => setShowModal(false)} description={"Are You Sure To Delete Account?"} onConfirm={() => setShowModal(false)} acceptBtnText={"Delete"} cancelBtnText={"Cancel"} />
            </Container>
        </>
    )
}

export default DeleteAccount
