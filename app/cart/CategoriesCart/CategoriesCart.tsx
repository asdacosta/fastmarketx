import React from "react";
import styles from "./CategoriesCart.module.css";
import Link from "next/link";
import Image from "next/image";
import CartItem from "./CartItem/CartItem";

function CategoryCart() {
  return (
    <section className={styles.categoriesCart}>
      <section className={styles.productsList}>
        <h4>Products</h4>
        <section className={styles.list}>
          <CartItem />
          <CartItem />
        </section>
        <section className={styles.listEnd}>
          <Link href="/" className={styles.addItems}>
            Shop more
          </Link>
          <div>
            <div className={styles.price}>
              <span>Products Subtotal | </span>
              <span>GH₵</span>
              <span>1000.45</span>
            </div>
          </div>
        </section>
      </section>
      <section className={styles.mealsList}>
        <h4>Meals</h4>
        <section className={styles.list}></section>
        <Link href="/" className={styles.addItems}>
          Shop more
        </Link>
      </section>
      <section className={styles.servicesList}>
        <h4>Services</h4>
        <section className={styles.list}></section>
        <Link href="/" className={styles.addItems}>
          Shop more
        </Link>
      </section>
    </section>
  );
}

export default CategoryCart;
