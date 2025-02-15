import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import FloatingLabel from "../signup/FloatingLabel/FloatingLabel";
import Image from "next/image";

function page() {
  return (
    <main className={styles.page}>
      <section className={styles.header}>
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
      </section>
      <section className={styles.body}>
        <h2>Welcome back</h2>
        <form>
          <FloatingLabel name="mobileEmail" label="Mobile number or Email" />
          <FloatingLabel name="pwd1" label="Password" />
          <button>Continue</button>
        </form>
        <section className={styles.loginSection}>
          <span>Don't have an account?</span>
          <Link href="/signup">Sign Up</Link>
        </section>
      </section>
      <section className={styles.lastSection}>
        <section className={styles.withGoogle}>
          <svg viewBox="0 0 488 512" role="img">
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
          <span>Continue with Google</span>
        </section>
      </section>
    </main>
  );
}

export default page;
