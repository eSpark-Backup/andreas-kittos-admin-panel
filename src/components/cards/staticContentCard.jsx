import { Box, Divider, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import BackBtn from '../buttons/backBtn'
import PageHeader from '../common/pageHeader'
import { useParams } from 'react-router-dom'
import { useGetContentQuery } from '../../services/contents'

const StaticContentCard = () => {
    const params = useParams()
    const { data: content, isLoading, refetch, isFetching } = useGetContentQuery(params.id)

    useEffect(() => {
        refetch()
    }, [refetch])


    if (isLoading || isFetching) {
        return (
            <Box sx={{ width: {xs:"100vw",md:"80vw"}, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                    <Box sx={{ mt: "40px", borderRadius: "5px", border: "1px solid #424755", pt: 2, pb: 4, display: "flex", flexDirection: "column", rowGap: "20px" }}>
                        <Box>
                            <Typography sx={{ color: "white", fontSize: "20px", px: 4, fontWeight: "500" }} >
                                {content?.data?.key}
                            </Typography>
                            <Divider />
                        </Box>
                        <Typography sx={{ color: "white", borderRadius: "8px", px: { xs: 1, md: 4 }, fontSize: "14px", fontWeight: "400", lineHeight: "16.94px" }} >
                            {content?.data?.value}
                        </Typography>
                    </Box>

                </Box>

            </Box>
        </main>
    )
}

export default StaticContentCard
