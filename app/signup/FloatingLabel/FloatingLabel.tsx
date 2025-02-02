"use client";
import React, { useState } from "react";
import styles from "./FloatingLabel.module.css";

function FloatingLabel({ name, label }: { name: string; label: string }) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={styles.inputBox}>
      <label htmlFor={name} className={isFocused ? styles.focused : ""}>
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(value !== "")}
      />
    </div>
  );
}

export default FloatingLabel;
