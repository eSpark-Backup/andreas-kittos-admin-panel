import React, { useEffect, useState } from 'react'
import BackBtn from '../buttons/backBtn'
import { Box, Divider, InputLabel, Stack, TextField } from '@mui/material'
import PageHeader from '../common/pageHeader'
import CustomButton from '../buttons/customButton'
import { useAddContentMutation, useGetContentQuery, useUpdateContentMutation } from '../../services/contents'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import { isFormEmpty } from '../../pages/utils/helpers'

const UpdateStaticContent = () => {
    const params = useParams()
    const navigate = useNavigate()
    const { data, isLoading: isContentLoading, refetch,isFetching } = useGetContentQuery(params.id)
    const [updateContent, { isLoading, isSuccess, isError }] = useUpdateContentMutation()

    useEffect(() => {
        refetch()
     }, [refetch])

    const [content, setContent] = useState({
        id: "",
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
            updateContent(content)
        }
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success("Static Content updated successfully");
            navigate("/settings")
        }
        if (isError) {
            toast.error("An error occurred. Please try again");
        }
    }, [isSuccess, isError])


    useEffect(() => {
        setContent({
            id: data?.data?.id,
            key: data?.data?.key,
            value: data?.data?.value
        })
    }
        , [data])


    if (isContentLoading || isFetching) {
        return (
            <Box sx={{ width: "80vw", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="loader"></div>
            </Box>
        )
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
                            value={content.key}
                            placeholder='Enter here...' />
                    </Stack>
                    <Stack direction={"column"} gap={1.7} sx={{ marginTop: "10px" }}>
                        <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Value:</InputLabel>
                        <TextField
                            name='value'
                            multiline
                            rows={15}
                            onChange={(e) => handleInputsChange("value", e.target.value)}
                            value={content.value}
                            placeholder='Enter here...' />
                    </Stack>
                    <CustomButton isLoading={isLoading} sx={{ width: "100%", marginTop: "20px" }} onClick={handleSubmit}>Update Content</CustomButton>
                </Box>

            </Box>
        </main>
    )
}

export default UpdateStaticContent
