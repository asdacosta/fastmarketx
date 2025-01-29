import React from "react";
import styles from "./MainCategories.module.css";
import MainTrends from "./MainTrends/MainTrends";
import MainCategoryTemplate from "./MainCategoryTemplate/MainCategoryTemplate";

function MainCategories() {
  return (
    <section className={styles.mainCategories}>
      <MainTrends />
      <MainCategoryTemplate categoryName="Products" />
      <MainCategoryTemplate categoryName="Services" />
      <MainCategoryTemplate categoryName="Meals" />
      <MainCategoryTemplate categoryName="Stores" />
    </section>
  );
}

export default MainCategories;
