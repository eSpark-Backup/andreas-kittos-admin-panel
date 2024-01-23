import { Box, Grid, Modal, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../buttons/customButton'
import OrderDetailItem from '../common/orderDetailItem';

const ViewModal = ({ open, onClose, sx, description, descriptionTwo, onConfirm, acceptBtnText, cancelBtnText, data }) => {
    const {changedTo, date, time, value } = data || {}
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

                    <Typography sx={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 'bold' }}>{"Status Details"}</Typography>

                    <Grid container rowGap={2}>
                        <OrderDetailItem label={"Changed to:"} value={changedTo} />
                        <OrderDetailItem label={"Time:"} value={date} />
                        <OrderDetailItem label={"Date:"} value={time} />
                        <OrderDetailItem label={"Reason:"} value={value} />

                    </Grid>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '10px',
                                marginTop: '20px'
                            }}
                        >
                            <CustomButton onClick={onClose} sx={{ width: "48%" }}> {"Close"}</CustomButton>
                        </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default ViewModal