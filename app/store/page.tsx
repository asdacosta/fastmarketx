"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Dashboard from "./Dashboard/Dashboard";
import Orders from "./Orders/Orders";
import Products from "./Products/Products";
import Inbox from "../menu/Inbox/Inbox";
import Ads from "./Ads/Ads";
import Header from "../Header/Header";
import CreateStore from "../menu/Store/CreateStore";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function page() {
  const [activeNav, setActiveNav] = useState("dashboard");

  return (
    <>
      <Header />
      <section className={styles.page}>
        <section className={styles.nav}>
          <div className={styles.storeName}>
            <h2>Store Name</h2>
          </div>
          <div className={styles.navLinks}>
            <button onClick={() => setActiveNav("dashboard")}>Dashboard</button>
            <button onClick={() => setActiveNav("orders")}>Orders</button>
            <button onClick={() => setActiveNav("products")}>Products</button>
            <button onClick={() => setActiveNav("inbox")}>Inbox</button>
            <button onClick={() => setActiveNav("ads")}>Ads</button>
            <button onClick={() => setActiveNav("settings")}>Settings</button>
          </div>
        </section>
        <section className={styles.main}>
          {activeNav === "dashboard" && <Dashboard />}
          {activeNav === "orders" && <Orders />}
          {activeNav === "products" && <Products />}
          {activeNav === "inbox" && <Inbox />}
          {activeNav === "ads" && <Ads />}
          {activeNav === "settings" && (
            <Provider store={store}>
              <CreateStore />
            </Provider>
          )}
        </section>
      </section>
    </>
  );
}

export default page;
