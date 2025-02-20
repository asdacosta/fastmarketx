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
      <MainItems itemsName="Popular Products" itemsQuantity={7} />
      <MainBrands />
      <MainItems itemsName="Hot Deals" itemsQuantity={7} />
      <MainCategoryTemplate categoryName="Meals" />
      <MainSubCategories categoryName="Meals" />
      <MainItems itemsName="Popular Meals" itemsQuantity={7} category="meal" />
      <MainBrands />
      <MainItems itemsName="Hot Deals" itemsQuantity={7} category="meal" />
      <MainCategoryTemplate categoryName="Services" />
      <MainSubCategories categoryName="Services" />
      <MainItems
        itemsName="Popular Services"
        itemsQuantity={7}
        category="service"
      />
      <MainBrands />
      <MainItems itemsName="Hot Deals" itemsQuantity={7} category="service" />
      <MainCategoryTemplate categoryName="Stores" />
      <MainSubCategories categoryName="Stores" />
      <MainItems itemsName="Popular Stores" itemsQuantity={7} />
      <MainBrands />
      <MainItems itemsName="Hot Deals" itemsQuantity={7} />
    </section>
  );
}

export default MainCategories;
