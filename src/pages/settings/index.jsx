import { Box, Grid, Typography } from "@mui/material"
import { PageHeader, TabButton } from "../../components"
import InformationForm from "../../components/forms/InformationForm"
import { useState } from "react"
import ChangePasswordForm from "../../components/forms/ChangePasswordForm"

const Settings = () => {

    const [currentTab, setCurrentTab] = useState(1)


    const handleTab = (id) => {
        setCurrentTab(id)
    }

    const tabsData = [
        { title: 'Personal info', id: 1 },
        { title: 'Change password', id: 2 },
        // Add more tabs as needed
    ];



    return (
        <main className='main-container'>
            <PageHeader title="Settings" />
            <Grid container sx={{ height: "75vh",borderRadius:"10px", border:{xs:"1px solid #424755", md:"none", padding:"6px 10px"}}}>
                <Grid item xs={12} md={3} sx={{ border: { md: "1px solid #424755" }, borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", padding: {xs:"10px 10px 0px 10px", md:"10px 10px 0px 10px"} }}>

                    <Box sx={{ width: "100%", display: "flex", flexDirection: {xs:"row", md:"column"}, rowGap: "20px", columnGap:"10px"}}>
                        {tabsData.map((eachItem, index) => (

                            <Box onClick={() => handleTab(eachItem.id)} sx={{ border: "1px solid #424755", height: "40px", borderRadius: "5px", display: "flex", alignItems: "center",paddingLeft:{xs:"7px", md:"10px"}, cursor: "pointer", backgroundColor: currentTab == eachItem.id ? "#424755" : "", width: { xs: "50%", md: "90%", lg: "95%" } }} key={index}>
                                <Typography sx={{ color: "white", fontSize:{xs:"12px", sm:"16px"} }}>{eachItem.title}</Typography>
                            </Box>

                        ))}
                    </Box>

                </Grid>
                <Grid item xs={12} md={9} sx={{ border: { md: "1px solid #424755" }, borderTopRightRadius: "10px", borderBottomRightRadius: "10px", padding: {sx:"10px 10px 10px 10px", md:"10px 20px 10px 20px"}, display: "flex", rowGap: "20px" }}>
                    {/* <InformationForm />
                    <ChangePasswordForm/> */}
                    {currentTab === 1 ? <InformationForm /> : <ChangePasswordForm />}
                </Grid>
            </Grid>
        </main>
    )
}

export default Settings