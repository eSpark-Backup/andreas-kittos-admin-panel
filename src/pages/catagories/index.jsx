import { Box, Grid, TextField, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const Catagories = () => {
    return (
        <main className='main-container'>
            <Box>
                <Typography sx={{ color: "#FFFFFF", fontSize: "20px", fontWeight: "700" }}>CATEGORIES</Typography>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <TextField
                        name='password'
                        id="filled-hidden-label-normal"
                        placeholder="Search by name..."
                        type={"text"}
                        InputProps={{
                            startAdornment: <SearchIcon sx={{ color: "#9E9EA4", height: "20px", width: "20px" }} />
                        }}
                    />
                </Box>
                <Grid container gap={16} sx={{ marginTop: "20px", minHeight: "75vh", maxHeight: "75vh" }}>
                    <Grid item xs={12} md={3} sx={{ border: "1px solid #424755", padding: "30px 10px 0px 10px", display: "flex", flexDirection: "column", alignItems: "center", rowGap: "30px", borderRadius:"10px" }}>
                        <Typography sx={{ color: "white", fontSize: "20px", fontWeight: "700" }}>Categories</Typography>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", rowGap: "20px" }}>
                            <Box sx={{ border: "1px solid #424755", height: "45px", borderRadius: "5px", display: "flex", alignItems: "center", paddingLeft: "10px", cursor: "pointer", backgroundColor: "#424755" }}>
                                <Typography sx={{ color: "white" }}>Laundry</Typography>
                            </Box>
                            <Box sx={{ border: "1px solid #424755", height: "45px", borderRadius: "5px", display: "flex", alignItems: "center", paddingLeft: "10px", cursor: "pointer" }}>
                                <Typography sx={{ color: "white" }}>Ironing</Typography>
                            </Box>
                            <Box sx={{ border: "1px solid #424755", height: "45px", borderRadius: "5px", display: "flex", alignItems: "center", paddingLeft: "10px", cursor: "pointer" }}>
                                <Typography sx={{ color: "white" }}>Dry Cleaning</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ border: "1px solid #424755", padding: "30px 10px 0px 10px", borderRadius:"10px" }}>
                    </Grid>
                </Grid>
            </Box>
        </main>
    )
}

export default Catagories