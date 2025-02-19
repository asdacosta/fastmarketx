"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import MainCategoryTemplate from "@/app/Main/MainCategories/MainCategoryTemplate/MainCategoryTemplate";
import Item from "@/app/Main/MainCategories/Item/Item";
import Header from "@/app/Header/Header";
import { notFound, useParams } from "next/navigation";

const allowedRoutes = [
  "beverages",
  "bakery",
  "international",
  "native",
  "instantandsnacks",
  "frozenfoods",
  "veganandvegetarian",
  "mealprep",
];

const itemsCount = new Array(27).fill(1);
const itemsPerPage = 10;

function page() {
  const [currentPage, setCurrentPage] = useState(1);
  const params = useParams();
  const category = params?.category as string;

  if (!allowedRoutes.includes(category)) notFound();

  const totalPages = Math.ceil(itemsCount.length / itemsPerPage);

  const currentItems = itemsCount.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Header />
      <section className={styles.page}>
        <section className={styles.categories}>
          <MainCategoryTemplate categoryName={category} />
        </section>
        <section className={styles.items}>
          {currentItems.map((_, index) => (
            <Item key={index} />
          ))}
        </section>
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
