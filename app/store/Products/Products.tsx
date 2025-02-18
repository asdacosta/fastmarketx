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
            extraDetails={["Quantity: 3"]}
            buttons={["Promote"]}
          />
          <ItemTemplate
            itemsQuantity={1}
            extraDetails={["Quantity: 3"]}
            buttons={["Promote"]}
          />
          <ItemTemplate
            itemsQuantity={1}
            extraDetails={["Quantity: 3"]}
            buttons={["Promote"]}
          />
          <ItemTemplate
            itemsQuantity={1}
            extraDetails={["Quantity: 3"]}
            buttons={["Promote"]}
          />
        </div>
      </section>
      <section className={styles.new}>
        <h2>Newly Added</h2>
        <div className={styles.items}>
          <ItemTemplate
            itemsQuantity={1}
            extraDetails={["Quantity: 3"]}
            buttons={["Promote"]}
          />
          <ItemTemplate
            itemsQuantity={1}
            extraDetails={["Quantity: 3"]}
            buttons={["Promote"]}
          />
          <ItemTemplate
            itemsQuantity={1}
            extraDetails={["Quantity: 3"]}
            buttons={["Promote"]}
          />
        </div>
      </section>
      <section className={styles.old}>
        <h2>Old</h2>
        <div className={styles.items}>
          <ItemTemplate
            itemsQuantity={1}
            extraDetails={["Quantity: 3"]}
            buttons={["Promote"]}
          />
        </div>
      </section>
    </section>
  );
}

export default Products;
