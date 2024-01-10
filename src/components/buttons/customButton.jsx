import { Button, useTheme } from '@mui/material'



const CustomButton = ({ sx, children, variant, color, onClick, type, startIcon, endIcon, bg, hover }) => {
    const theme = useTheme();
    return (
        <Button
            sx={{
                backgroundColor: bg ? bg : theme.palette.primary.light,
                border: `1px solid ${theme.palette.border.main}`,
                ":hover": {
                    backgroundColor: hover ? hover : theme.palette.primary.light,
                    border: `1px solid ${theme.palette.border.main}`
                },
                color: '#fff',
                ...sx,
            }}
            startIcon={startIcon}
            endIcon={endIcon}
            type={type}
            onClick={onClick}
            // color={color || "primary"}
            variant={variant || "contained"}
        >
            {children}
        </Button>
    )
}

export default CustomButton