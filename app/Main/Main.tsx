"use client";
import React from "react";
import styles from "./Main.module.css";
import Welcome from "./Welcome/Welcome";
import MainCategories from "./MainCategories/MainCategories";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function Main() {
  return (
    <main className={styles.main}>
      <Welcome />
      <Provider store={store}>
        <MainCategories />
      </Provider>
    </main>
  );
}

export default Main;
