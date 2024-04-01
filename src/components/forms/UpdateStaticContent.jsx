import React, { useEffect, useState, useRef } from 'react'
import BackBtn from '../buttons/backBtn'
import { Box, Divider, InputLabel, Stack, TextField } from '@mui/material'
import PageHeader from '../common/pageHeader'
import CustomButton from '../buttons/customButton'
import { useGetContentQuery } from '../../services/contents'
import { useParams } from 'react-router-dom'
import { useUpdateContent } from '../../hooks'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const UpdateStaticContent = () => {
    const params = useParams()
    const { data, isLoading: isContentLoading, refetch, isFetching } = useGetContentQuery(params.id)
    const { content, setContent, handleInputsChange, handleSubmit, isLoading } = useUpdateContent()
    const quillRef = useRef(null);


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
            <Box sx={{ width: "80vw", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="loader"></div>
            </Box>
        )
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const quill = quillRef.current.getEditor();
            const selection = quill.getSelection();
            const cursorPosition = selection ? selection.index : 0;
            quill.insertText(cursorPosition, '\n', 'user');
            quill.setSelection(cursorPosition + 1);
            event.preventDefault(); // Prevent default behavior of Enter key
        }
    };


    return (
        <main className='main-container'>
            <BackBtn />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" }}>
                <Box sx={{ width: { xs: "100%", md: "100%", lg: "90%", xl: "70%" }, border: "1px solid #424755", height: "100%", borderRadius: "10px", py: "25px", px: { xs: "4px", lg: "30px" } }}>
                    <PageHeader title="Update Content" sx={{ textTransform: "capitalize" }} />
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
                        <ReactQuill
                            style={{minHeight:"300px", border:"1px solid #424755",color:"white",borderRadius:"4px"}}
                            value={content.value}
                            ref={quillRef}
                            onChange={(value) => handleInputsChange("value", value)}
                            modules={{
                                toolbar: [
                                    [{ header: '1' }, { header: '2' }],
                                    [{ size: [] }],
                                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                    [{ list: 'ordered' }, { list: 'bullet' }],
                                    ['clean'],
                                ],
                            }}
                            placeholder='Enter here...'
                            onKeyDown={handleKeyDown}
                        />

                    </Stack>
                    <CustomButton isLoading={isLoading} sx={{ width: "100%", marginTop: "20px" }} onClick={handleSubmit}>Update Content</CustomButton>
                </Box>

            </Box>
        </main>
    )
}

export default UpdateStaticContent
