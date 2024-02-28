import { Typography } from "@mui/material";

export const columns = () => {
    return [
        { name: "Key", key: "key" },
        {
            name: "Value", key: "value", component: (item) => {
                return (
                    <Typography sx={{ color: "white", fontSize: "12px" }}>{item?.value?.slice(0, 31)}...</Typography>
                )
            }
        },
        {
            name: "", key: "action",

        },
    ];
};  