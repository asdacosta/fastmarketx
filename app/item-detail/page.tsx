"use client";
import styles from "./page.module.css";
import Header from "../Header/Header";
import ItemImgs from "./ItemImgs/ItemImgs";
import PrimaryInfo from "./PrimaryInfo/PrimaryInfo";
import Details from "./Details/Details";
import MainItems from "../Main/MainCategories/MainItems/MainItems";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import FAQ from "./FAQ/FAQ";
import Reviews from "./Reviews/Reviews";

function page() {
  return (
    <>
      <Header />
      <section className={styles.page}>
        <Provider store={store}>
          <section className={styles.home}>
            <ItemImgs />
            <section className={styles.itemInfo}>
              <PrimaryInfo />
              <Details />
            </section>
          </section>
          <FAQ />
          <MainItems
            category="product"
            itemsName="Products often bought together with ..."
            url="/products"
            itemsQuantity={4}
          />
          <MainItems
            category="product"
            itemsName="Products bought by same customers"
            url="/products"
            itemsQuantity={4}
          />
        </Provider>
        <Reviews />
        <Provider store={store}>
          <MainItems
            category="product"
            itemsName="Smart Picks for You"
            url="/products"
            itemsQuantity={4}
          />
          <MainItems
            category="product"
            itemsName="More from [shop] store"
            url="/products"
            itemsQuantity={4}
          />
        </Provider>
        <button
          className={styles.top}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top
        </button>
      </section>
    </>
  );
}

export default page;
