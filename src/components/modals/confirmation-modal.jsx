import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import { warning } from '../../assets'
import CustomButton from '../buttons/customButton'

const ConfirmationModal = ({ open, onClose, sx, description, descriptionTwo, onConfirm, acceptBtnText, cancelBtnText,isLoading }) => {
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
                        gap: '20px'
                    }}
                >
                    <Box
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
                            <Typography variant="h6" sx={{ color: "white", fontSize:"20px" }} component="div">
                                Warning!
                            </Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Typography sx={{ color: "white", textAlign: "center" }}>
                            {description}
                        </Typography>
                        {
                            descriptionTwo &&
                            <Typography sx={{ color: "white", textAlign: "center" }}>
                                {descriptionTwo}
                            </Typography>
                        }
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: '10px',
                            marginTop: '20px'
                        }}
                    >
                        <CustomButton onClick={onClose} sx={{ width: "48%" }}> {cancelBtnText}</CustomButton>
                        <CustomButton isLoading={isLoading} onClick={onConfirm} sx={{ width: "48%" }}> {acceptBtnText}</CustomButton>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default ConfirmationModal