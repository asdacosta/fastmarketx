"use client";
import React from "react";
import styles from "./Campus.module.css";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function Campus({ value, onChange }: Props) {
  return (
    <div className={styles.campus}>
      <select name="campus" value={value} onChange={onChange}>
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
