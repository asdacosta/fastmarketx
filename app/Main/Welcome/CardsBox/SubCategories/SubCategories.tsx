import React from "react";
import styles from "./SubCategories.module.css";
import Link from "next/link";
import { categoriesData } from "@/app/Main/MainCategories/categoriesData";

export const getSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\//g, "-")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
};

function SubCategories({
  categoryDetails,
}: {
  categoryDetails: {
    category: string;
    subCategory: string;
  };
}) {
  const { category, subCategory } = categoryDetails;

  // Fetch the selected category and subCategory data
  const subCategoryData = categoriesData[category]?.[subCategory];

  return (
    <section className={styles.container}>
      {subCategoryData ? (
        <div className={styles.listContainer}>
          {typeof subCategoryData === "object" &&
            Object.entries(subCategoryData).map(([key, items]) => (
              <div key={key} className={styles.subCategory}>
                <Link
                  href={`/${categoryDetails.category.toLowerCase()}/${getSlug(
                    key
                  )}`}
                >
                  <h3 className={styles.subCategoryTitle}>{key}</h3>
                </Link>
                {Array.isArray(items) && items.length > 0 && (
                  <div className={styles.itemList}>
                    {items.map((item: string) => (
                      <Link
                        href={`/${categoryDetails.category.toLowerCase()}/${getSlug(
                          item
                        )}`}
                        key={item}
                        className={styles.item}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      ) : (
        <p className={styles.errorMessage}>Subcategory not found</p>
      )}
    </section>
  );
}

export default SubCategories;
