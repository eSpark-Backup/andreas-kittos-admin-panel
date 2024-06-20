import { Box, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { ConfirmationModal, CustomButton, MenuTab, PageHeader, SearchInput, Table } from "../../components";
import { columns } from "../../columns/products";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useGetCategoriesQuery } from "../../services/categories";
import { useDeleteProductMutation } from "../../services/products";
import { useProducts } from "../../hooks";

const Products = () => {

    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState("")
    const [openModal, setOpenModal] = useState(false)
    const { data: categories, isLoading: isCategoryLoading, } = useGetCategoriesQuery();
    const { products, totalItems, page, setPage, isProductLoading, handleFetch, handleTabChange, currentTab } = useProducts(searchValue);
    const [deleteProduct, { isSuccess, isError }] = useDeleteProductMutation()
    const [deleteid, setDeleteId] = useState("")


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
    }, [isSuccess, isError])




    useEffect(() => {
        if (categories?.data?.length > 0) {
            handleTabChange(categories?.data[0]?.id)
        }
    }
        , [categories])


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
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <SearchInput placeholder="Search by name..." sx={{ width: "320px" }} setSearch={(e) => setSearchValue(e)} />
                    </Box>




                    <Grid container sx={{
                        gap: { xs: "20px", md: "20px", lg: "35px", xl: "60px" }, marginTop: "20px"
                    }}>
                        <Grid item xs={12} lg={3} sx={{ border: "1px solid #424755", padding: "30px 10px 0px 10px", display: "flex", flexDirection: "column", alignItems: "center", rowGap: "30px", borderRadius: "10px" }}>
                            <Typography sx={{ color: "white", fontSize: "20px", fontWeight: "700" }}>Categories</Typography>
                            <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: { xs: "column-reverse", md: "column" }, justifyContent: "space-between", alignItems: "center" }}>
                                <Box sx={{ width: "100%", height: "80%", display: "flex", flexDirection: { xs: "row", sm: "column", md: "column" }, rowGap: "10px", columnGap: "10px", marginBottom: "10px", overflowX: { xs: "scroll", sm: "hidden" }, alignItems: { md: "center" }, overflowY: { sm: "auto" } }}>
                                    {categories?.data?.map((item, index) => (
                                        <MenuTab categories={true} key={index} item={item} currentTab={currentTab} onClick={() => handleTabChange(item.id)} />
                                    ))}
                                </Box>
                                <CustomButton onClick={() => { }} sx={{ width: "100%", marginBottom: { xs: "40px" } }}>
                                    Add Category
                                </CustomButton>

                            </Box>
                        </Grid>

                        <Grid item xs={12} lg={8.5} sx={{ border: "1px solid #424755", padding: "10px 10px 0px 10px", borderRadius: "10px", display: "flex", flexDirection: { xs: "column-reverse", sm: "column" } }}>
                            <Box>
                                <Box sx={{ maxHeight: "100%", overflowY: "scroll" }}>
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
        </>
    )
}

export default Products