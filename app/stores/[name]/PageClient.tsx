"use client";
import React from "react";
import styles from "./page.module.css";
import Header from "@/app/Header/Header";
import Item from "@/app/Main/MainCategories/Item/Item";
import { getNextAvailableItem } from "@/app/Main/MainCategories/Item/getNextAvailableItem";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import WorkingHours from "../WorkingHours/WorkingHours";
import Location from "@/app/Location/Location";
import Footer from "@/app/Footer/Footer";

const categories = ["Electronics", "Groceries", "Fashion", "Home & Kitchen"];

const hoursData = [
  { day: "Monday", open: "7:30 AM", close: "7:30 PM" },
  { day: "Tuesday", open: "7:00 AM", close: "7:30 PM" },
  { day: "Wednesday", open: "7:00 AM", close: "7:00 PM" },
  { day: "Thursday", open: "7:00 AM", close: "7:00 PM" },
  { day: "Friday", open: "7:00 AM", close: "7:00 PM" },
  { day: "Saturday", open: "7:00 AM", close: "7:00 PM" },
  { day: "Sunday", closed: true },
];

function PageClient() {
  const cartData = useSelector((state: RootState) => state.cart);

  return (
    <>
      <Header />
      <section className={styles.home}>
        <section className={styles.page}>
          <section className={styles.banner}>
            <div className={styles.logo}></div>
            <div className={styles.floatingLabels}>
              <div className={styles.nameCat}>
                <span className={styles.name}>Store Name</span>
                <span className={styles.mainCategory}>Products</span>
              </div>
              <span className={styles.followers}>
                100 <em>followers</em>
              </span>
            </div>
          </section>
          <section className={styles.categoriesContact}>
            <section className={styles.categories}>
              {categories.map((cat) => (
                <span key={cat}>{cat}</span>
              ))}
            </section>
            <section className={styles.contact}>
              <button>
                <svg viewBox="0 0 512 512">
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
                <span>Call</span>
              </button>
              <button>
                <svg viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                <span>WhatsApp</span>
              </button>
            </section>
          </section>
          <section className={styles.about}>
            <p>This is the slogan of the day</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque illo doloribus quos incidunt vel eveniet commodi quam
              deleniti, totam vero.
            </p>
          </section>
          <section className={styles.location}>
            <Location />
          </section>
          <section className={styles.items}>
            {categories.map((cat) => (
              <section key={cat}>
                <h3>{cat}</h3>
                <section className={styles.itemsBox}>
                  {Array(5)
                    .fill(1)
                    .map((_, index) => {
                      const itemData = getNextAvailableItem(cartData.items);
                      return <Item key={index} itemData={itemData} />;
                    })}
                </section>
              </section>
            ))}
          </section>
          <section className={styles.workingHours}>
            <h2>Working Hours</h2>
            <WorkingHours hours={hoursData} />
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default PageClient;
