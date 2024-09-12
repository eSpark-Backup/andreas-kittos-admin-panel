import { Box, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { ConfirmationModal, CustomButton, CustomInput, MenuTab, PageHeader, SearchInput, Table } from "../../components";
import { columns } from "../../columns/products";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useAddCategoryMutation, useGetCategoriesQuery } from "../../services/categories";
import { useDeleteProductMutation } from "../../services/products";
import { useProducts } from "../../hooks";
import StatusModal from "../../components/modals/StatusModal";

const Products = () => {

    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState("")
    const [openModal, setOpenModal] = useState(false)
    const [priceValues, setPriceValues] = useState({
        minPrice: "",
        maxPrice: ""
    })
    const { data: categories, isLoading: isCategoryLoading, } = useGetCategoriesQuery();
    const { products, totalItems, page, setPage, isProductLoading, handleFetch, handleTabChange, currentTab } = useProducts(searchValue, priceValues);
    const [deleteProduct, { isSuccess, isError }] = useDeleteProductMutation()
    const [deleteid, setDeleteId] = useState("")
    const [newCategoryName, setNewCategoryName] = useState("")
    const [addCategory, { isSuccess: AddCategorySuccess, isError: AddCategoryError, isLoading: AddCategoryLoading, error }] = useAddCategoryMutation()
    const [addCategoryModal, setAddCategoryModal] = useState(false)



    const onConfirm = () => {
        setOpenModal(false)
        deleteProduct(deleteid)

    }

    const handleDelete = (id) => {
        setDeleteId(id)
        setOpenModal(true)
    }

    const handlePageChange = (page) => {
        setPage(page)
    }


    const HandleAddCategory = () => {
        addCategory({ name: newCategoryName })
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success('Your Product has been deleted succesfully!', {
            });
            handleFetch()
            setDeleteId("")
        }
        if (isError) {
            toast.error("An error occurred. Please try again");
        }

        if (AddCategorySuccess) {
            setNewCategoryName("")
            setAddCategoryModal(false)
            toast.success('Your Category has been added succesfully!', {})
        }

        if (AddCategoryError) {
            setNewCategoryName("")
            setAddCategoryModal(false)
            toast.error(error?.data?.message.includes("Category already exist") ? error?.data?.message : "An error occurred. Please try again")
        }
    }, [isSuccess, isError, AddCategorySuccess, AddCategoryError])




    useEffect(() => {
        if (categories?.data?.length > 0) {
            handleTabChange(categories?.data[0]?.id)
        }
    }
        , [categories])



    const HandlePriceChange = (name, value) => {
        setPriceValues((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    useEffect(() => {
        console.log(priceValues)
    }, [priceValues])


    if (isCategoryLoading) {
        return (
            <Box sx={{ width: "80vw", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="loader"></div>
            </Box>
        )
    }



    return (
        <>
            <main className='main-container'>
                <Box>
                    <PageHeader title="Products" />
                    <br />
                    {/* <Box sx={{ display: "flex", justifyContent: "flex-end", columnGap: "20px"}}>
                        <CustomInput sx={{ width: "150px" }} type={"number"} placeholder={"Enter Price"} />
                        <CustomInput sx={{ width: "150px" }} type={"number"} placeholder={"Enter Price"} />
                        <SearchInput placeholder="Search by name..." sx={{ width: "320px" }} setSearch={(e) => setSearchValue(e)} />
                    </Box> */}
                    <Grid container sx={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end", paddingRight: { xs: "0px", md: "10px", xl: "15px" } }} spacing={2}>
                        <Grid item xs={12} sm={12} md={3} lg={2}>
                            <CustomInput type={"number"} sx={{ width: "100%" }} placeholder={"Enter Price From"} inputName={"minPrice"} onInputChange={(e) => HandlePriceChange("minPrice", e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={2}>
                            <CustomInput type={"number"} sx={{ width: "100%" }} placeholder={"Enter Price To"} inputName={"maxPrice"} onInputChange={(e) => HandlePriceChange("maxPrice", e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} lg={4}>
                            <SearchInput placeholder="Search by name..." setSearch={(e) => setSearchValue(e)} />
                        </Grid>
                    </Grid>




                    <Grid container sx={{
                        gap: { xs: "20px", md: "20px", lg: "35px", xl: "60px" }, marginTop: "20px"
                    }}>
                        <Grid item xs={12} lg={3} sx={{ border: "1px solid #424755", padding: "30px 10px 0px 10px", display: "flex", flexDirection: "column", alignItems: "center", rowGap: "30px", borderRadius: "10px" }}>
                            <Typography sx={{ color: "white", fontSize: "20px", fontWeight: "700" }}>Categories</Typography>
                            <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: { xs: "column-reverse", md: "column" }, justifyContent: "space-between", alignItems: "center" }}>
                                <Box sx={{ width: "100%", height: "90%", display: "flex", flexDirection: { xs: "row", sm: "column", md: "column" }, rowGap: "10px", columnGap: "10px", marginBottom: "10px", overflowX: { xs: "scroll", sm: "hidden" }, alignItems: { md: "center" }, overflowY: { sm: "auto" } }}>
                                    {categories?.data?.map((item, index) => (
                                        <MenuTab categories={true} key={index} item={item} currentTab={currentTab} onClick={() => handleTabChange(item.id)} />
                                    ))}
                                </Box>
                                <CustomButton onClick={() => setAddCategoryModal(true)} sx={{ width: "100%", marginBottom: { xs: "40px", sm: "10px" } }}>
                                    Add Category
                                </CustomButton>

                            </Box>
                        </Grid>

                        <Grid item xs={12} lg={8.5} sx={{ border: "1px solid #424755", padding: "10px 10px 0px 10px", borderRadius: "10px", display: "flex", flexDirection: { xs: "column-reverse", sm: "column" } }}>
                            <Box>
                                <Box sx={{ maxHeight: "100%", overflowY: "auto" }}>
                                    <Table
                                        data={products}
                                        columns={columns()}
                                        isLoading={isProductLoading}
                                        total={totalItems}
                                        handleDelete={(item) => handleDelete(item?.id)}
                                        handleEdit={(item) => navigate(`/update-product/${item.id}`)}
                                        handleView={(item) => navigate(`/view-product/${item.id}`)}
                                        page={page}
                                        handlePageChange={handlePageChange}
                                    />
                                </Box>
                            </Box>

                            <Box>
                                <Link to={"/add-Product"}>
                                    <CustomButton sx={{ width: "100%", margin: "10px 0px" }}> Add New Product</CustomButton>
                                </Link>
                            </Box>


                        </Grid>
                    </Grid>
                </Box>


            </main>
            <ConfirmationModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                description="This product will be deleted permanently."
                onConfirm={onConfirm}
                acceptBtnText={"Delete"}
                cancelBtnText={"Cancel"}

            />

            <StatusModal onInputChange={(e) => setNewCategoryName(e.target.value)} open={addCategoryModal} heading={"Add Category"} label1={"Category Name:"} placeholder={"Enter here..."} cancelBtnText={"Cancel"} acceptBtnText={"Add"} onClose={() => setAddCategoryModal(false)} onConfirm={HandleAddCategory} loading={AddCategoryLoading} />
        </>
    )
}

export default Products