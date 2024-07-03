import { Box, Grid, IconButton, InputBase, InputLabel, ListItemIcon, MenuItem, Paper, Select, Stack, TextField, Typography, useTheme } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Euro from "../../assets/icons/euro.svg"
import Upload from "../../assets/images/Upload.svg"
import { TagsInput } from 'react-tag-input-component'
import { BackBtn, CustomButton } from '../../components'
import { VisuallyHiddenInput } from '../../constant'
import { isFormEmpty } from '../utils/helpers'
import { toast } from 'react-toastify'
import { useAddProductMutation } from '../../services/products'
import { useNavigate } from 'react-router-dom'
import { useGetCategoriesQuery } from '../../services/categories'
import { IoIosArrowDown } from "react-icons/io";
import Checkbox from '@mui/material/Checkbox';



const AddProduct = () => {
    const navigate = useNavigate()
    const [addProduct, { isLoading, isSuccess, isError, error }] = useAddProductMutation()
    const { data: categories } = useGetCategoriesQuery();

    const fileInputRef = useRef(null);
    const [categoriesOptions, setCategoriesOptions] = useState([])
    const [productData, setProductData] = useState({
        name: "",
        description: "",
        price: "",
        tags: [],
        categoryIds: [],
        image: null,
        quantity: 0,
        isGeneral: false
    })


    const openFileInput = () => {
        fileInputRef.current.click();
    };

    const handleInputsChange = (name, value) => {
        if (value) {
            setProductData((prevData) => ({
                ...prevData,
                [name]: value
            }))
        }
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success("Product added successfully");
            setProductData({
                name: "",
                description: "",
                price: "",
                tags: [],
                categoryIds: [],
                image: null,
                quantity: 0
            })
            navigate("/products")
        }
        if (isError) {
            toast.error(error?.data?.message.includes("Duplicate entry")?"Duplicate Entry For Key Product Name":"An error occurred. Please try again");
        }
    }, [isSuccess, isError])

    const handleSubmit = () => {
        if (!productData?.name || productData.name === "") {
            toast.error("Product name is required");
            return;
        }
        if (!productData?.description || productData.description === "") {
            toast.error("Product description is required");
            return;
        }
        if (!productData?.categoryIds || productData.categoryIds.length <= 0) {
            toast.error("Categories field is required");
            return;
        }
        if (!productData?.price || productData.price === "") {
            toast.error("Product price is required");
            return;
        }
        if (Number(productData?.price) <= 0) {
            toast.error("Product price should be greater than 0");
            return;
        }
        if (isNaN(Number(productData?.price))) {
            toast.error("Invalid Price");
            return;
        }
        if (!productData?.quantity || Number(productData.quantity) <= 0) {
            toast.error("Product quantity is required");
            return;
        }
        if (isNaN(Number(productData?.quantity))) {
            toast.error("Invalid Quantity");
            return;
        }
        if (!productData?.tags || productData.tags.length <= 0) {
            toast.error("Tags field is required");
            return;
        }
        if (!productData?.image) {
            toast.error("Product image is required");
            return;
        }
    
        // If no errors, proceed with form submission
        const values = {
            ...productData,
            tags: productData.tags.map(tag => `${tag}`).join(','),
            file: productData.image,
            categoryIds: productData.categoryIds.id
        };
        const { categories, image, ...rest } = values;
    
        const formData = new FormData();
        for (const key in rest) {
            formData.append(key, rest[key]);
        }
    
        addProduct(formData);
    };
    
    

    const handleChange = (item) => {
        setProductData((prevData) => ({
            ...prevData,
            categoryIds: item
        }))
    };

    useEffect(() => {
        const categoryOptions = categories?.data?.map((item) => ({
            id: item.id,
            label: item.name
        }))

        setCategoriesOptions(categoryOptions)
    }
        , [categories])


    const CheckBoxHandler = (event) => {
        setProductData((prevData) => ({
            ...prevData,
            isGeneral: event.target.checked
        }))
    }


    return (
        <main className='main-container'>
            <BackBtn />
            <Box sx={{ display: "flex", justifyContent: { xs: "", md: "center" }, alignItems: { md: "center" }, marginTop: "25px" }}>
                <Box sx={{ width: { xs: "100%", md: "100%", lg: "65%", xl: "55%" }, border: "1px solid #424755", height: "100%", borderRadius: "10px", py: "20px", px: { xs: "10px", md: "10px", lg: "30px" } }}>
                    <Typography sx={{ color: "#FFFFFF", fontWeight: "700", fontSize: "20px" }}>ADD PRODUCT</Typography>
                    <Grid container sx={{ marginTop: "30px" }} columnSpacing={10}>
                        <Grid item xs={12} md={6} xl={6.5} sx={{ display: "flex", flexDirection: "column", rowGap: "30px" }}>

                            <Stack direction={"column"} gap={1.7}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Product name:</InputLabel>
                                <TextField
                                    id="filled-hidden-label-normal"
                                    placeholder="Enter here..."
                                    fullWidth
                                    name='name'
                                    onChange={(e) => handleInputsChange("name", e.target.value)}
                                />
                            </Stack>
                            <Stack direction={"column"} gap={1.7}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Description:</InputLabel>
                                <TextField
                                    name='description'
                                    multiline
                                    rows={3}
                                    onChange={(e) => handleInputsChange("description", e.target.value)}
                                    placeholder='Enter here...' />
                            </Stack>
                            <Stack direction={"row"}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500", pt: "10px" }}>General</InputLabel>
                                <Checkbox color="secondary" onChange={CheckBoxHandler} />
                            </Stack>
                            <Stack direction={"column"} gap={1.7}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Select category:</InputLabel>
                                {/* <Autocomplete
                                    popupIcon={<IoChevronDown className='dropdown-icon' fontSize={15} />}
                                    multiple
                                    id="checkboxes-tags-demo"
                                    options={categoryOptions}
                                    onChange={(_, e) => handleInputsChange("categories", e)}
                                    disableCloseOnSelect
                                    getOptionLabel={(option) => option?.name}
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
                                            {option.name}

                                        </li>
                                    )}
                                    renderInput={(params) => (
                                        <TextField placeholder={
                                            productData?.categories?.length === 0 ? "Select" : ""
                                        }  {...params}
                                        />
                                    )}
                                /> */}
                                <Select
                                    IconComponent={IoIosArrowDown}
                                    className='change-backdrop'
                                    displayEmpty
                                    // onChange={handleChange}
                                    value={productData?.categoryIds?.label}
                                    renderValue={(selected) => {
                                        if (selected?.length === 0) {
                                            return <em style={{ color: "#9E9EA4" }}>Select</em>;
                                        }

                                        return selected;
                                    }}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    {categoriesOptions?.map((item) => (
                                        <MenuItem
                                            key={item.id}
                                            value={item.label}
                                            onClick={() => { handleChange(item) }}
                                        >
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Stack>
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
                                            value={productData.price}
                                            type='number'
                                            name='price'
                                            onChange={(e) => handleInputsChange("price", e.target.value)}
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
                                    name='quantity'
                                    onChange={(e) => handleInputsChange("quantity", e.target.value)}
                                />
                            </Stack>
                            <Stack direction={"column"} gap={1.7}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Tags:</InputLabel>
                                <TagsInput
                                    value={productData?.tags}
                                    onChange={(e) => handleInputsChange("tags", e)}
                                    name="tags"
                                    placeHolder="Enter tags starting with # and press Enter to create a tag"
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
                                <img src={productData?.image ? URL.createObjectURL(productData?.image) : Upload} className='product-img' alt="Upload Icon" />
                            </Box>
                            <CustomButton onClick={openFileInput} component="label" variant="contained" sx={{ marginTop: { xs: "25px", md: "15px" }, width: { xs: "100%", xl: "82%" } }}>
                                Upload product image
                                <VisuallyHiddenInput ref={fileInputRef} accept='image/*' type="file" onChange={(e) => handleInputsChange("image", e.target.files[0])} />
                            </CustomButton>
                        </Grid>
                    </Grid>
                    <CustomButton isLoading={isLoading} sx={{ width: '100%', marginTop: { xs: "40px", md: "20px" } }} variant="outlined" color="primary" onClick={handleSubmit}>
                        Add Product Now
                    </CustomButton>
                </Box>
            </Box>
        </main>
    )
}



export default AddProduct
