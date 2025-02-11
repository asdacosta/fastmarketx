import React from "react";
import styles from "./Products.module.css";
import ItemTemplate from "@/app/ItemTemplate/ItemTemplate";

function Products() {
  return (
    <section className={styles.products}>
      <section className={styles.all}>
        <h2>All Products</h2>
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
      <section className={styles.new}>
        <h2>Newly Added</h2>
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
        </div>
      </section>
      <section className={styles.old}>
        <h2>Old</h2>
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

export default Products;
