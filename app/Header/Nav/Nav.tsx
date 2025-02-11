import Link from "next/link";
import React from "react";
import SearchInput from "./SearchInput/SearchInput";
import styles from "./Nav.module.css";
import NavScrollEffect from "./NavScrollEffect";
import Account from "./Account/Account";
import CartClient from "./Cart/CartClient";
import Image from "next/image";

function Nav() {
  return (
    <>
      <NavScrollEffect />
      <nav className={styles.nav}>
        <section className={styles.primary}>
          <Link href="/" className={styles.logo}>
            <section className={styles.logoBox}>
              <Image
                draggable="false"
                src="/logo.png"
                alt="Store"
                fill
                className={styles.img}
              />
            </section>
          </Link>
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
