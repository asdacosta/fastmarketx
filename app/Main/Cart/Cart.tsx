import React from "react";
import styles from "./Cart.module.css";
import Link from "next/link";

function Cart() {
  return (
    <section className={styles.cart}>
      <section className={styles.shoppingCart}>
        <section className={styles.header}>
          <div className={styles.title}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              width="1.6rem"
            >
              <path d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z" />
            </svg>
            <h3>Shopping Cart</h3>
          </div>
          <span className={styles.itemsCount}>Items | 10</span>
        </section>
        <section className={styles.items}>
          <section className={styles.emptyList}>
            <span>Cart is empty</span>
            <Link href="/" className={styles.addItems}>
              Shop items
            </Link>
          </section>
          {/* <section className={styles.productsList}>
            <h4>Products</h4>
            <Link href="/" className={styles.addItems}>
              Add more
            </Link>
          </section>
          <section className={styles.mealsList}>
            <h4>Meals</h4>
            <Link href="/" className={styles.addItems}>
              Add more
            </Link>
          </section>
          <section className={styles.servicesList}>
            <h4>Services</h4>
            <Link href="/" className={styles.addItems}>
              Add more
            </Link>
          </section> */}
        </section>
      </section>
      <section className={styles.cartSummary}>
        <section className={styles.header}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width="1rem"
          >
            <path d="M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z" />
          </svg>
          <h3>Cart Summary</h3>
        </section>
        <section></section>
      </section>
    </section>
  );
}

export default Cart;
