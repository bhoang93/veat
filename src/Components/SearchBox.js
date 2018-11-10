import React from "react";
import Icon from "../Images/SVG/Icon";

const SearchBox = ({ onSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search recipes"
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchBox;
