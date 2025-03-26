"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./not-found.module.css"; // Import CSS Module

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404</h1>
      <p className={styles.text}>This page could not be found.</p>
      <p className={styles.redirect}>Redirecting to homepage...</p>
    </div>
  );
}
