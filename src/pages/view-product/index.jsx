import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Box, Grid, IconButton, InputBase, InputLabel, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Euro from "../../assets/icons/euro.svg"
import { BackBtn, } from '../../components'
import productImg from "../../assets/images/washingMachine.svg"
import { useGetProductQuery } from '../../services/products'

const ViewProduct = () => {
    const params = useParams()
    const { data, isloading } = useGetProductQuery(params.id)
    console.log({ params })

    // useEffect(() => {

    // }
    // , [data])
    if (isloading) {
        return (
            <div class="loader"></div>
        )
    }

    return (
        <main className='main-container'>
            <BackBtn />
            <Box sx={{ display: "flex", justifyContent: { xs: "", md: "center" }, alignItems: { xs: "", md: "center" }, marginTop: "25px" }}>
                <Box sx={{ width: { xs: "100%", md: "100%", lg: "65%", xl: "55%" }, border: "1px solid #424755", height: "100%", borderRadius: "10px", py: "20px", px: { xs: "10px", md: "10px", lg: "30px" } }}>
                    <Typography sx={{ color: "#FFFFFF", fontWeight: "700", fontSize: "20px" }}>PRODUCT</Typography>
                    <Grid container sx={{ marginTop: "30px" }} columnSpacing={10}>
                        <Grid item xs={12} md={6} xl={6.5} sx={{ display: "flex", flexDirection: "column", rowGap: "30px" }}>
                            <Stack direction={"column"} gap={1.7}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Product name:</InputLabel>
                                <TextField
                                    id="filled-hidden-label-normal"
                                    placeholder="Enter here..."
                                    fullWidth
                                    defaultValue={"Laundry-Dry-Ironing (per kilo)"}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Stack>
                            <Stack direction={"column"} gap={1.7}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Description:</InputLabel>
                                <TextField
                                    defaultValue={"Laundry-Dry-Ironing (per kilo), Laundry-Dry-Ironing (per kilo) Feather Duvet King – Cleaning"}
                                    multiline
                                    InputProps={true}
                                    rows={3}
                                    placeholder='Enter here...' />
                            </Stack>
                            {
                                <Stack direction={"column"} gap={1.7}>
                                    <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Select Category:</InputLabel>
                                    <TextField
                                        id="filled-hidden-label-normal"
                                        placeholder="Enter here..."
                                        fullWidth
                                        defaultValue={"Laundry"}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Stack>
                            }


                            <Stack direction={"column"} gap={1.7}>
                                <>
                                    <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Price:</InputLabel>

                                    <Paper
                                        component="form"
                                        sx={{ display: 'flex', alignItems: 'center', border: "1px solid #424755", borderRadius: "5px", background: "transparent", height: "50px" }}
                                    >
                                        <InputBase
                                            sx={{ ml: 1, flex: 1, py: "5px", pl: "5px" }}
                                            placeholder="Enter here..."
                                            defaultValue={"9.00"}
                                            readOnly={true}
                                        />
                                        <IconButton color="primary" sx={{ borderLeft: "1px solid #424755", borderRadius: "0px 5px 5px 0px", backgroundColor: "#263043", height: "100%", ":hover": { backgroundColor: "#263043" }, width: "50px" }} aria-label="directions">
                                            <img src={Euro} alt='Euro' />
                                        </IconButton>
                                    </Paper>
                                </>
                            </Stack>


                        </Grid>
                        <Grid item xs={12} md={6} xl={5.5} sx={{ marginTop: { xs: "10px", lg: "0px" } }}>
                            <Box sx={{ width: { xs: "100%", md: "100%", xl: "80%" }, height: "300px", border: "1px solid #424755", borderRadius: "5px", display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                <img src={productImg} className='product-img' alt="Upload Icon" />
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Box>
        </main>
    )
}

const categoryOptions = [
    { title: 'Laundry' },
    { title: 'Ironing' },
    { title: 'Dry Cleaning' },
];

export default ViewProduct
