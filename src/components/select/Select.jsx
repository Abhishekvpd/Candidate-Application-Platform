import Select from 'react-select';

const SelectComponent = ({ config, onChange }) => {
    const { name, options, placeholder, isMulti } = config;

    return (
        <Select
            name={name}
            placeholder={placeholder}
            isClearable
            isSearchable
            isMulti={isMulti}
            options={options}
            onChange={(value) => {
                Array.isArray(value) || !value ? onChange({ name, value }) : onChange({ name, value: value.value })
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
    )
}

export default SelectComponent;