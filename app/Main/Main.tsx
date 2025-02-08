import React from "react";
import styles from "./Main.module.css";
import Welcome from "./Welcome/Welcome";
import MainCategories from "./MainCategories/MainCategories";
import CartClient from "./Cart/CartClient";
import MenuClient from "./Menu/MenuClient";

function Main() {
  return (
    <main className={styles.main}>
      <CartClient />
      <MenuClient />
      <Welcome />
      <MainCategories />
    </main>
  );
}

export default Main;
