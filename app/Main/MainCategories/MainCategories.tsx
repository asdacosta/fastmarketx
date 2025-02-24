import React from "react";
import styles from "./MainCategories.module.css";
import MainItems from "./MainItems/MainItems";
import MainCategoryTemplate from "./MainCategoryTemplate/MainCategoryTemplate";
import MainSubCategories from "./MainSubCategories/MainSubCategories";
import MainBrands from "./MainBrands/MainBrands";

function MainCategories() {
  return (
    <section className={styles.mainCategories}>
      <MainItems itemsName="Trending Products" url="/products/trending" />
      <MainItems
        itemsName="Speedy Deals"
        itemsQuantity={7}
        url="/products/speedy"
      />
      <MainItems
        itemsName="Low Cost"
        itemsQuantity={7}
        url="/products/lowcost"
      />
      <MainCategoryTemplate
        categoryName="Products"
        subCategories={[
          "electronics",
          "groceries",
          "fashion",
          "academic",
          "homeandkitchen",
          "beautyandhealth",
          "sports",
          "gamesandtoys",
          "automotive",
        ]}
      />
      <MainSubCategories
        categoryName="Products"
        subCategoryData={{
          Fashion: ["Clothing", "Footwear", "Accessories", "Bags"],
          Electronics: [
            "Phones & Accessories",
            "Computers & Tablets",
            "Audio & Photography",
            "Home Appliances",
          ],
          Groceries: [
            "Fresh Foods",
            "Kitchen Essentials",
            "Snacks & Sweet",
            "Drinks & Beverages",
          ],
          "Home & Kitchen": [
            "Furniture",
            "Home Decor",
            "Kitchen & Dining",
            "Bed & Bath",
          ],
        }}
      />
      <MainItems
        itemsName="Popular Products"
        itemsQuantity={7}
        url="/products/popular"
      />
      <MainBrands />
      <MainItems
        itemsName="Hot Deals"
        itemsQuantity={7}
        url="/products/hotdeals"
      />
      <MainCategoryTemplate
        categoryName="Meals"
        subCategories={[
          "beverages",
          "bakery",
          "international",
          "native",
          "instantandsnacks",
          "frozenfoods",
          "veganandvegetarian",
          "mealprep",
        ]}
      />
      <MainSubCategories
        categoryName="Meals"
        subCategoryData={{
          International: [
            "Pizza",
            "Shawarma",
            "Burger",
            "Pasta, Noodles & Spaghetti",
          ],
          Bakery: ["Breads", "Pastries", "Cakes", "Cookies"],
          Instant: [
            "Salads",
            "Sandwiches & Wraps",
            "Soups & Stews",
            "Meal Kits",
          ],
          Beverages: [
            "Coffee & Tea",
            "Juices & Smoothies",
            "Grains & Porridge",
            "Ice Cream",
          ],
        }}
      />
      <MainItems
        itemsName="Popular Meals"
        itemsQuantity={7}
        category="meal"
        url="/meals/popular"
      />
      <MainBrands />
      <MainItems
        itemsName="Hot Deals"
        itemsQuantity={7}
        category="meal"
        url="/meals/hotdeals"
      />
      <MainCategoryTemplate
        categoryName="Services"
        subCategories={[
          "beautyandwellness",
          "homeservices",
          "tech",
          "academic",
          "logistics",
          "events",
        ]}
      />
      <MainSubCategories
        categoryName="Services"
        subCategoryData={{
          "Beauty & Wellness": [
            "Hairdressing",
            "Manicures & Pedicures",
            "Haircuts & Styling",
            "Massage",
          ],
          Tech: [
            "Web/App Development",
            "Graphic Design",
            "IT support",
            "Repairs",
          ],
          Home: ["Cleaning", "Electrical", "Carpentry", "Plumbing"],
          Educational: ["Tutoring", "Online courses", "Programs", "Events"],
        }}
      />
      <MainItems
        itemsName="Popular Services"
        itemsQuantity={7}
        category="service"
        url="/services/popular"
      />
      <MainBrands />
      <MainItems
        itemsName="Hot Deals"
        itemsQuantity={7}
        category="service"
        url="/services/hotdeals"
      />
      <MainCategoryTemplate
        categoryName="Stores"
        subCategories={["Official"]}
      />
      <MainSubCategories
        categoryName="Stores"
        subCategoryData={{
          Official: [
            "Cell Phones",
            "Phone Accessories",
            "Storage & Memory",
            "T-Shirts",
          ],
        }}
      />
      <MainItems
        itemsName="Popular Stores"
        itemsQuantity={7}
        url="/products/popular"
      />
      <MainBrands />
      <MainItems
        itemsName="Hot Deals"
        itemsQuantity={7}
        url="/products/hotdeals"
      />
    </section>
  );
}

export default MainCategories;
