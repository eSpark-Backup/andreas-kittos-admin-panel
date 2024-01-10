import { Box, Typography } from "@mui/material"
import { PageHeader, TabButton } from "../../components"
import InformationForm from "../../components/forms/InformationForm"
import { useState } from "react"

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

            <Box
                sx={{
                    borderRadius: "10px",
                    border: "1px solid #424755",
                    minHeight: "70vh",
                    display: "flex",

                }}
            >

                {/* tabs  */}
                <Box
                    sx={{
                        borderRight: "1px solid #424755",
                        width: "20%",
                        padding: "20px 10px",
                    }}
                >

                    {tabsData.map((tab) => (
                        <TabButton
                            key={tab.id}
                            title={tab.title}
                            id={tab.id}
                            currentTab={currentTab}
                            handleTab={handleTab}
                        />
                    ))}

                </Box>


                {/* form  */}
                <Box
                    sx={{
                        width: "80%",
                        padding: "10px 50px",
                    }}
                >


                    {
                        currentTab === 1 &&
                        <InformationForm />

                    }

                    {
                        currentTab === 2 &&
                        "password components here "

                    }




                </Box>

            </Box>



        </main>
    )
}

export default Settings