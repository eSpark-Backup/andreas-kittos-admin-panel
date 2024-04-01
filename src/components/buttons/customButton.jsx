import { LoadingButton } from '@mui/lab';
import { Button, useTheme } from '@mui/material'



const CustomButton = ({ sx, children, variant, color, onClick, type, startIcon, endIcon, bg, hover, isLoading }) => {
    const theme = useTheme();
    return (
        <LoadingButton
            sx={{
                backgroundColor: bg ? bg : theme.palette.primary.light,
                border: `1px solid ${theme.palette.border.main}`,
                ":hover": {
                    backgroundColor: hover ? hover : theme.palette.primary.light,
                    border: `1px solid ${theme.palette.border.main}`
                },
                color: '#fff',
                fontSize:"16px",
                fontWeight: 500,
                ...sx,
            }}
            startIcon={startIcon}
            endIcon={endIcon}
            type={type}
            onClick={onClick}
            loading={isLoading}
            variant={variant || "contained"}
        >
            {children}
        </LoadingButton>
    )
}

export default CustomButton