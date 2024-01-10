import { Button } from '@mui/material'



const CustomButton = ({ sx, children, variant, color, onClick, type, startIcon, endIcon }) => {
    return (
        <Button
            sx={{
                backgroundColor: '#424755',
                color: '#fff',
                ...sx,
                 }}
            startIcon={startIcon}
            endIcon={endIcon}
            type={type}
            onClick={onClick}
            color={color}
            variant={variant || "contained"}
        >
            {children}
        </Button>
    )
}

export default CustomButton