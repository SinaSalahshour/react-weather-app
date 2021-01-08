import React from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

const SearchBar = ({ getSearch, search, updateSearch }) => {
  return (
    <div className="search-div">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          placeholder="Enter City"
          onChange={updateSearch}
        />
          <FaSearch className="search-icon" />
      </form>
    </div>
  );
};

export default SearchBar;
