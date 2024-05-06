import React from 'react';

import Select, { components } from 'react-select';

const menuHeaderStyle = {
    padding: '8px 12px',
};

export const colourOptions = [
    { value: "ocean", label: "Ocean" },
    { value: "blue", label: "Blue" },
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red" },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" },
    { value: "green", label: "Green" },
    { value: "forest", label: "Forest" },
    { value: "slate", label: "Slate" },
    { value: "silver", label: "Silver" },
];

export const flavourOptions = [
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "salted-caramel", label: "Salted Caramel" },
];

export const groupedOptions = [
    {
        label: "Colours",
        options: colourOptions,
    },
    {
        label: "Flavours",
        options: flavourOptions,
    },
];

const Menu = (
    props
) => {
    return (
        <components.Menu {...props}>
            {props.children}
        </components.Menu >
    );
};

export default () => (
    <Select
        placeholder="Select Color"
        options={groupedOptions}
        components={{ Menu }}
    />
);