import Link from "next/link";
import React from "react";
import { SearchInput } from "./SearchInput/SearchInput";
import { CampusSelect } from "./CampusSelect/CampusSelect";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <section className={styles.primary}>
        <section className={styles.logoBox}>
          <Link href="/">
            <h1>CampusairX</h1>
          </Link>
        </section>
        <section className={styles.inputsBox}>
          <SearchInput />
          <CampusSelect />
        </section>
      </section>

      <section className={styles.secondary}>
        <Link href="/jobs">Jobs</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/account">Account</Link>
        <Link href="/cart">Cart</Link>
      </section>
    </nav>
  );
}

export { Nav };
