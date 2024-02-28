import React, { useState } from 'react'
import BackBtn from '../buttons/backBtn'
import { Box, Divider, InputLabel, Stack, TextField } from '@mui/material'
import PageHeader from '../common/pageHeader'
import CustomButton from '../buttons/customButton'

const AddStaticContent = () => {
    const [content, setContent] = useState({
        key: "",
        value: ""
    })
    const handleInputsChange = (name, value) => {
        if (value) {
            setContent((prevData) => ({
                ...prevData,
                [name]: value
            }))
        }
    }
    return (
        <main className='main-container'>
            <BackBtn />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" }}>
                <Box sx={{ width: { xs: "100%", md: "100%", lg: "90%", xl: "70%" }, border: "1px solid #424755", height: "100%", borderRadius: "10px", py: "25px", px: { xs: "4px", lg: "30px" } }}>
                    <PageHeader title="Add Content" sx={{ textTransform: "capitalize" }} />
                    <Stack direction={"column"} gap={1.7} sx={{ marginTop: "10px" }}>
                        <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Key:</InputLabel>
                        <TextField
                            name='key'
                            multiline
                            rows={2}
                            onChange={(e) => handleInputsChange("key", e.target.value)}
                            placeholder='Enter here...' />
                    </Stack>
                    <Stack direction={"column"} gap={1.7} sx={{ marginTop: "10px" }}>
                        <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Value:</InputLabel>
                        <TextField
                            name='value'
                            multiline
                            rows={15}
                            onChange={(e) => handleInputsChange("value", e.target.value)}
                            placeholder='Enter here...' />
                    </Stack>
                    <CustomButton sx={{ width: "100%", marginTop: "20px" }} onClick={() => console.log(content)}>Add Content</CustomButton>
                </Box>

            </Box>
        </main>
    )
}

export default AddStaticContent
