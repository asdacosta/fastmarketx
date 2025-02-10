import React from "react";
import Image from "next/image";
import styles from "./WishListItem.module.css";

function WishListItem() {
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
        <div className={styles.links}>
          <div className={styles.accountStock}>
            <span className={styles.accountName}>Account Name</span>
            <span>•</span>
            <span className={styles.stock}>In Stock</span>
          </div>
          <div className={styles.removeAdd}>
            <div className={styles.remove}>
              <svg
                viewBox="0 0 448 512"
                width="0.65rem"
                role="img"
                aria-label="Remove"
              >
                <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
              <span>Remove</span>
            </div>
            <div className={styles.add}>Add to Cart</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WishListItem;
