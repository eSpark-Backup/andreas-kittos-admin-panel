import { Box, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import PageHeader from '../common/pageHeader'
import CustomButton from '../buttons/customButton';
import CustomInput from '../inputs/customInput';
import { settingsPasswordFields } from '../../constant';
import { toast } from 'react-toastify';
import { useChangePasswordMutation } from '../../services/personalInfo';

const ChangePasswordForm = (e) => {
    const [credentials, { data, isLoading }] = useChangePasswordMutation()

    const [form, setForm] = useState({
        currentPass: "",
        newPass: "",
        confirmPass: ""
    })

    if (isLoading) {
        return (
            <Box sx={{ width: "80vw", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="loader"></div>
            </Box>
        )
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }
    const SubmitHandler = () => {
        if (form.confirmPass === "" || form.currentPass === "" || form.newPass === "") {
            toast.error("Please fill all fields")
        }
        else if (form.newPass !== form.confirmPass) {
            toast.error("Password didn't match")
        }
        else {
            credentials({ oldPassword: form.currentPass, newPassword: form.newPass })
            toast.success("Password Changed Successfully")
        }
    }



    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column", padding: { xs: "0px 10px", md: "0px 20px" }, marginTop: { xs: "20px", md: "20px" } }}>
            <Box>
                <PageHeader title="Password" sx={{ textTransform: "capitalize" }} />
                <Grid container >
                    {/* apply map  */}
                    <Grid item xs={12}>
                        <Stack direction={"column"} gap={2} sx={{ marginTop: "25px" }}>
                            {settingsPasswordFields.map((eachItem, index) => (
                                <CustomInput changePasswordForm={true} key={index} onInputChange={(e) => handleInputChange(e)} inputName={eachItem.name} label={eachItem.label} placeholder={eachItem.placeholder} type={eachItem.type} sx={{ width: { xs: "100%", md: "60%", lg: "40%" } }} />
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ marginBottom: { xs: "10px", md: "0px" }, marginTop: { xs: "30px", md: "0px" } }}>
                <CustomButton onClick={SubmitHandler} sx={{ width: "100%" }}>Update</CustomButton>
            </Box>
        </Box>
    )
}

export default ChangePasswordForm
