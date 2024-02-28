import { Box, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import BackBtn from '../buttons/backBtn'
import PageHeader from '../common/pageHeader'
import { useLocation } from 'react-router-dom'
import CustomButton from '../buttons/customButton'

const StaticContentCard = () => {
    const location = useLocation()
    const [key, setKey] = useState("")
    const [value, setValue] = useState("")
    const UpdateHandler = () => {
        console.log(key, "Key")
        console.log(value, "Value")
    }
    return (
        <main className='main-container'>
            <BackBtn />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" }}>
                <Box sx={{ width: { xs: "100%", md: "100%", lg: "90%", xl: "70%" }, border: "1px solid #424755", height: "100%", borderRadius: "10px", py: "25px", px: { xs: "4px", lg: "30px" } }}>
                    <PageHeader title="View Content" sx={{ textTransform: "capatilize", paddingLeft: { xs: "10px", lg: "0px" } }} />
                    <Divider />
                    <br />
                    <Typography sx={{ color: "white", fontSize: "28px" }} contentEditable={location.pathname.split("/").includes("edit-content") ? true : false} onInput={(e) => setKey(e.target.innerText)}>Where does it come from?</Typography>
                    <br />
                    <Typography sx={{ color: "white", borderRadius: "8px" }} contentEditable={location.pathname.split("/").includes("edit-content") ? true : false} onInput={(e) => setValue(e.target.innerText)}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                    </Typography>
                    {location.pathname.split("/").includes("edit-content") ? <CustomButton onClick={UpdateHandler} sx={{ width: "100%", marginTop: "10px" }}>Update Content</CustomButton> : null}

                </Box>

            </Box>
        </main>
    )
}

export default StaticContentCard
