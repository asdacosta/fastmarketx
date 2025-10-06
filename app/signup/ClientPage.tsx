"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./page.module.css";
import FloatingLabel from "./FloatingLabel/FloatingLabel";
import Image from "next/image";
import Gender from "./Gender/Gender";
import Campus from "./Campus/Campus";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import SocialButtons from "./SocialButtons/SocialButtons";

function ClientPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    campus: "",
    mobileEmail: "",
    pwd1: "",
    pwd2: "",
  });
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, gender, campus, mobileEmail, pwd1, pwd2 } = formData;

    if (pwd1 !== pwd2) {
      setError("Passwords do not match");
      return;
    }

    const isEmail = mobileEmail.includes("@");
    const payload: any = {
      name,
      gender,
      campus,
      password: pwd1,
    };

    if (isEmail) {
      payload.email = mobileEmail;
    } else {
      payload.phone = mobileEmail;
    }

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
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
      setError("Network error");
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
        <h2>Create an account</h2>
        <form onSubmit={handleSubmit}>
          <FloatingLabel
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <Gender value={formData.gender} onChange={handleChange} />
          <Campus value={formData.campus} onChange={handleChange} />
          <FloatingLabel
            name="mobileEmail"
            label="Mobile number or Email"
            value={formData.mobileEmail}
            onChange={handleChange}
          />
          <FloatingLabel
            name="pwd1"
            label="Password"
            value={formData.pwd1}
            onChange={handleChange}
            type="password"
          />
          <FloatingLabel
            name="pwd2"
            label="Confirm Password"
            value={formData.pwd2}
            onChange={handleChange}
            type="password"
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit">Continue</button>
        </form>
        <section className={styles.loginSection}>
          <span>Already have an account?</span>
          <Link href="/login">Log In</Link>
        </section>
      </section>
      {/* <section className={styles.lastSection}>
        <SocialButtons content="Sign up" />
      </section> */}
    </main>
  );
}

export default ClientPage;
