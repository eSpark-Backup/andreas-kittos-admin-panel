import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PageHeader from '../common/pageHeader'
import { ConfirmationModal, CustomButton, Table } from '../../components'
import { columns } from '../../columns/staticContent'
import { useNavigate } from 'react-router-dom'
import { useDeleteContentMutation, useGetContentsQuery } from '../../services/contents'
import { toast } from 'react-toastify'

const StaticContentForm = () => {
    const navigate = useNavigate()
    const { data: staticContent, isLoading } = useGetContentsQuery()
    const [deleteProduct, { isSuccess, isError }] = useDeleteContentMutation()
    const [deleteid, setDeleteId] = useState("")
    const [confirmModal, setConfirmModal] = useState(false)


    const onConfirm = () => {
        setConfirmModal(false)
        deleteProduct(deleteid)

    }

    const handleDelete = (id) => {
        setDeleteId(id)
        setConfirmModal(true)
    }


    useEffect(() => {
        if (isSuccess) {
            toast.success('Your Content has been deleted succesfully!', {
            });
            setDeleteId("")
        }
        if (isError) {
            toast.error("An error occurred. Please try again");
        }
    }, [isSuccess, isError])




    return (
        <Box sx={{ width: "100%", marginTop: { xs: "20px", md: "20px" }, padding: { xs: "0px 10px", md: "0px 20px" }, maxHeight: "70vh" }}>
            <PageHeader title="Static Content" sx={{ textTransform: "capitalize" }} />
            <Box sx={{ maxHeight: "85%", overflowY: "scroll", paddingRight: "10px" }}>
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
