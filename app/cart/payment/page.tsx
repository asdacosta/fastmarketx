"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Header from "@/app/Header/Header";
import LocationAddress from "./LocationAddress/LocationAddress";
import CartSummary from "./CartSummary/CartSummary";
import Payment from "./Payment/Payment";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

function Page() {
  const [receivingMethod, setReceivingMethod] = useState("payNow");

  return (
    <>
      <Header />
      <section className={styles.page}>
        <Provider store={store}>
          <section className={styles.paymentInfo}>
            <LocationAddress />
            <div className={styles.paymentMethod}>
              <h2>SELECT PAYMENT METHOD (Door Delivery)</h2>
              <div className={styles.methods}>
                <label
                  className={`${styles.radioLabel} ${
                    receivingMethod === "payNow" && styles.active
                  }`}
                >
                  <input
                    type="radio"
                    value="payNow"
                    checked={receivingMethod === "payNow"}
                    onChange={(e) => setReceivingMethod(e.target.value)}
                    className={styles.radioInput}
                  />
                  <span className={styles.customRadio}></span>
                  Pay now (Recommended)
                  <span className={styles.details}>
                    Pay for delivery fee and items cost now
                  </span>
                </label>
                <label
                  className={`${styles.radioLabel} ${
                    receivingMethod === "payOnDelivery" && styles.active
                  }`}
                >
                  <input
                    type="radio"
                    value="payOnDelivery"
                    checked={receivingMethod === "payOnDelivery"}
                    onChange={(e) => setReceivingMethod(e.target.value)}
                    className={styles.radioInput}
                  />
                  <span className={styles.customRadio}></span>
                  Pay on delivery
                  <span className={styles.details}>
                    Pay for delivery fee now and pay for the items upon delivery
                  </span>
                </label>
              </div>
            </div>
            <Payment />
          </section>
          <CartSummary />
        </Provider>
      </section>
    </>
  );
}

export default Page;
