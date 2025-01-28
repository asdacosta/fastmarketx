import React from "react";
import styles from "./Main.module.css";
import Welcome from "./Welcome/Welcome";

function Main() {
  return (
    <main className={styles.main}>
      <Welcome />
    </main>
  );
}

export default Main;
