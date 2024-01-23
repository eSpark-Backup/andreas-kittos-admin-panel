import { Box, Grid, Typography } from "@mui/material"
import { PageHeader, MenuTab } from "../../components"
import InformationForm from "../../components/forms/InformationForm"
import { useState } from "react"
import ChangePasswordForm from "../../components/forms/ChangePasswordForm"
import { SettingsTabs } from "../../constant"

const Settings = () => {

    const [currentTab, setCurrentTab] = useState(1)


    return (
        <main className='main-container'>
            <PageHeader title="Settings" />
            <Grid container sx={{ minHeight: currentTab === 1 ? "75vh" : { xs: "55vh", md: "75vh" }, borderRadius: "10px", border: { xs: "1px solid #424755", md: "none", padding: "6px 10px" } }}>
                <Grid item xs={12} md={3} sx={{ border: { md: "1px solid #424755" }, borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", padding: { xs: "10px 10px 10px 10px", md: "10px 10px 0px 10px" } }}>

                    <Box sx={{ width: "100%", display: "flex", flexDirection: { xs: "row", md: "column" }, rowGap: "20px", columnGap: "10px" }}>
                        {SettingsTabs.map((item, index) => (
                            <MenuTab key={index} item={item} currentTab={currentTab} onClick={() => setCurrentTab(item.id)} />
                        ))}
                    </Box>

                </Grid>
                <Grid item xs={12} md={9} sx={{ border: { md: "1px solid #424755" }, borderTopRightRadius: "10px", borderBottomRightRadius: "10px", padding: { sx: "10px 10px 10px 10px", md: "10px 20px 10px 20px" }, display: "flex", rowGap: "20px" }}>
                    {currentTab === 1 ? <InformationForm /> : <ChangePasswordForm />}
                </Grid>
            </Grid>
        </main>
    )
}

export default Settings