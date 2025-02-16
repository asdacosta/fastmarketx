"use client";
import React, { useState } from "react";
import styles from "./Gender.module.css";

function Gender() {
  const [gender, setGender] = useState("");

  return (
    <div className={styles.gender}>
      <label className={styles.radioLabel}>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
          className={styles.radioInput}
        />
        <span className={styles.customRadio}></span>
        Male
      </label>
      <label className={styles.radioLabel}>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
          className={styles.radioInput}
        />
        <span className={styles.customRadio}></span>
        Female
      </label>
    </div>
  );
}

export default Gender;
