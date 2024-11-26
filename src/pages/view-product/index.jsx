import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Box, Grid, IconButton, InputBase, InputLabel, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Euro from "../../assets/icons/euro.svg"
import { BackBtn, } from '../../components'
import productImg from "../../assets/images/washingMachine.svg"
import loader from "../../assets/icons/loader.gif"
import { useGetProductQuery } from '../../services/products'
import { TagsInput } from 'react-tag-input-component'
import { splitImagePath, splitTags } from '../utils/helpers'
import Checkbox from '@mui/material/Checkbox';


const ViewProduct = () => {
    const params = useParams()
    const { data, isLoading, isFetching } = useGetProductQuery(params.id, {
        refetchOnMountOrArgChange: true,
    })
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        tags: [],
        image: null,
        quantity: 0,
        category: "",
        isGeneral: false
    })

    useEffect(() => {
        const productData = data?.data[0]
        const filteredCategories = productData?.categoryProduct.filter(category => category?.category?.name !== "General");
        const product = {
            name: productData?.name,
            description: productData?.description,
            price: (productData?.price1 && productData?.price2) ? productData?.price1 + " - " + productData?.price2 : productData?.price1,
            tags: splitTags(productData?.tags),
            image: productData?.productImage ? productData?.productImage : loader,
            quantity: productData?.quantity,
            category: filteredCategories?.length > 0 ? filteredCategories[filteredCategories.length - 1]?.category?.name : "",
            isGeneral: productData?.isGeneral ? true : false
        };


        setProduct(product);

    }, [data])




    if (isLoading || isFetching) {
        return (
            <Box sx={{ width: "80vw", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="loader"></div>
            </Box>
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
                                    value={product?.name}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Stack>
                            <Stack direction={"column"} gap={1.7}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Description:</InputLabel>
                                <TextField
                                    value={product?.description}
                                    multiline
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    rows={3}
                                    placeholder='Enter here...' />
                            </Stack>
                            <Stack direction={"row"}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500", pt: "10px" }}>General</InputLabel>
                                <Checkbox color="secondary" disabled checked={product?.isGeneral} />
                            </Stack>
                            {
                                <Stack direction={"column"} gap={1.7}>
                                    <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Category:</InputLabel>
                                    <TextField
                                        id="filled-hidden-label-normal"
                                        placeholder="Enter here..."
                                        fullWidth
                                        value={product?.category}
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
                                            value={product?.price}
                                        />
                                        <IconButton color="primary" sx={{ borderLeft: "1px solid #424755", borderRadius: "0px 5px 5px 0px", backgroundColor: "#263043", height: "100%", ":hover": { backgroundColor: "#263043" }, width: "50px" }} aria-label="directions">
                                            <img src={Euro} alt='Euro' />
                                        </IconButton>
                                    </Paper>
                                </>
                            </Stack>

                            <Stack direction={"column"} gap={1.7}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Quantity:</InputLabel>
                                <TextField
                                    id="filled-hidden-label-normal"
                                    placeholder="Enter here..."
                                    fullWidth
                                    value={product?.quantity}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Stack>

                            <Stack direction={"column"} gap={1.7}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Tags:</InputLabel>
                                <TagsInput
                                    value={product?.tags}
                                    name="tags"
                                    classNames={"tags-input"}
                                    disabled={true}
                                />
                            </Stack>


                        </Grid>
                        <Grid item xs={12} md={6} xl={5.5} sx={{ marginTop: { xs: "10px", lg: "0px" } }}>
                            <Box sx={{ width: { xs: "100%", md: "100%", xl: "80%" }, height: "300px", border: "1px solid #424755", borderRadius: "5px", display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                <img src={product?.image} className='product-img' alt="Upload Icon" />
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
