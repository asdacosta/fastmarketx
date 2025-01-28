import React from "react";
import styles from "./MainProducts.module.css";
import Image from "next/image";

function MainProducts() {
  return (
    <section className={styles.mainProducts}>
      <section className={styles.header}>
        <h3>Products</h3>
        <span>View All</span>
      </section>
      <section className={styles.productItems}>
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

export default MainProducts;
