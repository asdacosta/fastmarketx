import React from "react";
import styles from "./MainCategories.module.css";
import MainItems from "./MainItems/MainItems";
import MainCategoryTemplate from "./MainCategoryTemplate/MainCategoryTemplate";
import MainSubCategories from "./MainSubCategories/MainSubCategories";
import MainBrands from "./MainBrands/MainBrands";

function MainCategories() {
  return (
    <section className={styles.mainCategories}>
      <MainItems itemsName="Trending Products" />
      <MainCategoryTemplate categoryName="Products" />
      <MainSubCategories categoryName="Products" />
      <MainItems itemsName="Popular Products" />
      <MainBrands />
      <MainCategoryTemplate categoryName="Meals" />
      <MainSubCategories categoryName="Meals" />
      <MainItems itemsName="Popular Meals" />
      <MainBrands />
      <MainCategoryTemplate categoryName="Services" />
      <MainSubCategories categoryName="Services" />
      <MainItems itemsName="Popular Services" />
      <MainBrands />
      <MainCategoryTemplate categoryName="Stores" />
      <MainSubCategories categoryName="Stores" />
      <MainItems itemsName="Popular Stores" />
      <MainBrands />
    </section>
  );
}

export default MainCategories;
