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
      <MainItems itemsName="Speedy Deals" itemsQuantity={7} />
      <MainItems itemsName="Low Cost" itemsQuantity={7} />
      <MainCategoryTemplate categoryName="Products" />
      <MainSubCategories categoryName="Products" />
      <MainItems itemsName="Popular Products" />
      <MainBrands />
      <MainItems itemsName="Hot Deals" itemsQuantity={7} />
      <MainCategoryTemplate categoryName="Meals" />
      <MainSubCategories categoryName="Meals" />
      <MainItems itemsName="Popular Meals" />
      <MainBrands />
      <MainItems itemsName="Hot Deals" itemsQuantity={7} />
      <MainCategoryTemplate categoryName="Services" />
      <MainSubCategories categoryName="Services" />
      <MainItems itemsName="Popular Services" />
      <MainBrands />
      <MainItems itemsName="Hot Deals" itemsQuantity={7} />
      <MainCategoryTemplate categoryName="Stores" />
      <MainSubCategories categoryName="Stores" />
      <MainItems itemsName="Popular Stores" />
      <MainBrands />
      <MainItems itemsName="Hot Deals" itemsQuantity={7} />
    </section>
  );
}

export default MainCategories;
