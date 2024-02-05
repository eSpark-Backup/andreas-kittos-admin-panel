import { Box, Grid, IconButton, InputBase, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Euro from "../../assets/icons/euro.svg"
import Upload from "../../assets/images/Upload.svg"
import { TagsInput } from 'react-tag-input-component'
import { BackBtn, CustomButton } from '../../components'
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import checked from "../../assets/icons/checked.svg"
import notChecked from "../../assets/icons/notChecked.svg"
import { IoChevronDown } from "react-icons/io5";
import { VisuallyHiddenInput } from '../../constant'
import productImg from "../../assets/images/washingMachine.svg"
import { isFormEmpty, splitImagePath, splitTags } from '../utils/helpers'
import { toast } from 'react-toastify'
import { useGetProductQuery, useUpdateProductMutation } from '../../services/products'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetCategoriesQuery } from '../../services/categories'


const UpdateProduct = () => {
    const params = useParams()
    const { data, isLoading: isProductLoading } = useGetProductQuery(params.id)
    const navigate = useNavigate()
    const fileInputRef = useRef(null);
    const [updateProduct, { isLoading, isSuccess, isError }] = useUpdateProductMutation()
    const { data: categories, } = useGetCategoriesQuery();
    const [categoriesOptions, setCategoriesOptions] = useState([])

    const [productData, setProductData] = useState({
        id: "",
        name: "",
        description: "",
        price: "",
        tags: [],
        image: null,
        uploadImage: null,
        categories: [],
        quantity: 0,
        categoryIds: {
            id: "",
            label: ""
        },
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




    const handleSubmit = () => {
        console.log("productData", productData)
        if (isFormEmpty(productData)) {
            toast.error("Please fill in all fields.");
        } else {
            // remove productData.categories

            const values = {
                ...productData,
                tags: productData?.tags?.map(tag => `'${tag}'`).join(','),
                file: productData.uploadImage ? productData.uploadImage : productData.image,
                categoryIds: productData.categoryIds.id
            }
            const { categories, image, ...rest } = values

            const formData = new FormData();
            for (const key in rest) {
                formData.append(key, rest[key])
            }

            updateProduct(values)

        }
    }

    const handleChange = (item) => {
        setProductData((prevData) => ({
            ...prevData,
            categoryIds: item
        }))
    };

    useEffect(() => {
        const productData = data?.data[0]
        const product = {
            id: productData?.id,
            name: productData?.name,
            description: productData?.description,
            price: productData?.price,
            quantity: productData?.quantity,
            tags: splitTags(productData?.tags),
            categoryIds: {
                id: productData?.categoryProduct[0]?.category?.id,
                label: productData?.categoryProduct[0]?.category?.name,
            },
            image: productData?.productImage ? splitImagePath(productData?.productImage) : productImg
        };

        console.log(product, "productData");
        console.log(productData, "productData1");
        console.log(categories, "categories");
        setProductData(product);

    }, [data, categories])

    useEffect(() => {
        const categoryOptions = categories?.data?.map((item) => ({
            id: item.id,
            label: item.name
        }))

        setCategoriesOptions(categoryOptions)
    }
        , [categories])

    useEffect(() => {
        if (isSuccess) {
            toast.success("Product updated successfully");
        }
        if (isError) {
            toast.error("An error occurred. Please try again");
        }
    }, [isSuccess, isError])


    useEffect(() => {
        console.log("productData", productData);
    }, [productData])


    if (isProductLoading) {
        return (
            <Box sx={{ width: "80vw", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="loader"></div>
            </Box>
        )
    }


    return (
        <main className='main-container'>
            <BackBtn />
            <Box sx={{ display: "flex", justifyContent: { xs: "", md: "center" }, alignItems: { md: "center" }, marginTop: "25px" }}>
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
                                    name='name'
                                    value={productData.name}
                                    onChange={(e) => handleInputsChange("name", e.target.value)}
                                />
                            </Stack>
                            <Stack direction={"column"} gap={1.7}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Description:</InputLabel>
                                <TextField
                                    name='description'
                                    multiline
                                    rows={3}
                                    value={productData.description}
                                    onChange={(e) => handleInputsChange("description", e.target.value)}
                                    placeholder='Enter here...' />
                            </Stack>
                            {/* <Stack direction={"column"} gap={1.7}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Select category:</InputLabel>
                                <Autocomplete
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
                                />
                            </Stack> */}
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
                                    displayEmpty
                                    // onChange={handleChange}
                                    value={productData?.categoryIds?.label || ""}
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
                                    value={productData?.quantity}
                                    onChange={(e) => handleInputsChange("quantity", e.target.value)}
                                />
                            </Stack>
                            <Stack direction={"column"} gap={1.7}>
                                <InputLabel sx={{ color: "#FFFFFF", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Tags:</InputLabel>
                                <TagsInput
                                    value={productData?.tags}
                                    onChange={(e) => handleInputsChange("tags", e)}
                                    name="tags"
                                    placeHolder="start with #"
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
                                <img src={!productData.uploadImage ? productData?.image :
                                    URL.createObjectURL(productData.uploadImage)
                                } className='product-img' alt="Upload Icon" />
                            </Box>
                            <CustomButton onClick={openFileInput} component="label" variant="contained" sx={{ marginTop: { xs: "25px", md: "15px" }, width: { xs: "100%", xl: "82%" } }}>
                                Upload product image
                                <VisuallyHiddenInput ref={fileInputRef} accept='image/*' type="file" onChange={(e) => handleInputsChange("uploadImage", e.target.files[0])} />
                            </CustomButton>
                        </Grid>
                    </Grid>
                    <CustomButton isLoading={isLoading} sx={{ width: '100%', marginTop: { xs: "40px", md: "20px" } }} variant="outlined" color="primary" onClick={handleSubmit}>
                        Update Now
                    </CustomButton>
                </Box>
            </Box>
        </main>
    )
}


export default UpdateProduct
