import React from "react";
import styles from "./MainStores.module.css";
import Image from "next/image";

function MainStores() {
  return (
    <section className={styles.mainStores}>
      <section className={styles.header}>
        <h3>Stores</h3>
        <span>View All</span>
      </section>
      <section className={styles.storeItems}>
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

export default MainStores;
