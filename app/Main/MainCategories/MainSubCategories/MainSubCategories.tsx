import React from "react";
import styles from "./MainSubCategories.module.css";
import Image from "next/image";
import MainCategoryTemplate from "../MainCategoryTemplate/MainCategoryTemplate";

interface MainSubCategories {
  categoryName: string;
}

function MainSubCategories({ categoryName }: MainSubCategories) {
  const items = new Array(4).fill(1);

  const categoryClasses: { [key: string]: string } = {
    Products: styles.products,
    Services: styles.services,
    Meals: styles.meals,
    Stores: styles.stores,
  };

  return (
    <section className={styles.mainSubCategories}>
      {items.map((item, index) => {
        return (
          <section className={styles.subCategory} key={index}>
            <section
              className={`${styles.header} ${categoryClasses[categoryName]}`}
            >
              <span></span>
              <h3>SubCategory</h3>
            </section>
            <section className={styles.items}>
              <div className={styles.item}>
                <Image
                  quality={80}
                  draggable="false"
                  src="/mainImgs/products.avif"
                  alt="Store"
                  fill
                  className={styles.img}
                />
                <span className={styles.cardName}>Item Name</span>
              </div>
              <div className={styles.item}>
                <Image
                  quality={80}
                  draggable="false"
                  src="/mainImgs/products.avif"
                  alt="Store"
                  fill
                  className={styles.img}
                />
                <span className={styles.cardName}>Item Name</span>
              </div>
              <div className={styles.item}>
                <Image
                  quality={80}
                  draggable="false"
                  src="/mainImgs/products.avif"
                  alt="Store"
                  fill
                  className={styles.img}
                />
                <span className={styles.cardName}>Item Name</span>
              </div>
              <div className={styles.item}>
                <Image
                  quality={80}
                  draggable="false"
                  src="/mainImgs/products.avif"
                  alt="Store"
                  fill
                  className={styles.img}
                />
                <span className={styles.cardName}>Item Name</span>
              </div>
            </section>
          </section>
        );
      })}
    </section>
  );
}

export default MainSubCategories;
