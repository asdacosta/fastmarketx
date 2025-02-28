"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Payment from "../Payment/Payment";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

function Complete() {
  const cartData = useSelector((state: RootState) => state.cart);

  return (
    <section className={styles.page}>
      <section className={styles.header}>
        <Link href="/" className={styles.logo}>
          <section className={styles.logoBox}>
            <Image
              draggable="false"
              src="/logo.png"
              alt="Store"
              fill
              className={styles.img}
            />
          </section>
        </Link>
      </section>
      <section className={styles.chosenBox}>
        <h2>Chosen Payment Method</h2>
        <section className={styles.chosen}>
          <div>
            <span>Telecel</span>
            <span>0501403974</span>
          </div>
          <Image
            draggable="false"
            src="/telecelLogo.jpg"
            alt="Telecel"
            width={30}
            height={30}
            className={styles.img}
          />
        </section>
      </section>
      <Payment change={true} />
      <Link href="cart/payment/pay" className={styles.payNow}>
        <span>Pay Now</span>
        <span>
          <em>GH₵</em> {cartData.totalPrice + 100}
        </span>
      </Link>
    </section>
  );
}

export default Complete;
