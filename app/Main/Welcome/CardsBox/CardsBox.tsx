import React from "react";
import styles from "./CardsBox.module.css";
import Image from "next/image";

function CardsBox() {
  return (
    <section className={styles.cardsBox}>
      <section className={styles.card}>
        <Image
          draggable="false"
          src="/mainImgs/store.avif"
          alt="Store"
          fill
          className={styles.img}
        />
        <span>Set up a store</span>
      </section>
      <section className={styles.card}>
        <Image
          draggable="false"
          src="/mainImgs/products.avif"
          alt="Store"
          fill
          className={styles.img}
        />
        <span>Explore services</span>
      </section>
      <section className={styles.card}>
        <Image
          draggable="false"
          src="/mainImgs/services.avif"
          alt="Store"
          fill
          className={styles.img}
        />
        <span>Discover Services</span>
      </section>
      <section className={styles.card}>
        <Image
          draggable="false"
          src="/mainImgs/foods.avif"
          alt="Store"
          fill
          className={styles.img}
        />
        <span>Order meals</span>
      </section>
    </section>
  );
}

export default CardsBox;
