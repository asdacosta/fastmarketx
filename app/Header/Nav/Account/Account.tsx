"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Account.module.css";
import AccountList from "./AccountList/AccountList";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";

function Account() {
  const [isVisible, setIsVisible] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  useEffect(() => {
    if (!isVisible) return;

    const hideOnClickOutsideButton = (event: MouseEvent) => {
      if (!accountRef.current?.contains(event.target as Node))
        setIsVisible(false);
    };
    document.addEventListener("click", hideOnClickOutsideButton);

    return () =>
      document.removeEventListener("click", hideOnClickOutsideButton);
  }, [isVisible]);

  return (
    <section className={styles.account}>
      <button className={styles.accountButton} onClick={toggleVisibility}>
        <svg role="img" viewBox="0 -960 960 960">
          <path d="M480-492.31q-57.75 0-98.87-41.12Q340-574.56 340-632.31q0-57.75 41.13-98.87 41.12-41.13 98.87-41.13 57.75 0 98.87 41.13Q620-690.06 620-632.31q0 57.75-41.13 98.88-41.12 41.12-98.87 41.12ZM180-187.69v-88.93q0-29.38 15.96-54.42 15.96-25.04 42.66-38.5 59.3-29.07 119.65-43.61 60.35-14.54 121.73-14.54t121.73 14.54q60.35 14.54 119.65 43.61 26.7 13.46 42.66 38.5Q780-306 780-276.62v88.93H180Zm60-60h480v-28.93q0-12.15-7.04-22.5-7.04-10.34-19.11-16.88-51.7-25.46-105.42-38.58Q534.7-367.69 480-367.69q-54.7 0-108.43 13.11-53.72 13.12-105.42 38.58-12.07 6.54-19.11 16.88-7.04 10.35-7.04 22.5v28.93Zm240-304.62q33 0 56.5-23.5t23.5-56.5q0-33-23.5-56.5t-56.5-23.5q-33 0-56.5 23.5t-23.5 56.5q0 33 23.5 56.5t56.5 23.5Zm0-80Zm0 384.62Z" />
        </svg>
        <span>Account</span>
      </button>
      <Provider store={store}>{isVisible && <AccountList />}</Provider>
    </section>
  );
}

export default Account;
