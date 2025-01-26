"use client";
import React, { useState } from "react";

function CampusSelect() {
  const [chosenCampus, setChosenCampus] = useState("");

  const handleCampusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setChosenCampus(event.target.value);
  };

  return (
    <div>
      <select
        name="campus-name"
        aria-label="Campus Select"
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
  );
}

export { CampusSelect };
