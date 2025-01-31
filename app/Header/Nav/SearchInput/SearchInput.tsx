"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./SearchInput.module.css";
import Typed from "typed.js";

function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (!searchInputRef.current) return;

    const typed = new Typed(searchInputRef.current, {
      strings: [
        "iphone",
        "rice and chicken",
        "Search products, services, or meals ^1500",
      ],
      attr: "placeholder",
      loop: true,
      loopCount: 10,
      typeSpeed: 30,
      backSpeed: 15,
      startDelay: 1000,
      backDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Searched for: ", searchValue);
  };

  return (
    <section className={styles.searchInput}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className={styles.searchIcon}
      >
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </svg>
      <form onSubmit={handleSearch} className={styles.form}>
        <input
          ref={searchInputRef}
          type="text"
          aria-label="Search Product or Services"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button type="submit" aria-label="Submit search">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchInput;
