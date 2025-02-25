import React from "react";
import styles from "./CardsBox.module.css";
import Image from "next/image";
import Link from "next/link";
import Ad from "./Ad/Ad";
import { useDispatch } from "react-redux";
import { setMenu } from "@/app/redux/slices/MenuUiSlice";

function CardsBox() {
  const menuDispatch = useDispatch();

  return (
    <section className={styles.cardsBox}>
      <section className={styles.ad}>
        <Ad />
      </section>
      <section className={styles.cards}>
        <Link
          href="/menu"
          onClick={() => menuDispatch(setMenu("CreateStore"))}
          className={styles.card}
        >
          <Image
            draggable="false"
            src="/mainImgs/store.avif"
            alt="Store"
            fill
            className={styles.img}
          />
          <span>Set up a store</span>
        </Link>
        <Link href="/products" className={styles.card}>
          <Image
            draggable="false"
            src="/mainImgs/products.avif"
            alt="Store"
            fill
            className={styles.img}
          />
          <span>Explore products</span>
        </Link>
        <Link href="/meals" className={styles.card}>
          <Image
            draggable="false"
            src="/mainImgs/foods.avif"
            alt="Store"
            fill
            className={styles.img}
          />
          <span>Order meals</span>
        </Link>
        <Link href="/services" className={styles.card}>
          <Image
            draggable="false"
            src="/mainImgs/services.avif"
            alt="Store"
            fill
            className={styles.img}
          />
          <span>Discover Services</span>
        </Link>
      </section>
    </section>
  );
}

export default CardsBox;
