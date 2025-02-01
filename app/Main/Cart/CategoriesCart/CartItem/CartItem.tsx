import React from "react";
import styles from "./CartItem.module.css";
import Image from "next/image";
import RemoveSave from "./RemoveSave/RemoveSave";

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
        <div className={styles.itemQuantity}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 200l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
          </svg>
          <span>1</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
        </div>
        <RemoveSave />
      </div>
    </section>
  );
}

export default CartItem;
