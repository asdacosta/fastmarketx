import Image from "next/image";
import React from "react";
import styles from "./MainCategoryTemplate.module.css";

interface MainCategoryTemplateProps {
  categoryName: string;
}

function MainCategoryTemplate({ categoryName }: MainCategoryTemplateProps) {
  const items = new Array(14).fill(1);

  const categoryClasses: { [key: string]: string } = {
    Products: styles.products,
    Services: styles.services,
    Meals: styles.meals,
    Stores: styles.stores,
  };

  return (
    <section className={styles.mainCategory}>
      <section
        className={`${styles.header} ${categoryClasses[categoryName] || ""}`}
      >
        <h3>{categoryName}</h3>
      </section>
      <section className={styles.categoryItems}>
        {items.map((item, index) => {
          return (
            <section key={index} className={styles.item}>
              <Image
                src="/mainImgs/products.avif"
                alt="Store"
                fill
                className={styles.img}
              />
              <span className={styles.cardName}>Card Name</span>
            </section>
          );
        })}
      </section>
    </section>
  );
}

export default MainCategoryTemplate;
