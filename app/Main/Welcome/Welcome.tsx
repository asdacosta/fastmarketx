import React from "react";
import Categories from "./Categories/Categories";
import CardsBox from "./CardsBox/CardsBox";
import Extras from "./Extras/Extras";
import Promotion from "./Promotion/Promotion";
import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <section className={styles.welcome}>
      <Categories />
      <CardsBox />
      <section className={styles.extrasBox}>
        <Extras />
        <Promotion />
      </section>
    </section>
  );
}

export default Welcome;
