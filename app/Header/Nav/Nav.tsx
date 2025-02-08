import Link from "next/link";
import React from "react";
import SearchInput from "./SearchInput/SearchInput";
import styles from "./Nav.module.css";
import NavScrollEffect from "./NavScrollEffect";
import Account from "./Account/Account";
import CartClient from "./Cart/CartClient";

function Nav() {
  return (
    <>
      <NavScrollEffect />
      <nav className={styles.nav}>
        <section className={styles.primary}>
          <section className={styles.logoBox}>
            <Link href="/">
              <h1>CampusairX</h1>
            </Link>
          </section>
          <section className={styles.inputsBox}>
            <SearchInput />
          </section>
        </section>
        <section className={styles.secondary}>
          <Account />
          <CartClient />
        </section>
      </nav>
    </>
  );
}

export default Nav;
