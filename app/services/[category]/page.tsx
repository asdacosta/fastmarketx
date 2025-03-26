"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import MainCategoryTemplate from "@/app/Main/MainCategories/MainCategoryTemplate/MainCategoryTemplate";
import Header from "@/app/Header/Header";
import { notFound, useParams } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import ServiceItems from "./ServiceItems/ServiceItems";
import { findCategoryData } from "@/app/Main/MainCategories/findCategoryData";

const mainSubCategories = [
  "beauty-and-wellness",
  "home",
  "tech",
  "academic-services",
  "logistics",
  "events",
];

const allowedCategoryRoutes = [
  "beauty-and-wellness",
  "home",
  "tech",
  "academic-services",
  "logistics",
  "events",
  "hairdressing",
  "haircuts-and-styling",
  "manicures-and-pedicures",
  "massage",
  "facials",
  "cleaning",
  "plumbing-and-electrical",
  "carpentry",
  "tech-services",
  "web-app-development",
  "graphic-design",
  "it-support",
  "repairs",
  "tutoring",
  "online-courses",
  "programs",
  "logistics",
  "moving",
  "delivery",
  "events",
];

const allowedItemsRoutes = ["speedy", "lowcost", "popular", "hotdeals", "new"];

const itemsCount = new Array(27).fill(1);
const itemsPerPage = 10;

function Page() {
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

  const subCategories = findCategoryData(category, "Services");

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
          <ServiceItems currentItems={currentItems} />
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

export default Page;
