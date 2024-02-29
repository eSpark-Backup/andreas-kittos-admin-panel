import { useState, useEffect } from 'react';
import { useUpdateContentMutation } from '../../services/contents';
import { toast } from 'react-toastify';
import { isFormEmpty } from '../../pages/utils/helpers';
import { useNavigate } from 'react-router-dom';

const useUpdateContent = () => {
    const navigate = useNavigate()
    const [updateContent, { isLoading, isSuccess, isError }] = useUpdateContentMutation()

    const [content, setContent] = useState({
        id: "",
        key: "",
        value: ""
    })


    const handleInputsChange = (name, value) => {
        if (value) {
            setContent((prevData) => ({
                ...prevData,
                [name]: value
            }))
        }
    }

    const handleSubmit = () => {
        if (isFormEmpty(content)) {
            toast.error("Please fill in all fields.");
        } else {
            updateContent(content)
        }
    }


    useEffect(() => {
        if (isSuccess) {
            toast.success("Static Content updated successfully");
            navigate("/settings")
        }
        if (isError) {
            toast.error("An error occurred. Please try again");
        }
    }, [isSuccess, isError])




    return {
        content,
        setContent,
        handleInputsChange,
        handleSubmit,
        isLoading
    }
}

export default useUpdateContent;