import React from "react";
import Nav from "./Nav/Nav";
import InfoTab from "./InfoTab/InfoTab";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Nav />
      <InfoTab />
    </header>
  );
}

export default Header;
