"use client";
import styles from "./page.module.css";
import Header from "../Header/Header";
import ItemImgs from "./ItemImgs/ItemImgs";
import PrimaryInfo from "./PrimaryInfo/PrimaryInfo";
import Details from "./Details/Details";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import FAQ from "./FAQ/FAQ";
import Reviews from "./Reviews/Reviews";
import FirstMainItems from "./FirstMainItems/FirstMainItems";
import SecMainItems from "./SecMainItems/SecMainItems";
import Location from "../Location/Location";
import Footer from "../Footer/Footer";

function Page() {
  return (
    <>
      <Header />
      <section className={styles.mainPage}>
        <section className={styles.page}>
          <Provider store={store}>
            <section className={styles.home}>
              <ItemImgs />
              <section className={styles.itemInfo}>
                <PrimaryInfo />
                <Location />
                <Details />
              </section>
            </section>
            <FAQ />
            <FirstMainItems />
            <Reviews />
            <SecMainItems />
          </Provider>
          <button
            className={styles.top}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top
          </button>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Page;
