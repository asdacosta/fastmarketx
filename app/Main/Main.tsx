import React from "react";
import styles from "./Main.module.css";
import { Categories } from "./Categories/Categories";
import { Extras } from "./Extras/Extras";
import { Promotion } from "./Promotion/Promotion";
import { CardsBox } from "./CardsBox/CardsBox";

function Main() {
  return (
    <main className={styles.main}>
      <Categories />
      <CardsBox />
      <section className={styles.extrasBox}>
        <Extras />
        <Promotion />
      </section>
    </main>
  );
}

export default Main;
