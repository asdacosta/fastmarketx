import Link from "next/link";
import React, { useState } from "react";

function page() {
  const [searchValue, setSearchValue] = useState("");
  const [chosenCampus, setChosenCampus] = useState("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Searched for: ", searchValue);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleCampusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setChosenCampus(event.target.value);
  };

  return (
    <nav>
      <section>
        <Link href="/">
          <h1>CampusairX</h1>
        </Link>
      </section>

      <section>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search any products or services"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <button type="submit"></button>
        </form>
        <div>
          {/* <label htmlFor="campus-name">Campus</label> */}
          <select
            name="campus-name"
            // id="campus-name"
            value={chosenCampus}
            onChange={handleCampusChange}
          >
            <option value="" disabled>
              Campus
            </option>
            <option value="legon">Legon</option>
            <option value="knust">KNUST</option>
          </select>
        </div>
      </section>

      <section>
        <Link href="/menu">Menu</Link>
        <Link href="/account">Account</Link>
        <div>Cart</div>
      </section>
    </nav>
  );
}

export { page };
