"use client";
import React, { useState, useEffect } from "react";
import styles from "./FloatingLabel.module.css";

type Props = {
  name: string;
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

function FloatingLabel({ name, label, value, onChange, type = "text" }: Props) {
  const [internalValue, setInternalValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Keep track of focus when value is controlled externally
  useEffect(() => {
    if (value !== undefined) {
      setIsFocused(value !== "");
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e); // use parent handler
    } else {
      setInternalValue(e.target.value); // fallback to internal
    }
  };

  const currentValue = value !== undefined ? value : internalValue;

  return (
    <div className={styles.inputBox}>
      <label htmlFor={name} className={isFocused ? styles.focused : ""}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={currentValue}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(currentValue !== "")}
      />
    </div>
  );
}

export default FloatingLabel;
