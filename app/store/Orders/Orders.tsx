import React from "react";
import styles from "./Orders.module.css";
import ItemTemplate from "@/app/ItemTemplate/ItemTemplate";

function Orders() {
  return (
    <section className={styles.orders}>
      <section className={styles.details}>
        <h2>Orders Summary</h2>
        <div>
          <span>Last week orders • 10</span>
          <span>Last month orders • 30</span>
        </div>
      </section>
      <section className={styles.pending}>
        <h2>Pending Orders</h2>
        <div className={styles.items}>
          <ItemTemplate
            itemsQuantity={1}
            extraDetails={["Quantity: 3", "Date Placed: 2/02/2025"]}
          />
          <ItemTemplate
            itemsQuantity={1}
            extraDetails={["Quantity: 3", "Date Placed: 2/02/2025"]}
          />
          <ItemTemplate
            itemsQuantity={1}
            extraDetails={["Quantity: 3", "Date Placed: 2/02/2025"]}
          />
          <ItemTemplate
            itemsQuantity={1}
            extraDetails={["Quantity: 3", "Date Placed: 2/02/2025"]}
          />
        </div>
      </section>
      <section className={styles.completed}>
        <h2>Completed Orders</h2>
        <div className={styles.items}>
          <ItemTemplate
            itemsQuantity={1}
            extraDetails={["Quantity: 3", "Date Completed: 2/02/2025"]}
          />
        </div>
      </section>
    </section>
  );
}

export default Orders;
