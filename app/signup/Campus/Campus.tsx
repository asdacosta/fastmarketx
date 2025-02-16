"use client";
import React, { useState } from "react";
import styles from "./Campus.module.css";

function Campus() {
  const [campus, setCampus] = useState("");

  return (
    <div className={styles.campus}>
      <select value={campus} onChange={(e) => setCampus(e.target.value)}>
        <option value="" disabled>
          Select campus
        </option>
        <option value="legon">Legon</option>
        <option value="knust">KNUST</option>
        <option value="winneba">Winneba</option>
      </select>
    </div>
  );
}

export default Campus;
