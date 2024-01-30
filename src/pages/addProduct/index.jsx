import { Box, Button, Grid, IconButton, InputBase, InputLabel, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Euro from "../../assets/icons/euro.svg"
import Upload from "../../assets/images/Upload.svg"
import { TagsInput } from 'react-tag-input-component'
import { BackBtn, CustomButton } from '../../components'
import styled from '@emotion/styled'
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import checked from "../../assets/icons/checked.svg"
import notChecked from "../../assets/icons/notChecked.svg"


const AddProduct = () => {
    const [selected, setSelected] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

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
    };


    const handleCategoryChange = (event, newValue) => {
        setSelectedCategories(newValue);
    }

    const [productData, setProductData] = useState({
        productName: "",
        description: "",
        price: ""
    })
    const HandleInputsChange = (e) => {
        const { name, value } = e.target
        setProductData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const HandleSubmit = () => {
        const productObject = {
            productName: productData.productName,
            description: productData.description,
            price: productData.price,
            selectedCategories: selectedCategories,
            tags: selected,
        };
        console.log(productObject)

    }

    return (
        <main className='main-container'>
            <BackBtn />
            <Box sx={{ display: "flex", justifyContent: { xs: "", md: "center" }, alignItems: { md: "center" }, marginTop: "25px" }}>
                <Box sx={{ width: { xs: "100%", md: "100%", lg: "65%", xl: "55%" }, border: "1px solid #424755", height: "100%", borderRadius: "10px", py: "20px", px: { xs: "10px", md: "10px", lg: "30px" } }}>
                    <Typography sx={{ color: "#FFFFFF", fontWeight: "700", fontSize: "20px" }}>ADD PRODUCT</Typography>
                    <Grid container sx={{ marginTop: "30px" }} columnSpacing={10}>
                        <Grid item xs={12} md={6} xl={6.5} sx={{ display: "flex", flexDirection: "column", rowGap: "30px"}}>

                            <Stack direction={"column"} gap={1.7}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: "16px", fontWeight: "500" }}>Product name:</InputLabel>
                                <TextField
                                    id="filled-hidden-label-normal"
                                    placeholder="Enter here..."
                                    fullWidth
                                    name='productName'
                                    onChange={HandleInputsChange}
                                />
                            </Stack>
                            <Stack direction={"column"} gap={1.7}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: "16px", fontWeight: "500" }}>Description:</InputLabel>
                                <textarea
                                    onChange={HandleInputsChange}
                                    name="description" id="" cols="30" rows="4" style={{ background: "transparent", border: "1px solid #424755", borderRadius: "5px", padding: "10px 10px 10px 10px" }} placeholder='Enter here...'></textarea>
                            </Stack>
                            <Stack direction={"column"} gap={1.7}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: "16px", fontWeight: "500" }}>Select category:</InputLabel>
                                <Autocomplete
                                    multiple
                                    id="checkboxes-tags-demo"
                                    options={categoryOptions}
                                    onChange={handleCategoryChange}
                                    disableCloseOnSelect
                                    getOptionLabel={(option) => option.title}
                                    PaperComponent={({ children }) => (
                                        <Paper style={{ background: 'rgb(29, 38, 52)' }}>{children}</Paper>
                                    )}
                                    renderOption={(props, option, { selected }) => (
                                        <li {...props}>
                                            <Checkbox
                                                style={{ marginRight: 8 }}
                                                checked={selected}
                                                icon={<img src={notChecked} alt='Checked' />}
                                                checkedIcon={<img src={checked} alt='Box' />}
                                            />
                                            {option.title}

                                        </li>
                                    )}
                                    renderInput={(params) => (
                                        <TextField placeholder={
                                            selectedCategories.length === 0 ? "Select" : ""
                                        }  {...params} 
                                        />
                                    )}
                                />
                            </Stack>
                            <Stack direction={"column"} gap={1.7}>
                                <>
                                    <InputLabel sx={{ color: "#FFFFFF", fontSize: "16px", fontWeight: "500" }}>Price:</InputLabel>

                                    <Paper
                                        component="form"
                                        sx={{ display: 'flex', alignItems: 'center', border: "1px solid #424755", borderRadius: "5px", background: "transparent", height: "50px" }}
                                    >
                                        <InputBase
                                            sx={{ ml: 1, flex: 1, py: "5px", pl: "5px" }}
                                            placeholder="Enter here..."
                                            name='price'
                                            onChange={HandleInputsChange}
                                        />
                                        <IconButton color="primary" sx={{ borderLeft: "1px solid #424755", borderRadius: "0px 5px 5px 0px", backgroundColor: "#263043", height: "100%", ":hover": { backgroundColor: "#263043" }, width: "50px" }} aria-label="directions">
                                            <img src={Euro} alt='Euro' />
                                        </IconButton>
                                    </Paper>
                                </>
                            </Stack>
                            <Stack direction={"column"} gap={1.7}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: "16px", fontWeight: "500" }}>Tags:</InputLabel>
                                <TagsInput
                                    value={selected}
                                    onChange={setSelected}
                                    name="tags"
                                    placeHolder="Enter here..."
                                    classNames={"tags-input"}
                                    beforeAddValidate={(tag) => {
                                        if (tag.trim().startsWith("#")) {
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    }}
                                />
                            </Stack>

                        </Grid>
                        <Grid item xs={12} md={6} xl={5.5} sx={{ marginTop: { xs: "25px", md: "0px" } }}>
                            <Box sx={{ width: { xs: "100%", md: "100%", xl: "80%" }, height: "300px", border: "1px solid #424755", borderRadius: "5px", display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                <img src={Upload} className='product-img' alt="Upload Icon" />
                            </Box>
                            <CustomButton component="label" variant="contained" sx={{ marginTop: { xs: "25px", md: "15px" }, width: { xs: "100%", xl: "82%" } }}>
                                Upload product image
                                <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                            </CustomButton>
                        </Grid>
                    </Grid>
                    <CustomButton sx={{ width: '100%',  marginTop: { xs: "40px", md: "20px" }}} variant="outlined" color="primary" onClick={HandleSubmit}>
                        Add Product Now
                    </CustomButton>
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

export default AddProduct
