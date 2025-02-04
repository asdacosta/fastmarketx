import React from "react";
import styles from "./WishList.module.css";
import WishListItem from "./WishLIstItem/WishListItem";

function WishList() {
  const items = new Array(5).fill(1);

  return (
    <section className={styles.wishlist}>
      <h3>Wishlist | 0</h3>
      <section className={styles.items}>
        {items.map((item) => (
          <WishListItem />
        ))}
      </section>
    </section>
  );
}

export default WishList;
