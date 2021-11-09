import React from "react";
import Spinner from "../Spinner";
const SearchBox = ({ inputValue, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        className="input"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search 🔍"
      />
      {/* {isLoading && (
        <div className="input-spinner-loading">
          <Spinner />
        </div>
      )} */}
    </div>
  );
};

export default SearchBox;
