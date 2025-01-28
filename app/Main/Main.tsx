import React from "react";
import styles from "./Main.module.css";
import Welcome from "./Welcome/Welcome";
import MainCategories from "./MainCategories/MainCategories";

function Main() {
  return (
    <main className={styles.main}>
      <Welcome />
      <MainCategories />
    </main>
  );
}

export default Main;
