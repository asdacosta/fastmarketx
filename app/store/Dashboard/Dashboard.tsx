import React from "react";
import styles from "./Dashboard.module.css";
import ItemTemplate from "@/app/ItemTemplate/ItemTemplate";
import Chart from "./Chart/Chart";

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
          <p>
            Weekly Sales • <em>GH₵</em>
            <span> 80</span>
          </p>
          <p>
            Monthly Sales • <em>GH₵</em>
            <span> 800</span>
          </p>
          <p>
            Total Revenue • <em>GH₵</em>
            <span> 5000</span>
          </p>
          <p>
            Total Orders • <span>120</span>
          </p>
          <p>
            Total Products • <span>30</span>
          </p>
        </div>
      </section>
      <section className={styles.performance}>
        <h3>Best Selling</h3>
        <div className={styles.bestSelling}>
          <ItemTemplate itemsQuantity={1} extraDetails={["Quantity: 7"]} />
          <ItemTemplate itemsQuantity={1} extraDetails={["Quantity: 14"]} />
        </div>
      </section>
      <section className={styles.performance}>
        <h3>Revenue Over Time</h3>
        <div className={styles.analytics}>
          <Chart />
        </div>
      </section>
    </section>
  );
}

export default Dashboard;
