import React from "react";

const SearchBar = ({getSearch, search, updateSearch}) => {
  return (
    <div>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search City
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
