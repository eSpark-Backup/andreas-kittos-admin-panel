import React, { useEffect, useState } from 'react'
import BackBtn from '../buttons/backBtn'
import { Box, Divider, InputLabel, Stack, TextField, useMediaQuery } from '@mui/material'
import PageHeader from '../common/pageHeader'
import CustomButton from '../buttons/customButton'
import { useGetContentQuery } from '../../services/contents'
import { useParams } from 'react-router-dom'
import { useUpdateContent } from '../../hooks'

const UpdateStaticContent = () => {
    const params = useParams()
    const { data, isLoading: isContentLoading, refetch, isFetching } = useGetContentQuery(params.id)
    const { content, setContent, handleInputsChange, handleSubmit, isLoading } = useUpdateContent()
    const isSmallScreen = useMediaQuery('(max-width:768px)');
    const rows = isSmallScreen ? 20 : 12;


    useEffect(() => {
        refetch()
    }, [refetch])

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
            <Box sx={{ width: {xs:"100vw",md:"80vw"}, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="loader"></div>
            </Box>
        )
    }



    return (
        <main className='main-container'>
            <BackBtn />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" }}>
                <Box sx={{ width: { xs: "100%", md: "100%", lg: "90%", xl: "70%" }, border: "1px solid #424755", height: "100%", borderRadius: "10px", pt: "25px", px: { xs: "4px", lg: "30px" }, minHeight: "70vh" }}>
                    <PageHeader title="Update Content" sx={{ textTransform: "capitalize" }} />
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                        <Stack direction={"column"} gap={1.7} sx={{ marginTop: "25px" }}>
                            <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Key:</InputLabel>
                            <TextField
                                name='key'
                                multiline
                                rows={2}
                                onChange={(e) => handleInputsChange("key", e.target.value)}
                                value={content.key}
                                placeholder='Enter here...' />
                        </Stack>
                        <Stack direction={"column"} gap={1.7} sx={{ marginTop: "20px", minHeight: "400px" }}>
                            <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Value:</InputLabel>
                            <TextField
                                name='value'
                                multiline
                                rows={rows}
                                onChange={(e) => handleInputsChange("value", e.target.value)}
                                value={content.value}
                                placeholder='Enter here...' />
                        </Stack>
                        <Box sx={{marginBottom:"10px"}}>
                            <CustomButton isLoading={isLoading} sx={{ width: "100%", marginTop: "20px" }} onClick={handleSubmit}>Update Content</CustomButton>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </main>
    )
}

export default UpdateStaticContent
