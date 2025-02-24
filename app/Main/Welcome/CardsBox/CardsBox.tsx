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
        <section className={styles.adInfo}>
          <section className={styles.header}>
            <h3>Promoted</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM229.5 173.3l72 144c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7L253.2 328l-90.3 0-5.4 10.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l72-144c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3zM208 237.7L186.8 280l42.3 0L208 237.7zM392 256a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm24-43.9l0-28.1c0-13.3 10.7-24 24-24s24 10.7 24 24l0 96 0 48c0 13.3-10.7 24-24 24c-6.6 0-12.6-2.7-17-7c-9.4 4.5-19.9 7-31 7c-39.8 0-72-32.2-72-72s32.2-72 72-72c8.4 0 16.5 1.4 24 4.1z" />
            </svg>
          </section>
          <section className={styles.otherInfo}>
            <section className={styles.primaryInfo}>
              <div>
                <span>Type</span>
                <span>|</span>
                <span>Product</span>
              </div>
              <div>
                <span>Ends In</span>
                <span>|</span>
                <span>8 hours</span>
              </div>
              <div>
                <span>Items Left</span>
                <span>|</span>
                <span>30</span>
              </div>
              <div>
                <span>Discount</span>
                <span>|</span>
                <span>70%</span>
              </div>
              <span>Delivery Available</span>
              <span>⭐⭐⭐⭐⭐</span>
            </section>
            <section className={styles.secInfo}>
              <Link href="/">Shop Now</Link>
              <Link href="/">Related Deals</Link>
            </section>
          </section>
        </section>
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
