import React from "react";
import styles from "./Orders.module.css";
import OrderItem from "./OrderItem/OrderItem";

function Orders() {
  const items = new Array(5).fill(1);

  return (
    <section className={styles.orders}>
      <h3>Orders</h3>
      <section className={styles.itemsContainer}>
        <section className={styles.sectionLinks}>
          <span>Active</span>
          <span>Delivered</span>
          <span>Canceled</span>
        </section>
        <section className={styles.items}>
          {items.map((item) => (
            <OrderItem />
          ))}
        </section>
      </section>
    </section>
  );
}

export default Orders;
