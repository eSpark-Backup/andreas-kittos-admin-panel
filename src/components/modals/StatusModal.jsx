import { Box, Modal, Typography, Stack, InputLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import CustomButton from '../buttons/customButton'

const StatusModal = ({ open, onClose, sx, onConfirm, acceptBtnText, cancelBtnText, heading, label1, placeholder, label2, loading, onInputChange, defaultValue, limitWords }) => {
    const [words, setWords] = useState(0);
    const [inputText, setInputText] = useState(defaultValue || '');

    const handleInputChange = (e) => {
        const newText = e.target.value;
        const wordCount = newText.trim().split(/\s+/).filter(word => word.length > 0).length;

        if (!limitWords || wordCount <= 25) {
            setInputText(newText);
            setWords(wordCount);
            onInputChange(e);
        }
    };
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
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
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        alignItems: "center",
                    }}
                >
                    <Typography sx={{ color: "white", fontSize: "20px", fontWeight: "700" }}>{heading}</Typography>
                    <Stack direction={"column"} sx={{ width: "100%" }} rowGap={1}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap:"wrap" }}>
                            <Box>
                                <InputLabel sx={{ color: "#FFFFFF" }}>
                                    <span style={{ fontSize: "16px", fontWeight: "700" }}>{label1}</span>
                                    {label2 && <span style={{ fontSize: "14px", fontWeight: "300" }}>{label2}</span>}
                                </InputLabel>
                            </Box>
                            {limitWords && <Typography sx={{ color: "#FFFFFF" }}>Words Limit: {words} / 25</Typography>}
                        </Box>
                        <TextField
                            value={inputText}
                            placeholder={placeholder}
                            sx={{ width: "100%" }}
                            onChange={handleInputChange}
                        />
                    </Stack>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: '10px',
                            marginTop: '20px',
                            width: "100%"
                        }}
                    >
                        <CustomButton onClick={onClose} sx={{ width: "100%", backgroundColor: "transparent" }}>
                            {cancelBtnText}
                        </CustomButton>
                        <CustomButton onClick={onConfirm} sx={{ width: "100%" }} isLoading={loading}>
                            {acceptBtnText}
                        </CustomButton>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default StatusModal