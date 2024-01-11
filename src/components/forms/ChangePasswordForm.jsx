import { Box, Grid, InputLabel, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import PageHeader from '../common/pageHeader'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CustomButton from '../buttons/customButton';

const ChangePasswordForm = () => {
    const [showPass, setShowPass] = useState(false)
    const [showNewPass, setShowNewPass] = useState(false)
    const [showConPass, setShowConPass] = useState(false)

    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column", paddingLeft: { xs: "0px", md: "20px" } }}>
            <Box>
                <PageHeader title="Password" />
                <Grid container sx={{ marginTop: "10px" }} rowGap={3}>
                    <Grid item xs={12}>
                        <Stack direction={"column"} gap={1}>
                            <InputLabel sx={{ color: "#FFFFFF", fontSize: "14px", fontWeight: "500" }}>Password</InputLabel>
                            <TextField
                                name='password'
                                id="filled-hidden-label-normal"
                                placeholder="Enter password"
                                type={showPass ? "text" : "password"}
                                InputProps={{
                                    endAdornment: showPass ? <VisibilityOffOutlinedIcon sx={{ cursor: "pointer", color: "#9E9EA4" }} onClick={() => setShowPass(!showPass)} /> : <VisibilityOutlinedIcon sx={{ cursor: "pointer", color: "#9E9EA4" }} onClick={() => setShowPass(!showPass)} />
                                }}
                                sx={{ width: { xs: "100%", md: "60%", lg: "40%" } }}

                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction={"column"} gap={1}>
                            <InputLabel sx={{ color: "#FFFFFF", fontSize: "14px", fontWeight: "500" }}>Password</InputLabel>
                            <TextField
                                name='password'
                                id="filled-hidden-label-normal"
                                placeholder="Enter password"
                                type={showPass ? "text" : "password"}
                                InputProps={{
                                    endAdornment: showPass ? <VisibilityOffOutlinedIcon sx={{ cursor: "pointer", color: "#9E9EA4" }} onClick={() => setShowPass(!showPass)} /> : <VisibilityOutlinedIcon sx={{ cursor: "pointer", color: "#9E9EA4" }} onClick={() => setShowPass(!showPass)} />
                                }}
                                sx={{ width: { xs: "100%", md: "60%", lg: "40%" } }}

                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction={"column"} gap={1}>
                            <InputLabel sx={{ color: "#FFFFFF", fontSize: "14px", fontWeight: "500" }}>Password</InputLabel>
                            <TextField
                                name='password'
                                id="filled-hidden-label-normal"
                                placeholder="Enter password"
                                type={showPass ? "text" : "password"}
                                InputProps={{
                                    endAdornment: showPass ? <VisibilityOffOutlinedIcon sx={{ cursor: "pointer", color: "#9E9EA4" }} onClick={() => setShowPass(!showPass)} /> : <VisibilityOutlinedIcon sx={{ cursor: "pointer", color: "#9E9EA4" }} onClick={() => setShowPass(!showPass)} />
                                }}
                                sx={{ width: { xs: "100%", md: "60%", lg: "40%" } }}

                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ marginBottom: { xs: "10px", md: "0px" } }}>
                <CustomButton sx={{ width: "100%" }}>Update</CustomButton>
            </Box>
        </Box>
    )
}

export default ChangePasswordForm
