import React from "react";
import styles from "./Promotion.module.css";
import Item from "../../MainCategories/Item/Item";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { getNextAvailableItem } from "../../MainCategories/Item/getNextAvailableItem";

function Promotion() {
  const cartData = useSelector((state: RootState) => state.cart);
  const itemData = getNextAvailableItem(cartData.items);

  return (
    <section className={styles.promotion}>
      <section>
        <h2>Today's Special Offers</h2>
      </section>
      <section className={styles.items}>
        <section className={styles.item}>
          <Item itemData={itemData} />
        </section>
        <section className={styles.item}>
          <Item itemData={itemData} />
        </section>
      </section>
    </section>
  );
}

export default Promotion;
