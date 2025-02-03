import React from "react";
import styles from "./Main.module.css";
import Welcome from "./Welcome/Welcome";
import MainCategories from "./MainCategories/MainCategories";
import Cart from "./Cart/Cart";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Menu from "./Menu/Menu";

function Main() {
  const componentOpen = useSelector(
    (state: RootState) => state.componentDisplay
  );

  return (
    <main className={styles.main}>
      {componentOpen.cartOpen ? (
        <Cart />
      ) : componentOpen.menuOpen ? (
        <Menu />
      ) : (
        <>
          <Welcome />
          <MainCategories />
        </>
      )}
    </main>
  );
}

export default Main;
