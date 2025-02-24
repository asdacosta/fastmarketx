"use client";
import React from "react";
import Categories from "./Categories/Categories";
import CardsBox from "./CardsBox/CardsBox";
import Extras from "./Extras/Extras";
import Promotion from "./Promotion/Promotion";
import styles from "./Welcome.module.css";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";

function Welcome() {
  return (
    <section className={styles.welcome}>
      <Categories />
      <Provider store={store}>
        <CardsBox />
      </Provider>
      <section className={styles.extrasBox}>
        <Extras />
        <Promotion />
      </section>
    </section>
  );
}

export default Welcome;
