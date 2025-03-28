"use client";
import React, { useState } from "react";
import styles from "./CampusSelect.module.css";

function CampusSelect() {
  const [chosenCampus, setChosenCampus] = useState("");

  const handleCampusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setChosenCampus(event.target.value);
  };

  return (
    <section className={styles.selectBox}>
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
    </section>
  );
}

export default CampusSelect;
