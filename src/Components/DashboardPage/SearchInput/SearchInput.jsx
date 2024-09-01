import React, { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./SearchInput.css";

function SearchInput({ searchInput, onSearchChange }) {
  return (
    <div className="SearchInput">
      <SearchRoundedIcon />
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => onSearchChange(e)}
      />
    </div>
  );
}

export default SearchInput;
