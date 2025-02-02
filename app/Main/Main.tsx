import React from "react";
import styles from "./Main.module.css";
import Welcome from "./Welcome/Welcome";
import MainCategories from "./MainCategories/MainCategories";
import Cart from "./Cart/Cart";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function Main() {
  const cartOpen = useSelector(
    (state: RootState) => state.cartDisplay.cartOpen
  );

  return (
    <main className={styles.main}>
      {cartOpen ? (
        <Cart />
      ) : (
        <>
          {" "}
          <Welcome />
          <MainCategories />
        </>
      )}
    </main>
  );
}

export default Main;
