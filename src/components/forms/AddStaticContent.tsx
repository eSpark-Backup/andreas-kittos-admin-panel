import React, { useEffect, useState,useRef } from 'react';
import BackBtn from '../buttons/backBtn';
import { Box, InputLabel, Stack, TextField } from '@mui/material';
import PageHeader from '../common/pageHeader';
import CustomButton from '../buttons/customButton';
import { useAddContentMutation } from '../../services/contents';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { isFormEmpty } from '../../pages/utils/helpers';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddStaticContent = () => {
    const navigate = useNavigate();
    const [addContent, { isLoading, isSuccess, isError }] = useAddContentMutation();
    const quillRef = useRef(null);

    const [content, setContent] = useState({
        key: '',
        value: '',
    });

    const handleChange = (field, value) => {
        setContent((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSubmit = () => {
        if (isFormEmpty(content)) {
            toast.error('Please fill in all fields.');
        } else {
            addContent(content);
        }
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success('Static Content added successfully');
            setContent({
                key: '',
                value: '',
            });
            navigate('/settings');
        }
        if (isError) {
            toast.error('An error occurred. Please try again');
        }
    }, [isSuccess, isError]);

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

    const handleChangeQuill = (value) => {
        setContent((prevData) => ({
            ...prevData,
            value: value,
        }));
    };
    

    return (
        <main className='main-container'>
            <BackBtn />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '10px',
                }}
            >
                <Box
                    sx={{
                        width: { xs: '100%', md: '100%', lg: '90%', xl: '70%' },
                        border: '1px solid #424755',
                        height: '100%',
                        borderRadius: '10px',
                        py: '25px',
                        px: { xs: '4px', lg: '30px' },
                    }}
                >
                    <PageHeader title='Add Content' sx={{ textTransform: 'capitalize' }} />
                    <Stack direction={'column'} gap={1.7} sx={{ marginTop: '10px' }}>
                        <InputLabel
                            sx={{
                                color: '#FFFFFF',
                                fontSize: { xs: '14px', sm: '16px' },
                                fontWeight: '500',
                            }}
                        >
                            Key:
                        </InputLabel>
                        <TextField
                            name='key'
                            multiline
                            rows={2}
                            onChange={(e) => handleChange("key", e.target.value)}
                            placeholder='Enter here...' />
                    </Stack>
                    <Stack direction={'column'} gap={1.7} sx={{ marginTop: '10px' }}>
                        <InputLabel
                            sx={{
                                color: '#FFFFFF',
                                fontSize: { xs: '14px', sm: '16px' },
                                fontWeight: '500',
                            }}
                        >
                            Value:
                        </InputLabel>
                        <ReactQuill
                            ref={quillRef}
                            value={content.value}
                            onChange={handleChangeQuill}
                            style={{minHeight:"300px", border:"1px solid #424755",color:"white",borderRadius:"4px"}}
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
                    <CustomButton
                        isLoading={isLoading}
                        sx={{ width: '100%', marginTop: '50px' }}
                        onClick={handleSubmit}
                    >
                        Add Content
                    </CustomButton>
                </Box>
            </Box>
        </main>
    );
};

export default AddStaticContent;