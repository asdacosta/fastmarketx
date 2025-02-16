import React from "react";
import styles from "./SlidingInfo.module.css";

function SlidingInfo() {
  return (
    <section className={styles.slidingInfo}>
      {[0, 1].map((each, index) => (
        <section className={styles.textSlide} key={index}>
          <span>●</span>
          <span>You can buy from nearby stores</span>
          <span>●</span>
          <span>Create your store to start selling</span>
          <span>●</span>
          <span>Buy anything from products, meals to services</span>
          <span>●</span>
          <span>Call 0538584584 to order</span>
          <span>●</span>
          <span>You can opt for cash on delivery</span>
        </section>
      ))}
    </section>
  );
}

export default SlidingInfo;
