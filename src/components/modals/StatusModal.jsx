import { Box, Modal, Typography, Stack, InputLabel, TextField } from '@mui/material'
import React from 'react'
import { warning } from '../../assets'
import CustomButton from '../buttons/customButton'
import CustomInput from '../inputs/customInput'

const StatusModal = ({ open, onClose, sx, onConfirm, acceptBtnText, cancelBtnText, heading, label, placeholder }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Box sx={
                {
                    ...sx,
                    backgroundColor: '#1D2634',
                    borderRadius: '5px',
                    padding: '20px',
                    position: 'absolute',
                    boxShadow: 2,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '250px', md: '400px' },
                    p: 4,
                    '&:focus': {
                        outline: 'none',
                        border: 'none'
                    }

                }
            }>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        alignItems:"center",
                    }}
                >
                    <Typography sx={{color:"white", fontSize:"20px", fontWeight:"700"}}>{heading}</Typography>
                    <Stack direction={"column"} sx={{width:"100%"}} rowGap={1}>
                        <InputLabel sx={{ color: "#FFFFFF", fontSize: "16px", fontWeight: "500" }}>{label}</InputLabel>
                        <TextField placeholder={placeholder} sx={{width:"100%"}}/>
                    </Stack>
                    {/* <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px'

                        }}
                    >
                        <Box>
                            <img src={warning} alt="confirmation" />
                        </Box>

                        <Box>
                            <Typography variant="h6" sx={{ color: "white" }} component="div">
                                Warning!
                            </Typography>
                        </Box>
                    </Box> */}

                    {/* <Box>
                        <Typography sx={{ color: "white", textAlign: "center" }}>
                            {description}
                        </Typography>
                        {
                            descriptionTwo &&
                            <Typography sx={{ color: "white", textAlign: "center" }}>
                                {descriptionTwo}
                            </Typography>
                        }
                    </Box> */}

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: '10px',
                            marginTop: '20px',
                            width:"100%"
                        }}
                    >
                        <CustomButton onClick={onClose} sx={{ width: "100%", backgroundColor:"transparent" }}> {cancelBtnText}</CustomButton>
                        <CustomButton onClick={onConfirm} sx={{ width: "100%" }}> {acceptBtnText}</CustomButton>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default StatusModal