import React from "react";
import styles from "./MainCategories.module.css";
import MainItems from "./MainItems/MainItems";
import MainCategoryTemplate from "./MainCategoryTemplate/MainCategoryTemplate";
import MainSubCategories from "./MainSubCategories/MainSubCategories";
import MainBrands from "./MainBrands/MainBrands";

function MainCategories() {
  return (
    <section className={styles.mainCategories}>
      <MainItems
        itemsQuantity={7}
        itemsName="Trending Products"
        url="/products/trending"
      />
      <MainItems
        itemsName="Smart Picks for You"
        url="/products/trending"
        itemsQuantity={7}
      />
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
          "home-and-kitchen",
          "beauty-and-health",
          "sports",
          "games-and-toys",
          "automotive",
        ]}
      />
      <MainSubCategories
        categoryName="Products"
        subCategoryData={{
          fashion: [
            "unisex-clothing",
            "footwear",
            "fashion-accessories",
            "bags",
          ],
          electronics: [
            "phone-accessories",
            "computers-and-tablets",
            "audio-and-photography",
            "kitchen-appliances",
          ],
          groceries: [
            "fresh-goods",
            "kitchen-essentials",
            "snacks-and-sweet",
            "drinks-and-beverages",
          ],
          "home-and-kitchen": [
            "furniture",
            "home-decor",
            "kitchen-and-dining",
            "bed-and-bath",
          ],
        }}
      />
      <MainItems
        itemsName="Most Popular Products"
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
          "instant-and-snacks",
          "frozen-foods",
          "vegan-and-vegetarian",
          "meal-prep",
        ]}
      />
      <MainSubCategories
        categoryName="Meals"
        subCategoryData={{
          international: [
            "pizza",
            "shawarma",
            "burger",
            "pasta-noodles-and-spaghetti",
          ],
          bakery: ["breads", "pastries", "cakes", "cookies"],
          "instant-and-snacks": [
            "salads",
            "sandwiches-and-wraps",
            "soups-and-stews",
            "meal-prep",
          ],
          beverages: [
            "coffee-and-tea",
            "juices-and-smoothies",
            "grains-and-porridge",
            "ice-cream",
          ],
        }}
      />
      <MainItems
        itemsName="Most Popular Meals"
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
          "beauty-and-wellness",
          "home",
          "tech",
          "academic",
          "logistics",
          "events",
        ]}
      />
      <MainSubCategories
        categoryName="Services"
        subCategoryData={{
          "beauty-and-wellness": [
            "hairdressing",
            "manicures-and-pedicures",
            "haircuts-and-styling",
            "massage",
          ],
          tech: [
            "web-app-development",
            "graphic-design",
            "it-support",
            "repairs",
          ],
          home: ["cleaning", "electrical", "carpentry", "plumbing"],
          "academic-services": [
            "tutoring",
            "online-courses",
            "programs",
            "events",
          ],
        }}
      />
      <MainItems
        itemsName="Most Popular Services"
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
            "cell-phones",
            "phone-accessories",
            "storage-and-memory",
            "t-shirts",
          ],
        }}
      />
      <MainItems
        itemsName="Most Popular Stores"
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
