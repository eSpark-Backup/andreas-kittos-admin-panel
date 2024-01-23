import React, { useState } from 'react'
import { InputLabel, TextField } from '@mui/material'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const CustomInput = ({
    label,
    placeholder,
    type,
    disabled,
    sx,
    inputName,
    onInputChange,
}) => {

    const [showPassword, setShowPassword] = useState(false);




    return (
        <>
            <InputLabel sx={{ color: "#FFFFFF", fontSize: "16px", fontWeight: "500" }}>{label}</InputLabel>
            <TextField
                name={inputName}
                id="filled-hidden-label-normal"
                placeholder={placeholder}
                type={type === 'password' ? (showPassword ? "text" : "password") : type}
                InputProps={type === 'password' ? {
                    endAdornment: showPassword ?
                        <VisibilityOutlinedIcon sx={{ cursor: "pointer", color: "#9E9EA4" }} onClick={() => setShowPassword(!showPassword)} /> :
                        <VisibilityOffOutlinedIcon sx={{ cursor: "pointer", color: "#9E9EA4" }} onClick={() => setShowPassword(!showPassword)} />
                } : {}}
                disabled={disabled}
                sx={{ ...sx }}
                onChange={(e)=> onInputChange(e)}

            />
        </>
    )
}

export default CustomInput