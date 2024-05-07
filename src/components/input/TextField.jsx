import { TextField, Typography } from "@mui/material";
import { useState } from "react";

const TextFieldComponent = ({ config, onChange }) => {
    const { name, placeholder, label } = config;
    const [displayLabel, setDisplayLabel] = useState(false);

    return (
        <>
            {
                displayLabel && <Typography variant='p' sx={{fontSize: '13px', fontWeight: '500'}}>{label}</Typography>
            }
            <TextField variant="outlined" placeholder={placeholder} name={name} onChange={(e) => {
                onChange({
                    name: e.target.name,
                    value: e.target.value
                })
                setDisplayLabel(e.target.value)
            }} />
        </>
    )
}

export default TextFieldComponent