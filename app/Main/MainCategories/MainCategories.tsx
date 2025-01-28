import React from "react";
import styles from "./MainCategories.module.css";
import MainProducts from "./MainProducts/MainProducts";
import MainServices from "./MainServices/MainServices";
import MainMeals from "./MainMeals/MainMeals";
import MainStores from "./MainStores/MainStores";
import MainTrends from "./MainTrends/MainTrends";

function MainCategories() {
  return (
    <section className={styles.mainCategories}>
      <MainTrends />
      <MainProducts />
      <MainServices />
      <MainMeals />
      <MainStores />
    </section>
  );
}

export default MainCategories;
