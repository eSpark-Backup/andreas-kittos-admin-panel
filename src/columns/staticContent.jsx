import { Typography } from "@mui/material";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const columns = () => {
    return [
        { name: "Key", key: "key" },
        {
            name: "Value", key: "value", component: (item) => {
                return (
                    // <Typography sx={{ color: "white", fontSize: "12px" }}> {item?.value ? `${item?.value?.slice(0, 31)}...` : ""}      </Typography>
                    <div className="quill-center">
                        <ReactQuill
                            style={{ color: "white", textAlign: 'center'}}
                            value={item?.value ? `${item?.value?.slice(0, 31)}...` : ""}
                            readOnly={true}
                            modules={{ toolbar: false }}
                            theme="snow"
                        />
                    </div>
                )
            }
        },
        {
            name: "", key: "action",

        },
    ];
};