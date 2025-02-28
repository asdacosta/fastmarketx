"use client";
import React, { useState } from "react";
import styles from "./CartSummary.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

function CartSummary() {
  const cartData = useSelector((state: RootState) => state.cart);
  const [deliveryFee, setDeliveryFee] = useState(100);

  return (
    <section className={styles.cartSummary}>
      <section className={styles.header}>
        <svg viewBox="0 0 384 512" width="1rem">
          <path d="M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z" />
        </svg>
        <h3>Cart Summary</h3>
      </section>
      <section className={styles.subtotal}>
        <section className={styles.amount}>
          <span>Items Cost</span>
          <div className={styles.price}>
            <span>GH₵</span>
            <span>{cartData.totalPrice}</span>
          </div>
        </section>
        <section className={styles.amount}>
          <span>Delivery Fee</span>
          <div className={styles.price}>
            <span>GH₵</span>
            <span>{deliveryFee}</span>
          </div>
        </section>
        <section className={styles.amount}>
          <span>Total</span>
          <div className={styles.price}>
            <span>GH₵</span>
            <span>{(cartData.totalPrice + deliveryFee).toFixed(2)}</span>
          </div>
        </section>
      </section>
    </section>
  );
}

export default CartSummary;
