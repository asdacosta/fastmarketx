import React from "react";
import styles from "./MainSubCategories.module.css";
import Image from "next/image";
import Link from "next/link";
import { CategoryDetails } from "../CategoryDetails/CategoryDetails";

interface MainSubCategories {
  categoryName: string;
  subCategoryData: { [name: string]: string[] };
}

function MainSubCategories({
  categoryName,
  subCategoryData,
}: MainSubCategories) {
  const categoryClasses: { [key: string]: string } = {
    Products: styles.products,
    Services: styles.services,
    Meals: styles.meals,
    Stores: styles.stores,
  };

  return (
    <section className={styles.mainSubCategories}>
      {Object.entries(subCategoryData).map(([key, values]) => (
        <section className={styles.subCategory} key={key}>
          <section
            className={`${styles.header} ${categoryClasses[categoryName]}`}
          >
            <h3>{CategoryDetails[key]?.name}</h3>
            <Link
              href={`/${categoryName.toLowerCase()}/${
                key === "homeservices" || key === "academicservices"
                  ? key.replace("services", "")
                  : key
              }`}
              className={styles.viewAll}
            >
              View All
            </Link>
          </section>
          <section className={styles.items}>
            {values.map((value) => (
              <Link
                key={value}
                href={`/${categoryName.toLowerCase()}/${value}`}
              >
                <div className={styles.item}>
                  <Image
                    quality={80}
                    draggable="false"
                    src="/mainImgs/products.avif"
                    alt="Store"
                    fill
                    className={styles.img}
                  />
                  <span className={styles.cardName}>
                    {CategoryDetails[value]?.name}
                  </span>
                </div>
              </Link>
            ))}
          </section>
        </section>
      ))}
    </section>
  );
}

export default MainSubCategories;
