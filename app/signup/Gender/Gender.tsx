"use client";
import React from "react";
import styles from "./Gender.module.css";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Gender({ value, onChange }: Props) {
  return (
    <div className={styles.gender}>
      <label className={styles.radioLabel}>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={value === "male"}
          onChange={onChange}
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
          checked={value === "female"}
          onChange={onChange}
          className={styles.radioInput}
        />
        <span className={styles.customRadio}></span>
        Female
      </label>
    </div>
  );
}

export default Gender;
