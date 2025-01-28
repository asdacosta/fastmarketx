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
  );
}

export { SearchInput };
