"use client";
import React from "react";
import styles from "./InfoTab.module.css";
import Link from "next/link";
import CampusSelect from "./CampusSelect/CampusSelect";
import Theme from "./Theme/Theme";
import SlidingInfo from "./SlidingInfo/SlidingInfo";
import StoreLogo from "@/app/Main/MainCategories/Item/StoreLogo/StoreLogo";
import Menu from "./Menu/Menu";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

function InfoTab() {
  return (
    <section className={styles.infoTab}>
      <Provider store={store}>
        <Menu />
      </Provider>
      <section className={styles.primary}>
        {/* <Link href="/filter">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M450-130v-220h60v80h320v60H510v80h-60Zm-320-80v-60h220v60H130Zm160-160v-80H130v-60h160v-80h60v220h-60Zm160-80v-60h380v60H450Zm160-160v-220h60v80h160v60H670v80h-60Zm-480-80v-60h380v60H130Z" />
          </svg>
          <span>Filter</span>
        </Link> */}
        <Link href="/menu">
          <svg viewBox="0 -960 960 960">
            <path d="M172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31Zm0-60h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-415.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v415.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700ZM160-200v-440 440Z" />
          </svg>
          <span>Campus Jobs</span>
        </Link>
        <Link href="/">
          <StoreLogo />
        </Link>
      </section>
      <SlidingInfo />
      <section className={styles.tertiary}>
        <Theme />
        <CampusSelect />
      </section>
    </section>
  );
}

export default InfoTab;
