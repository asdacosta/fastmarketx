import React from "react";
import styles from "./MainServices.module.css";
import Image from "next/image";

function MainServices() {
  return (
    <section className={styles.mainServices}>
      <section className={styles.header}>
        <h3>Services</h3>
        <span>View All</span>
      </section>
      <section className={styles.serviceItems}>
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

export default MainServices;
