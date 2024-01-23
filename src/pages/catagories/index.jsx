import { Box, Card, Grid, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { ConfirmationModal, CustomButton, MenuTab, PageHeader, SearchInput, Table } from "../../components";
import { columns } from "../../columns/categories";
import { catagoriesTableData, cateogoryTabs } from "../../constant";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Catagories = () => {

    const [currentTab, setCurrentTab] = useState(1)
    const [data, setData] = useState([])
    const [openModal, setOpenModal] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        let filteredData = [...catagoriesTableData];
        const statusMap = {
            1: "Laundry",
            2: "Ironing",
            3: "Dry cleaning",
        };


        const statusToFilter = statusMap[currentTab];

        if (statusToFilter) {
            filteredData = filteredData.filter((item) => item?.category === statusToFilter);
        } else {
        }
        setData(filteredData);

    }, [currentTab]);

    const handleDelete = () => {
        setOpenModal(true)
    }

    const onConfirm = () => {
        setOpenModal(false)
        toast.success('Your Product has been deleted succesfully!', {
        });
    }


    return (
        <>
            <main className='main-container'>
                <Box>
                    <PageHeader title="Categories" />
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <SearchInput placeholder="Search by name..." sx={{ width: "320px" }} />
                    </Box>


                    <Grid container sx={{
                        gap: { xs: "20px", md: "20px", lg: "35px", xl: "60px" }, marginTop: "20px"
                    }}>
                        <Grid item xs={12} lg={3} sx={{ border: "1px solid #424755", padding: "30px 10px 0px 10px", display: "flex", flexDirection: "column", alignItems: "center", rowGap: "30px", borderRadius: "10px" }}>
                            {/* <Card sx={{ width: "100%", height: "95%", alignItems: "center", rowGap: "30px" }}> */}

                            <Typography sx={{ color: "white", fontSize: "20px", fontWeight: "700" }}>Categories</Typography>
                            <Box sx={{ width: "100%", display: "flex", flexDirection: { xs: "column", md: "column" }, rowGap: "20px", columnGap: "10px", marginBottom: "10px", justifyContent:"center", alignItems:"center" }}>
                                {cateogoryTabs.map((item, index) => (
                                    <MenuTab categories={true} key={index} item={item} currentTab={currentTab} onClick={() => setCurrentTab(item.id)} />
                                ))}
                            </Box>
                            {/* </Card> */}
                        </Grid>

                        <Grid item xs={12} lg={8.5} sx={{ border: "1px solid #424755", padding: "10px 10px 0px 10px", borderRadius: "10px" }}>
                            {/* <Card sx={{ width: "100%", height: "95%" }}> */}
                                <Box>
                                    <Box sx={{ maxHeight: { xs: "75%", md: "100%" }, overflowY: "scroll" }}>
                                        <Table
                                            data={data}
                                            columns={columns()}
                                            isLoading={false}
                                            total={data.length}
                                            handleDelete={handleDelete}
                                            handleEdit={(item) => navigate(`/product-details/${item.id}/edit`)}
                                            handleView={(item) => navigate(`/product-details/${item.id}/view`)}
                                        />
                                    </Box>
                                </Box>

                                <Box>
                                    <Link to={"/add-Product"}>
                                        <CustomButton sx={{ width: "100%", margin: "10px 0px" }}> Add New Product</CustomButton>
                                    </Link>
                                </Box>

                            {/* </Card> */}


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

export default Catagories