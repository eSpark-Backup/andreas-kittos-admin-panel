import React, { useEffect, useState } from 'react'
import BackBtn from '../buttons/backBtn'
import { Box, Divider, InputLabel, Stack, TextField, useMediaQuery } from '@mui/material'
import PageHeader from '../common/pageHeader'
import CustomButton from '../buttons/customButton'
import { useAddContentMutation } from '../../services/contents'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { isFormEmpty } from '../../pages/utils/helpers'

const AddStaticContent = () => {
    const navigate = useNavigate()
    const [addCotent, { isLoading, isSuccess, isError }] = useAddContentMutation()

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



    const handleSubmit = () => {
        if (isFormEmpty(content)) {
            toast.error("Please fill in all fields.");
        } else {
            addCotent(content)
        }
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success("Static Content added successfully");
            setContent({
                key: "",
                value: ""
            })
            navigate("/settings")
        }
        if (isError) {
            toast.error("An error occurred. Please try again");
        }
    }, [isSuccess, isError])

    const isSmallScreen = useMediaQuery('(max-width:768px)');

    return (
        <main className='main-container'>
            <BackBtn />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" }}>
                <Box sx={{ width: { xs: "100%", md: "100%", lg: "90%", xl: "65%" }, border: "1px solid #424755", borderRadius: "10px", pt: "25px", px: { xs: "4px", lg: "30px" }, minHeight: "70vh" }}>
                    <PageHeader title="Add Content" sx={{ textTransform: "capitalize" }} />
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>

                        <Stack direction={"column"} gap={1.7} sx={{ marginTop: "25px" }}>
                            <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Key:</InputLabel>
                            <TextField
                                name='key'
                                multiline
                                rows={2}
                                onChange={(e) => handleInputsChange("key", e.target.value)}
                                placeholder='Enter here...' />
                        </Stack>
                        <Stack direction={"column"} gap={1.7} sx={{ marginTop: "20px", minHeight: "400px" }}>
                            <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Value:</InputLabel>
                            <TextField
                                name='value'
                                multiline
                                rows={isSmallScreen ? 12 : 10}
                                onChange={(e) => handleInputsChange("value", e.target.value)}
                                placeholder='Enter here...' />
                        </Stack>
                        <Box sx={{ marginBottom: "10px" }}>
                            <CustomButton isLoading={isLoading} sx={{ width: "100%" }} onClick={handleSubmit}>Add Content</CustomButton>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </main>
    )
}

export default AddStaticContent
