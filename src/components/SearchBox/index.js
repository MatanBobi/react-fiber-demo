import React from 'react';

const SearchBox = ({inputValue, onChange}) => {
    const handleChange = event => {
        onChange(event.target.value);
    };

    return (<input
        type="text"
        className="input"
        value={inputValue}
        onChange={handleChange}
        placeholder="Filter 🔍"
    />);
};

export default SearchBox;