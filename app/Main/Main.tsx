import React from "react";
import styles from "./Main.module.css";
import { Categories } from "./Categories/Categories";
import Image from "next/image";
import Link from "next/link";
import { Extras } from "./Extras/Extras";
import { Promotion } from "./Promotion/Promotion";

function Main() {
  return (
    <main className={styles.main}>
      <Categories />
      <section className={styles.cardsBox}>
        <section className={styles.card}>
          <Image
            src="/mainImgs/store.avif"
            alt="Store"
            fill
            className={styles.img}
          />
          <span>Set up a store</span>
        </section>
        <section className={styles.card}>
          <Image
            src="/mainImgs/products.avif"
            alt="Store"
            fill
            className={styles.img}
          />
          <span>Explore services</span>
        </section>
        <section className={styles.card}>
          <Image
            src="/mainImgs/services.avif"
            alt="Store"
            fill
            className={styles.img}
          />
          <span>Discover Services</span>
        </section>
        <section className={styles.card}>
          <Image
            src="/mainImgs/foods.avif"
            alt="Store"
            fill
            className={styles.img}
          />
          <span>Order meals</span>
        </section>
      </section>
      <section className={styles.extrasBox}>
        <Extras />
        <Promotion />
      </section>
    </main>
  );
}

export default Main;
