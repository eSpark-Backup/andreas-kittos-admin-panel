import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import PageHeader from '../common/pageHeader'
import { ConfirmationModal, CustomButton, Table } from '../../components'
import { staticContent } from '../../constant'
import { columns } from '../../columns/staticContent'
import { useNavigate } from 'react-router-dom'

const StaticContentForm = () => {
    const [confirmModal, setConfirmModal] = useState(false)
    const navigate = useNavigate()
    const onConfirm = () => {
        setConfirmModal(false)
    }
    return (
        <Box sx={{ width: "100%", marginTop: { xs: "20px", md: "20px" }, padding: { xs: "0px 10px", md: "0px 20px" }, maxHeight: "70vh" }}>
            <PageHeader title="Static Content" sx={{ textTransform: "capitalize" }} />
            <Box sx={{ maxHeight: "85%", overflowY: "scroll", paddingRight: "10px" }}>
                <Box>
                    <Table
                        data={staticContent}
                        columns={columns()}
                        handleDelete={(item) => setConfirmModal(true)}
                        handleEdit={(item) => navigate(`/edit-content/${item?.id}`)}
                        handleView={(item) => navigate(`/view-content/${item?.id}`)}
                    />
                </Box>
            </Box>
            <CustomButton sx={{ width: { xs: "93%", md: "98%" }, marginBottom: "15px", marginTop: "5px" }} onClick={() => navigate("/add-content")}>Add Content</CustomButton>
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
