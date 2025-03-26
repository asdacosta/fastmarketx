"use client";
import React, { useEffect, useState } from "react";
import styles from "./Nav.module.css";

function NavScrollEffect() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <section
      style={{ position: "absolute" }}
      className={`${isHidden ? styles.hidden : ""}`}
    ></section>
  );
}

export default NavScrollEffect;
