import React from "react";
import styles from "./CartItem.module.css";
import Image from "next/image";
import RemoveSave from "./RemoveSave/RemoveSave";
import ItemQuantity from "./ItemQuantity/ItemQuantity";

function CartItem() {
  return (
    <section className={styles.item}>
      <div>
        <Image src="/mainImgs/store.avif" alt="Som" fill />
      </div>
      <div className={styles.itemInfo}>
        <div className={styles.namePrice}>
          <span className={styles.itemName}>Product name is here</span>
          <div className={styles.price}>
            <span>GH₵</span>
            <span>1000.45</span>
          </div>
        </div>
        <div className={styles.accountStock}>
          <span className={styles.accountName}>Account Name</span>
          <span>•</span>
          <span className={styles.stock}>In Stock</span>
        </div>
        <ItemQuantity />
        <RemoveSave />
      </div>
    </section>
  );
}

export default CartItem;
