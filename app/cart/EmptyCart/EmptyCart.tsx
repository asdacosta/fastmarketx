import React from "react";
import styles from "./EmptyCart.module.css";
import Link from "next/link";

function EmptyCart() {
  return (
    <section className={styles.emptyCart}>
      <span>Cart is empty</span>
      <Link href="/products" className={styles.addItems}>
        <svg role="img" viewBox="0 0 576 512">
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        </svg>
        <span>Shop special deals</span>
      </Link>
      <Link href="/" className={styles.addItems}>
        <svg role="img" viewBox="0 0 576 512">
          <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 160.4c0 35.3 28.7 64 64 64l102.3 0-31.3-52.2c-4.1-6.8-2.6-15.5 3.5-20.5L288 368l-60.2-82.8c-10.9-15 8.2-33.5 22.8-22l117.9 92.6c8 6.3 8.2 18.4 .4 24.9L288 448l38.4 64 122.1 0c35.5 0 64.2-28.8 64-64.3l-.7-160.2 32 0z" />
        </svg>
        <span>Home</span>
      </Link>
    </section>
  );
}

export default EmptyCart;
