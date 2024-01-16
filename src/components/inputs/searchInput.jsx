import { TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const SearchInput = ({
    setSearch,
    placeholder,
    sx,
}) => {
    return (
        <TextField placeholder={placeholder} sx={{ width: "100%", ...sx }} InputProps={{ startAdornment: <SearchIcon sx={{ color: "#9E9EA4", height: "25px", width: "25px", m:"0px 10px" }} /> }} onChange={(e) => setSearch(e.target.value)} />
    )
}

export default SearchInput