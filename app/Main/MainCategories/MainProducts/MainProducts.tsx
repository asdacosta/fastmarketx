import React from "react";
import styles from "./MainProducts.module.css";
import Image from "next/image";

function MainProducts() {
  const items = new Array(14).fill(1);

  return (
    <section className={styles.mainProducts}>
      <section className={styles.header}>
        <h3>Products</h3>
        <span>View All</span>
      </section>
      <section className={styles.productItems}>
        {items.map((item, index) => {
          return (
            <section key={index} className={styles.item}>
              <Image
                src="/mainImgs/products.avif"
                alt="Store"
                fill
                className={styles.img}
              />
              <span className={styles.categoryName}>Category Name</span>
            </section>
          );
        })}
      </section>
    </section>
  );
}

export default MainProducts;
