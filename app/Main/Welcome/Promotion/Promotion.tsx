import React from "react";
import styles from "./Promotion.module.css";
import Item from "../../MainCategories/Item/Item";

function Promotion() {
  return (
    <section className={styles.promotion}>
      <section>
        <h2>Today's Special Offer</h2>
      </section>
      <section className={styles.item}>
        <Item />
      </section>
    </section>
  );
}

export default Promotion;
