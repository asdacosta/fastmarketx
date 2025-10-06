"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./page.module.css";
import FloatingLabel from "../signup/FloatingLabel/FloatingLabel";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import SocialButtons from "../signup/SocialButtons/SocialButtons";

function ClientPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    mobileEmail: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isEmail = formData.mobileEmail.includes("@");

    const payload: any = {
      password: formData.password,
    };

    if (isEmail) {
      payload.email = formData.mobileEmail;
    } else {
      payload.phone = formData.mobileEmail;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
      } else {
        dispatch(
          login({
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
            phone: data.user.phone,
          })
        );
        router.push("/");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

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

        <form onSubmit={handleSubmit}>
          <FloatingLabel
            name="mobileEmail"
            label="Mobile number or Email"
            value={formData.mobileEmail}
            onChange={handleChange}
          />
          <FloatingLabel
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            type="password"
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit">Continue</button>
        </form>

        <section className={styles.loginSection}>
          <span>Don&apos;t have an account?</span>
          <Link href="/signup">Sign Up</Link>
        </section>
      </section>

      {/* <section className={styles.lastSection}>
        <SocialButtons content="Continue with" />
      </section> */}
    </main>
  );
}

export default ClientPage;
