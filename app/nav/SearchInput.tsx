"use client";
import React, { useState } from "react";

function SearchInput() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Searched for: ", searchValue);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search any products or services"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button type="submit" aria-label="Submit search">
          Search
        </button>
      </form>
    </>
  );
}

export { SearchInput };
