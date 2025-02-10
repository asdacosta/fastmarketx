import React from "react";
import Image from "next/image";
import styles from "./OrderItem.module.css";

function OrderItem() {
  return (
    <section className={styles.item}>
      <div>
        <Image src="/mainImgs/store.avif" alt="Som" fill />
      </div>
      <div className={styles.itemInfo}>
        <div className={styles.namePrice}>
          <span className={styles.itemName}>Product name is here</span>
        </div>
        <div className={styles.price}>
          <span>GH₵</span>
          <span>1000.45</span>
        </div>
        <div className={styles.accountName}>
          <span>Account Name</span>
        </div>
        <div className={styles.orderNumber}>
          <span>Order Number | 235</span>
        </div>
        <div className={styles.itemCount}>
          <span>Items | 3</span>
        </div>
        <div className={styles.date}>
          <span>Delivered on 2/02/2025</span>
          <div className={styles.links}>
            <span>Return</span>
            <span>Buy Again</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderItem;
