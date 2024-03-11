import { Box } from '@mui/material'
import React from 'react'
import PageHeader from '../common/pageHeader'
import { ConfirmationModal, CustomButton, Table } from '../../components'
import { columns } from '../../columns/staticContent'
import { useNavigate } from 'react-router-dom'
import { useGetContentsQuery } from '../../services/contents'
import { useDeleteContent } from '../../hooks'

const StaticContentForm = () => {
    const navigate = useNavigate()
    const { data: staticContent, isLoading } = useGetContentsQuery()
    const { handleDelete, onConfirm, confirmModal, setConfirmModal } = useDeleteContent()


    return (
        <Box sx={{ width: { xs: "95%", sm: "100%" }, marginTop: { xs: "20px", md: "20px" }, padding: { xs: "0px 10px", md: "0px 20px" }, maxHeight: "70vh" }}>
            <PageHeader title="Static Content" sx={{ textTransform: "capitalize" }} />
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "auto", border: "1px solid #424755", borderRadius: "10px", px: { xs: "5px", md: "25px" },marginTop:"20px" }}>
                <Box sx={{ maxHeight: "250px", overflowY: "auto", marginTop: "10px", paddingRight: "5px" }}>
                    <Box>
                        <Table
                            data={staticContent?.data || []}
                            columns={columns()}
                            isLoading={isLoading}
                            handleDelete={(item) => handleDelete(item?.id)}
                            handleEdit={(item) => navigate(`/update-content/${item?.id}`)}
                            handleView={(item) => navigate(`/view-content/${item?.id}`)}
                        />
                    </Box>
                </Box>
                <Box sx={{ margin: "20px 0px" }}>
                    <CustomButton sx={{ width: { xs: "100%", md: "98%" } }} onClick={() => navigate("/add-content")}>Add Content</CustomButton>
                </Box>
            </Box>
            <ConfirmationModal
                open={confirmModal}
                onClose={() => setConfirmModal(false)}
                description={`Are you sure you want to Delete?`}
                onConfirm={onConfirm}
                acceptBtnText={"Delete"}
                cancelBtnText={"Cancel"}
            />
        </Box>
    )
}

export default StaticContentForm
