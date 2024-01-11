import { Box, Grid, InputLabel, Stack, TextField } from '@mui/material'
import React from 'react'
import PageHeader from '../common/pageHeader'

const InformationForm = () => {

    const formData = [
        { label: 'First Name', value: 'Jhon', name: 'text', type: 'text' },
        { label: 'Last Name', value: 'Doe', name: 'text', type: 'text' },
        { label: 'Full Name', value: 'John Doe', name: 'text', type: 'text' },
        { label: 'Email', value: 'johndoe123@gmail.com', name: 'email', type: 'email' },
        { label: 'Phone', value: '0123456789', name: 'phone', type: 'tel' },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        // Your form submission logic here
    };



    return (
        <Box>
            <PageHeader title="Information" />

            <br />

            <Box>
                <form onSubmit={handleSubmit}>
                    <Grid container gap={{ xs: 2, md: 3, lg: 5 }}>
                        {formData.map((field, index) => (
                            <Grid item xs={12} lg={5.5} key={index}>
                                <Stack direction="column" gap={1}>
                                    <InputLabel sx={{ color: '#ffffff', fontSize: '14px', fontWeight: '500' }}>
                                        {field.label}:
                                    </InputLabel>
                                    <TextField
                                        disabled
                                        name={field.name}
                                        id={`filled-hidden-label-${index}`}
                                        value={field.value}
                                        fullWidth
                                        type={field.type}
                                    />
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                </form>
            </Box>
        </Box>
    )
}

export default InformationForm