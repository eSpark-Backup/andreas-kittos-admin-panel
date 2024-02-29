import { Box, Divider, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import BackBtn from '../buttons/backBtn'
import PageHeader from '../common/pageHeader'
import { useParams } from 'react-router-dom'
import { useGetContentQuery } from '../../services/contents'

const StaticContentCard = () => {
    const params = useParams()
    const { data: content, isLoading, refetch,isFetching } = useGetContentQuery(params.id)
    
    useEffect(() => { 
        refetch()
    }, [refetch])


    if (isLoading || isFetching) {
        return (
            <Box sx={{ width: "80vw", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="loader"></div>
            </Box>
        )
    }

    return (
        <main className='main-container'>
            <BackBtn />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" }}>
                <Box sx={{ width: { xs: "100%", md: "100%", lg: "90%", xl: "70%" }, border: "1px solid #424755", height: "100%", borderRadius: "10px", py: "25px", px: { xs: "4px", lg: "30px" } }}>
                    <PageHeader title="View Content" sx={{ textTransform: "capatilize", paddingLeft: { xs: "10px", lg: "0px" } }} />
                    <Divider />
                    <br />
                    <Typography sx={{ color: "white", fontSize: "28px" }} >
                        {content?.data?.key}
                    </Typography>
                    <br />
                    <Typography sx={{ color: "white", borderRadius: "8px" }} >
                        {content?.data?.value}
                    </Typography>

                </Box>

            </Box>
        </main>
    )
}

export default StaticContentCard
