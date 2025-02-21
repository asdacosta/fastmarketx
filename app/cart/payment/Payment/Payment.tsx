"use client";
import React, { useState } from "react";
import styles from "./Payment.module.css";
import Image from "next/image";
import Link from "next/link";

function Payment({ change = false }: { change?: boolean }) {
  const [clicked, setClicked] = useState({ mMoney: false, payWithCard: false });
  const [momo, setMomo] = useState("mtn");

  return (
    <section className={styles.payment}>
      <h2>{change ? "Change Payment Method" : "PAYMENT"}</h2>
      <section className={styles.paymentDetails}>
        <section>
          <div
            className={`${styles.mMoney} ${
              clicked.mMoney ? styles.active : ""
            }`}
            onClick={() =>
              setClicked((prev) => ({ ...prev, mMoney: !prev.mMoney }))
            }
          >
            <div className={styles.imgBox}>
              <Image
                draggable="false"
                src="/mtnLogo.png"
                alt="Mtn"
                width={20}
                height={20}
                className={styles.img}
              />
            </div>
            <div className={styles.imgBox}>
              <Image
                draggable="false"
                src="/telecelLogo.jpg"
                alt="Telecel"
                width={20}
                height={20}
                className={styles.img}
              />
            </div>
            <div className={styles.imgBox}>
              <Image
                draggable="false"
                src="/atLogo.jpg"
                alt="AT"
                width={20}
                height={20}
                className={styles.img}
              />
            </div>
            <span className={styles.paymentText}>Mobile Money</span>
            <svg viewBox="0 0 320 512">
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </div>
          <div className={styles.momoOptions}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                value="mtn"
                checked={momo === "mtn"}
                onChange={(e) => setMomo(e.target.value)}
                className={styles.radioInput}
              />
              <span className={styles.customRadio}></span>
              MTN
              <Image
                draggable="false"
                src="/mtnLogo.png"
                alt="Mtn"
                width={20}
                height={20}
                className={styles.img}
              />
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                value="telecel"
                checked={momo === "telecel"}
                onChange={(e) => setMomo(e.target.value)}
                className={styles.radioInput}
              />
              <span className={styles.customRadio}></span>
              Telecel
              <Image
                draggable="false"
                src="/telecelLogo.jpg"
                alt="Telecel"
                width={20}
                height={20}
                className={styles.img}
              />
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                value="at"
                checked={momo === "at"}
                onChange={(e) => setMomo(e.target.value)}
                className={styles.radioInput}
              />
              <span className={styles.customRadio}></span>
              AirtelTigo
              <Image
                draggable="false"
                src="/atLogo.jpg"
                alt="AT"
                width={20}
                height={20}
                className={styles.img}
              />
            </label>
            <div className={styles.momoNumber}>
              <input
                type="tel"
                placeholder={
                  momo === "mtn"
                    ? "MTN number"
                    : momo === "telecel"
                    ? "Telecel number"
                    : momo === "at"
                    ? "AirtelTigo number"
                    : ""
                }
              />
            </div>
            {!change ? (
              <Link href="/cart/payment/complete" className={styles.payButton}>
                Complete Payment (GH₵ 100)
              </Link>
            ) : (
              <button className={styles.payButton}>Update Number</button>
            )}
          </div>
        </section>
        <div
          className={`${styles.payWithCard} ${
            clicked.payWithCard ? styles.active : ""
          }`}
          onClick={() =>
            setClicked((prev) => ({ ...prev, payWithCard: !prev.payWithCard }))
          }
        >
          <div className={styles.imgBox}>
            <Image
              draggable="false"
              src="/masterCardLogo.png"
              alt="AT"
              width={20}
              height={20}
              className={styles.img}
            />
          </div>
          <div className={styles.imgBox}>
            <Image
              draggable="false"
              src="/visaLogo.png"
              alt="AT"
              width={20}
              height={20}
              className={styles.img}
            />
          </div>
          <div className={styles.imgBox}>
            <Image
              draggable="false"
              src="/paypalLogo.jpg"
              alt="AT"
              width={20}
              height={20}
              className={styles.img}
            />
          </div>
          <span className={styles.paymentText}>
            Pay with card (Unavailable)
          </span>
          <svg viewBox="0 0 320 512">
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
        </div>
      </section>
    </section>
  );
}

export default Payment;
