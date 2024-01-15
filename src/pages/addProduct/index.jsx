import { Box, Button, Grid, IconButton, InputBase, InputLabel, MenuItem, Paper, Select, Stack, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Back from "../../assets/icons/Back.svg"
import Up from "../../assets/icons/Up.svg"
import Euro from "../../assets/icons/euro.svg"
import Upload from "../../assets/images/Upload.svg"
import { TagsInput } from 'react-tag-input-component'
import { CustomButton } from '../../components'
import styled from '@emotion/styled'


const AddProduct = () => {
    const [selected, setSelected] = useState([]);

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file)
      };

    return (
        <main className='main-container'>
            <Typography sx={{ color: "white", cursor: "pointer", width: "fit-content" }}><img src={Back} alt='Back' /> Back</Typography>
            <Box sx={{ display: "flex", justifyContent: {xs:"", md:"center"}, alignItems: {xs:"", md:"center"}, marginTop: "20px"}}>
                <Box sx={{ width: {xs:"100%", md:"100%", lg:"65%", xl:"55%"}, border: "1px solid #424755", height: "100%", borderRadius: "10px", py: "20px", px: {xs:"5px", md:"10px", lg:"30px"} }}>
                    <Typography sx={{ color: "#FFFFFF", fontWeight: "700" }}>ADD PRODUCT</Typography>
                    <Grid container sx={{ marginTop: "30px" }} columnSpacing={10}>
                        <Grid item xs={12} md={6} xl={6.5} sx={{ display: "flex", flexDirection: "column", rowGap: "30px" }}>

                            <Stack direction={"column"} gap={1}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: "14px", fontWeight: "500" }}>Product name:</InputLabel>
                                <TextField
                                    id="filled-hidden-label-normal"
                                    placeholder="Enter here..."
                                    fullWidth
                                />
                            </Stack>
                            <Stack direction={"column"} gap={1}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: "14px", fontWeight: "500" }}>Description:</InputLabel>
                                <textarea name="" id="" cols="30" rows="4" style={{ background: "transparent", border: "1px solid #424755", borderRadius: "5px", padding: "10px 10px 10px 10px" }} placeholder='Enter here...'></textarea>
                            </Stack>
                            <Stack direction={"column"} gap={1}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: "14px", fontWeight: "500" }}>Select category:</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    label="Age"
                                    IconComponent={() => (
                                        <img
                                            src={Up}
                                            alt="Dropdown Icon"
                                            style={{ marginRight: "12px", height: "15px", width: "15px", cursor: "pointer" }}
                                        />
                                    )}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </Stack>
                            <Stack direction={"column"} gap={1}>
                                <>
                                    <InputLabel sx={{ color: "#FFFFFF", fontSize: "14px", fontWeight: "500" }}>Price:</InputLabel>

                                    <Paper
                                        component="form"
                                        sx={{ display: 'flex', alignItems: 'center', border: "1px solid #424755", borderRadius: "5px", background: "transparent", height: "50px" }}
                                    >
                                        <InputBase
                                            sx={{ ml: 1, flex: 1, py: "5px", pl: "5px" }}
                                            placeholder="Enter here..."
                                        />
                                        <IconButton color="primary" sx={{ borderLeft: "1px solid #424755", borderRadius: "0px 5px 5px 0px", backgroundColor: "#263043", height: "100%", ":hover": { backgroundColor: "#263043" }, width: "50px" }} aria-label="directions">
                                            <img src={Euro} alt='Euro' />
                                        </IconButton>
                                    </Paper>
                                </>
                            </Stack>
                            <Stack direction={"column"} gap={1}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: "14px", fontWeight: "500" }}>Tags:</InputLabel>
                                <TagsInput
                                    value={selected}
                                    onChange={setSelected}
                                    name="tags"
                                    placeHolder="Enter here..."
                                    classNames={"tags-input"}
                                    beforeAddValidate={(tag) => {
                                        // Custom validation logic
                                        if (tag.trim().startsWith("#")) {
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    }}
                                />
                            </Stack>

                        </Grid>
                        <Grid item xs={12} md={6} xl={5.5} sx={{marginTop:{xs:"10px", lg:"0px"}}}>
                            <Box sx={{ width: { xs: "100%", md: "100%", xl: "80%" }, height: "300px", border: "1px solid #424755", borderRadius: "5px", display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                <img src={Upload} alt="Upload Icon" />
                            </Box>
                            <Button component="label" variant="contained" sx={{ marginTop: "10px", width: {xs:"100%", xl:"82%"} }}>
                                Upload file
                                <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                            </Button>
                        </Grid>
                    </Grid>
                    <CustomButton sx={{ width: '100%', marginTop: "20px" }} variant="outlined" color="primary" >
                        Add Product Now
                    </CustomButton>
                </Box>
            </Box>
        </main>
    )
}

export default AddProduct
