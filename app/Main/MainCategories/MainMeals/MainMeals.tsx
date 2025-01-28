import React from "react";
import styles from "./MainMeals.module.css";
import Image from "next/image";

function MainMeals() {
  return (
    <section className={styles.mainMeals}>
      <section className={styles.header}>
        <h3>Meals</h3>
        <span>View All</span>
      </section>
      <section className={styles.mealItems}>
        <section>
          <Image
            src="/mainImgs/products.avif"
            alt="Store"
            fill
            className={styles.img}
          />
          <span></span>
        </section>
        <section>
          <Image
            src="/mainImgs/products.avif"
            alt="Store"
            fill
            className={styles.img}
          />
          <span></span>
        </section>
        <section>
          <Image
            src="/mainImgs/products.avif"
            alt="Store"
            fill
            className={styles.img}
          />
          <span></span>
        </section>
        <section>
          <Image
            src="/mainImgs/products.avif"
            alt="Store"
            fill
            className={styles.img}
          />
          <span></span>
        </section>
        <section>
          <Image
            src="/mainImgs/products.avif"
            alt="Store"
            fill
            className={styles.img}
          />
          <span></span>
        </section>
      </section>
    </section>
  );
}

export default MainMeals;
