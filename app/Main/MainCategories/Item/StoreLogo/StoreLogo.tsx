"use client";
import React, { useState } from "react";
import styles from "./StoreLogo.module.css";
import { storeIcons } from "../StoreIcons";

function StoreLogo() {
  const [storeColor, setStoreColor] = useState("rgba(232, 205, 4, 1)");
  const [storeIconIndex, setStoreIconIndex] = useState(10);

  return (
    <div className={styles.storeName}>
      <div
        className={`${styles.storeLogo} ${styles.officialColor} ${styles.officialIcon}`}
        style={{ background: storeColor }}
      >
        {React.cloneElement(storeIcons.stores[storeIconIndex], {
          fill: "black",
          width: 16,
          height: 16,
          stroke: "black",
          strokeWidth: 10,
          style: {
            filter: `drop-shadow(2px 2px 5px #000)`,
          },
        })}
      </div>
      <span>Official Store</span>
    </div>
  );
}

export default StoreLogo;
