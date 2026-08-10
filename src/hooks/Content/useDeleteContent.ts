import { useState, useEffect } from 'react';
import { useDeleteContentMutation } from '../../services/contents';
import { toast } from 'react-toastify';

const useDeleteContent = () => {

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
            toast.success('Your Product has been deleted succesfully!', {
            });
            setDeleteId("")
        }
        if (isError) {
            toast.error("An error occurred. Please try again");
        }
    }, [isSuccess, isError])

    return {
        handleDelete,
        onConfirm,
        confirmModal,
        setConfirmModal
    }
}

export default useDeleteContent;
