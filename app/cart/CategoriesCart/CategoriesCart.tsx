import React from "react";
import styles from "./CategoriesCart.module.css";
import Link from "next/link";
import Image from "next/image";
import CartItem from "./CartItem/CartItem";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

function CategoryCart() {
  const cartData = useSelector((state: RootState) => state.cart);

  return (
    <section className={styles.categoriesCart}>
      <section className={styles.productsList}>
        <h4>Products</h4>
        <section className={styles.list}>
          {cartData.items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </section>
        <section className={styles.listEnd}>
          <Link href="/products" className={styles.addItems}>
            Shop more
          </Link>
          <div>
            <div className={styles.price}>
              <span>Products Subtotal | </span>
              <span>GH₵</span>
              <span>{cartData.totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </section>
      </section>
      <section className={styles.mealsList}>
        <h4>Meals</h4>
        <section className={styles.list}></section>
        <Link href="/meals" className={styles.addItems}>
          Shop more
        </Link>
      </section>
      <section className={styles.servicesList}>
        <h4>Services</h4>
        <section className={styles.list}></section>
        <Link href="/services" className={styles.addItems}>
          Shop more
        </Link>
      </section>
    </section>
  );
}

export default CategoryCart;
