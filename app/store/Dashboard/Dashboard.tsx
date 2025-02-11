import React from "react";
import styles from "./Dashboard.module.css";
import ItemTemplate from "@/app/ItemTemplate/ItemTemplate";

function Dashboard() {
  return (
    <section className={styles.dashboard}>
      <section className={styles.banner}>
        <div className={styles.logo}></div>
        <div className={styles.floatingLabels}>
          <span className={styles.name}>Store Name</span>
          <span className={styles.followers}>
            100 <em>followers</em>
          </span>
        </div>
      </section>
      <section className={styles.sales}>
        <h3>Sales</h3>
        <div>
          <p>Weekly Sales • GH₵ 80</p>
          <p>Monthly Sales • GH₵ 800</p>
          <p>Total Revenue • GH₵ 5000</p>
          <p>Total Orders • 120</p>
          <p>Total Products • 30</p>
        </div>
      </section>
      <section className={styles.performance}>
        <h3>Performance</h3>
        <div>
          <h4>Best Selling Products</h4>
          <div className={styles.bestSelling}>
            <ItemTemplate itemsQuantity={1} extraDetails={["Quantity: 7"]} />
            <ItemTemplate itemsQuantity={1} extraDetails={["Quantity: 14"]} />
          </div>
          <div className={styles.analytics}>
            <span>
              {" "}
              Revenue Overview – A graph showing total revenue over time (daily,
              weekly, monthly).
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Dashboard;
