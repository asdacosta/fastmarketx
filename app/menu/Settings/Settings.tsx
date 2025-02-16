import React, { useState } from "react";
import styles from "./Settings.module.css";
import Gender from "@/app/signup/Gender/Gender";

function Settings() {
  const [clicked, setClicked] = useState({ profile: false, pwd: false });

  return (
    <section className={styles.settings}>
      <section className={styles.box}>
        <div
          className={`${styles.expander} ${
            clicked.profile ? styles.active : ""
          }`}
          onClick={() =>
            setClicked((prev) => ({ ...prev, profile: !prev.profile }))
          }
        >
          <span>Profile Details</span>
          <svg viewBox="0 0 320 512">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </div>
        <div className={styles.content}>
          <input type="text" placeholder="Name" value="One real Ever" />
          <Gender />
          <input
            type="email"
            placeholder="Email"
            value="ever@gmail.com"
            className={styles.email}
          />
          <input type="tel" placeholder="Mobile number" />
        </div>
      </section>
      <section className={styles.box}>
        <div
          className={`${styles.expander} ${clicked.pwd ? styles.active : ""}`}
          onClick={() => setClicked((prev) => ({ ...prev, pwd: !prev.pwd }))}
        >
          <span>Change Password</span>
          <svg viewBox="0 0 320 512">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </div>
        <div className={styles.content}>
          <input type="password" value="Anything ah" />
        </div>
      </section>
      <button className={styles.delete}>Delete Account</button>
    </section>
  );
}

export default Settings;
