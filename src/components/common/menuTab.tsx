import { Box, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmationModal from '../modals/confirmation-modal';
import { useDeleteCategoryMutation, useUpdateCategoryMutation } from '../../services/categories';
import { toast } from 'react-toastify';
import StatusModal from '../modals/StatusModal';

const MenuTab = ({ key, item, onClick, currentTab, categories }) => {
    const [deleteModal, setDeleteModal] = useState(false)
    const [deleteId, setDeleteId] = useState("")

    const [editId, setEditId] = useState("")
    const [editModal, setEditModal] = useState(false)
    const [editCategoryName, setEditCategoryName] = useState("")


    const [deleteCategory, { isSuccess: DeleteSuccess, isError: DeleteError, isLoading: DeleteLoading }] = useDeleteCategoryMutation()
    const [updateCategory, { isSuccess: EditSuccess, isError: EditError, isLoading: EditLoading, error }] = useUpdateCategoryMutation()


    const HandleDelete = (id) => {
        setDeleteId(id)
        setDeleteModal(true)
    }

    const HandleEdit = (item) => {
        setEditId(item?.id)
        setEditCategoryName(item?.name)
        setEditModal(true)
    }

    const HandleConfirmDelete = () => {
        deleteCategory(deleteId)
    }

    const HandleConfirmEdit = () => {
        updateCategory({ id: editId, name: editCategoryName })
    }

    useEffect(() => {
        if (DeleteSuccess) {
            setDeleteModal(false);
            toast.success('Category has been deleted successfully!', {});
            setDeleteId("");
        }
        if (DeleteError) {
            setDeleteModal(false);
            toast.error('An error occurred. Please try again', {});
            setDeleteId("");
        }

    }, [DeleteSuccess, DeleteError])

    useEffect(() => {
        if (EditSuccess) {
            setEditModal(false);
            toast.success('Category has been updated successfully!', {});
            setEditId("");
        }
        if (EditError) {
            setEditModal(false);
            toast.error(error?.data?.message.includes("Category already exist") ? error?.data?.message : "An error occurred. Please try again")
            setEditId("");
        }
    }, [EditSuccess, EditError])

    return (
        <Box
            key={key}
            // onClick={onClick}
            sx={{
                border: "1px solid #424755cf",
                minHeight: "20px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                backgroundColor: currentTab == item.id ? "#424755cf" : "",
                width: {
                    xs: categories ? "270px" : "92%",
                    sm: categories ? "96%" : "91%",
                    md: categories ? "80%" : "80%",
                    lg: categories ? "88%" : "88%",
                    xl: categories ? "93%" : "88%"
                },
                padding: "10px",
                marginBottom: {
                    xs: categories ? "10px" : "0px"
                },
                minWidth: {
                    xs: categories ? "270px" : "auto",
                    md: "auto"
                },
                justifyContent: categories ? 'space-between' : 'flex-start'
            }}
        >
            <Typography sx={{ color: "white", fontSize: "16px", width: "70%", overflowX: "auto" }} onClick={onClick}>{item?.name}</Typography>
            {(categories && item?.name?.toLowerCase() !== "general") && (
                <Box sx={{ display: 'flex', gap: '10px', width: "30%", justifyContent: "flex-end" }}>
                    <EditIcon sx={{ color: 'white', cursor: 'pointer' }} onClick={() => HandleEdit(item)} />
                    <DeleteIcon sx={{ color: 'white', cursor: 'pointer' }} onClick={() => HandleDelete(item?.id)} />
                </Box>
            )}
            <ConfirmationModal
                open={deleteModal}
                onClose={() => setDeleteModal(false)}
                description={"This category will be deleted permanently."}
                descriptionTwo={"Products in this category will also be deleted."}
                cancelBtnText={"Cancel"}
                acceptBtnText={"Delete"}
                onConfirm={HandleConfirmDelete}
                isLoading={DeleteLoading}
            />

            <StatusModal defaultValue={editCategoryName} onInputChange={(e) => setEditCategoryName(e.target.value)} open={editModal} heading={"Edit Category"} label1={"Category Name:"} placeholder={"Enter here..."} cancelBtnText={"Cancel"} acceptBtnText={"Update"} onClose={() => setEditModal(false)} onConfirm={HandleConfirmEdit} loading={EditLoading} />


        </Box>
    );
};

export default MenuTab;
