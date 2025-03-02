"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import MainCategoryTemplate from "@/app/Main/MainCategories/MainCategoryTemplate/MainCategoryTemplate";
import Header from "@/app/Header/Header";
import { notFound, useParams } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import MealItems from "./MealItems/MealItems";
import { findCategoryData } from "@/app/Main/MainCategories/findCategoryData";

const mainSubCategories = [
  "beverages",
  "bakery",
  "international",
  "native",
  "instant-and-snacks",
  "frozen-foods",
  "mealprep",
  // Beverages
  "juices-and-smoothies",
  "grains-and-porridge",
  "coffee-and-tea",
  "dairy-and-non-dairy",
  "native-drinks",
  // Bakery
  "breads",
  "pastries",
  // International
  "italian",
  "american",
  "grilled-and-bbq-dishes",
  // Native
  "complete-dishes",
  "rice-based-dishes",
  "corn-based-dishes",
  "cassava-and-yam-based-dishes",
  "stews-soups-and-sauces",
];

const allowedCategoryRoutes = [
  "beverages",
  "bakery",
  "international",
  "native",
  "instant-and-snacks",
  "frozen-foods",
  "vegan-and-vegetarian",
  "fresh-fruit-juices",
  "flavored-juices",
  "smoothie-mixes",
  "oatmeal",
  "cornmeal",
  "millet",
  "porridge",
  "tom-brown",
  "rice-water",
  "coffee",
  "tea",
  "fresh-milk-and-flavored-milk",
  "soy-milk",
  "hot-chocolate",
  "yogurt-drinks",
  "sobolo",
  "coconut-water",
  "palm-wine",
  "pito",
  "asaana",
  "brukina",
  "lamugin",
  "breads",
  "pastries",
  "other-pastries",
  "cakes",
  "cookies",
  "white-breads",
  "wheat-breads",
  "baguettes",
  "flat-breads",
  "pies",
  "spring-rolls",
  "samosa",
  "sausage-roll",
  "tarts",
  "rock-buns",
  "other-pastries",
  "coffee-and-tea",
  "juices-and-smoothies",
  "grains-and-porridge",
  "dairy-and-non-dairy",
  "native-drinks",
  "salads",
  "sandwiches-and-wraps",
  "soups-and-stews",
  "meal-kits",
  "italian",
  "american",
  "grilled-and-bbq-dishes",
  "pizza",
  "shawarma",
  "burger",
  "pasta-noodles-and-spaghetti",
  "grilled-meat",
  "grilled-fish",
  "bbq",
  "kebab",
  "meal-prep-subscriptions",
  "ice-cream",
  "complete-dishes",
  "other-complete-dishes",
  "rice-based-dishes",
  "corn-based-dishes",
  "other-corn-based-dishes",
  "cassava-and-yam-based-dishes",
  "other-cassava-and-yam-based-dishes",
  "stews-soups-and-sauces",
  "fufu-banku-and-soup",
  "banku-and-tilapia",
  "kelewele",
  "beans-and-plantain",
  "kenkey-and-fish",
  "yam-ampesi-and-palava-sauce-kontomire-stew",
  "tuo-zaafi",
  "jollof-rice",
  "plain-rice-with-stew",
  "fried-rice",
  "waakye",
  "rice-balls-omotuo",
  "kenkey",
  "banku",
  "other-rice-based-dishes",
  "fufu",
  "ampesi",
  "traditional-food-others",
  "light-soup",
  "groundnut-soup",
  "palm-nut-soup",
  "shito",
  "tomato-stew",
  "palava-sauce",
  "other-stews-soups-and-sauces",
];

const allowedItemsRoutes = ["speedy", "lowcost", "popular", "hotdeals"];

const itemsCount = new Array(27).fill(1);
const itemsPerPage = 10;

function page() {
  const [currentPage, setCurrentPage] = useState(1);
  const params = useParams();
  const category = params?.category as string;

  if (
    !allowedCategoryRoutes.includes(category) &&
    !allowedItemsRoutes.includes(category)
  )
    notFound();

  const totalPages = Math.ceil(itemsCount.length / itemsPerPage);

  const currentItems = itemsCount.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const subCategories = findCategoryData(category, "Meals");

  return (
    <>
      <Header />
      <section className={styles.page}>
        {allowedCategoryRoutes.includes(category) && (
          <section className={styles.categories}>
            {mainSubCategories.includes(category) && (
              <MainCategoryTemplate
                categoryName={category}
                subCategories={subCategories}
              />
            )}
          </section>
        )}
        <Provider store={store}>
          <MealItems currentItems={currentItems} />
        </Provider>
        <section className={styles.pagination}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <svg viewBox="0 0 320 512">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              disabled={currentPage === i + 1}
              className={styles.numbers}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
            <svg viewBox="0 0 320 512">
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </button>
        </section>
      </section>
    </>
  );
}

export default page;
