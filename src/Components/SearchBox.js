import React from "react";
import Icon from "../Images/SVG/Icon";

const SearchBox = () => {
  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search recipes"
      />
    </div>
  );
};

export default SearchBox;
