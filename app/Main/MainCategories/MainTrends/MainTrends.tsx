import React from "react";
import styles from "./MainTrends.module.css";
import Image from "next/image";

function MainTrends() {
  const items = new Array(14).fill(1);

  return (
    <section className={styles.mainTrends}>
      <section className={styles.header}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5L0 80C0 53.5 21.5 32 48 32l149.5 0c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
          </svg>
          <h3>Trending Products</h3>
        </div>
        <span>View All</span>
      </section>
      <section className={styles.trendItems}>
        {items.map((item, index) => {
          return (
            <section key={index} className={styles.item}>
              <div className={styles.imgBox}>
                <Image
                  src="/mainImgs/products.avif"
                  alt="Store"
                  fill
                  className={styles.img}
                />
              </div>
              <div className={styles.productInfo}>
                <span className={styles.productName}>Product Name</span>
                <div className={styles.price}>
                  <span>GH₵</span>
                  <span>100.45</span>
                </div>
                <div className={styles.storeName}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5zM288 384.7l0-305.6 52.5 108.1c3.5 7.1 10.2 12.1 18.1 13.3l118.3 17.5L391 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6L299.2 387.5c-3.5-1.9-7.4-2.8-11.2-2.8z" />
                  </svg>
                  <span>Official Store</span>
                </div>
              </div>
            </section>
          );
        })}
      </section>
    </section>
  );
}

export default MainTrends;
