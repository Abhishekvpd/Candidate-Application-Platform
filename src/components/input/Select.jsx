import { Typography } from '@mui/material';
import { useState } from 'react';
import Select from 'react-select';

const SelectComponent = ({ config, onChange }) => {
    const { name, options, placeholder, isMulti, label } = config;
    const [displayLabel, setDisplayLabel] = useState(false);

    return (
        <>
            {
                displayLabel && <Typography variant='p' sx={{ fontSize: '13px', fontWeight: '500' }}>{label}</Typography>
            }
            <Select
                name={name}
                placeholder={placeholder}
                isClearable
                isSearchable
                isMulti={isMulti}
                options={options}
                onChange={(value) => {
                    if (!value) {
                        onChange({ name, value });
                        setDisplayLabel(false);
                    }
                    else if (Array.isArray(value)) {
                        const filterValue = value.map(item => item.value);
                        onChange({ name, value: filterValue });
                        value.length ? setDisplayLabel(true) : setDisplayLabel(false);
                    } else {
                        onChange({ name, value: value.value });
                        setDisplayLabel(true);
                    }
                }}
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        fontSize: '13px',
                        fontWeight: 400,
                        color: 'hsl(0, 0%, 100%)',
                        minWidth: '150px'
                    }),
                    menu: (baseStyles, state) => ({
                        ...baseStyles,
                        fontSize: '14px',
                        fontWeight: "400"
                    }),
                }}
            />
        </>
    )
}

export default SelectComponent;