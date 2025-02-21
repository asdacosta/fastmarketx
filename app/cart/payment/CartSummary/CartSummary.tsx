import React from "react";
import styles from "./CartSummary.module.css";
import Link from "next/link";

function CartSummary() {
  return (
    <section className={styles.cartSummary}>
      <section className={styles.header}>
        <svg viewBox="0 0 384 512" width="1rem">
          <path d="..." />
        </svg>
        <h3>Cart Summary</h3>
      </section>
      <section className={styles.subtotal}>
        <section className={styles.amount}>
          <span>Subtotal</span>
          <div className={styles.price}>
            <span>GH₵</span>
            <span>1000</span>
          </div>
        </section>
        <Link href="" className={styles.payButton}>
          <svg viewBox="0 0 576 512">
            <path d="..." />
          </svg>
          <span>Proceed to Payment</span>
        </Link>
      </section>
    </section>
  );
}

export default CartSummary;
