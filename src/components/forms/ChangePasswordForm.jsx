import { Box, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import PageHeader from '../common/pageHeader'
import CustomButton from '../buttons/customButton';
import CustomInput from '../inputs/customInput';
import { settingsPasswordFields } from '../../constant';

const ChangePasswordForm = (e) => {

    const [form, setForm] = useState({
        currentPass: "",
        newPass: "",
        confirmPass: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }



    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column", paddingLeft: { xs: "10px", md: "20px" } }}>
            <Box>
                <PageHeader title="Password" />
                <Grid container >
                    {/* apply map  */}
                    <Grid item xs={12}>
                        <Stack direction={"column"} gap={1} sx={{ marginTop: "20px" }}>
                            {settingsPasswordFields.map((eachItem, index) => (
                                <CustomInput key={index} onInputChange={(e) => handleInputChange(e)} inputName={eachItem.id} label={eachItem.label} placeholder={eachItem.placeholder} type={eachItem.type} sx={{ width: { xs: "100%", md: "60%", lg: "40%" } }} />
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ marginBottom: { xs: "10px", md: "0px" }, marginTop: { xs: "30px", md: "0px" } }}>
                <CustomButton sx={{ width: "100%" }}>Update</CustomButton>
            </Box>
        </Box>
    )
}

export default ChangePasswordForm
