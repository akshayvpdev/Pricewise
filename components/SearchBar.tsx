"use client";
import React from "react";

const SearchBar = () => {
  const handleSubmit = () => {};
  return (
    <form className="flex flex-gap gap-14 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="searchbar-input"
        className="searchbar-input"
      />
      <button type="submit" className="searchbar-btn">Search</button>
    </form>
  );
};

export default SearchBar;
