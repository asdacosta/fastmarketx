"use client";
import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.brandSection}>
          <div className={styles.logo}>
            <Image
              draggable="false"
              src={`${
                theme === "light" ? "/lightDesktopLogo.png" : "/desktopLogo.png"
              }`}
              alt="Store"
              fill
              className={`${styles.desktopLogo} ${styles.img}`}
            />
          </div>
          <p className={styles.description}>
            FastmarketX is a campus-focused online marketplace that connects
            students and external buyers for trading. Whether you are looking
            for products, meals, or services, we provide a reliable and secure
            platform to buy and sell conveniently.
          </p>
          <div className={styles.buttonGroup}>
            <Link href="/products" className={styles.pdt}>
              Explore Products
            </Link>
            <Link href="/meals" className={styles.meal}>
              Order Meals
            </Link>
            <Link href="/services" className={styles.service}>
              Discover Services
            </Link>
            <Link href="/menu" className={styles.store}>
              Open Store
            </Link>
          </div>
          <div className={styles.signGroup}>
            <Link href="signup">Create Account</Link>
            <Link href="login">Log In</Link>
          </div>
          <div className={styles.socials}>
            <h3>Reach Us</h3>
            <div className={styles.socialLinks}>
              <svg viewBox="0 0 448 512" className={styles.wIcon}>
                <path d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z" />
              </svg>
              <svg viewBox="0 0 448 512" className={styles.fbIcon}>
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
              </svg>
              <svg viewBox="0 0 448 512" className={styles.xIcon}>
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
              </svg>
              <svg viewBox="0 0 448 512" className={styles.igIcon}>
                <path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className={styles.linksSection}>
          {/* Shop Group */}
          <div className={styles.linkGroup}>
            <h3>Shop</h3>
            <div className={styles.groupContent}>
              <Link href="/products/new">New Arrivals</Link>
              <Link href="/stores">Best Stores</Link>
              <Link href="/products/trending">Trending</Link>
              <Link href="/menu">Wishlist</Link>
              <Link href="#">Campus or Location Based</Link>
            </div>
          </div>

          <div className={styles.linkGroup}>
            <h3>About & Policies</h3>
            <div className={styles.groupContent}>
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="https://wa.me/message/FRHAZYCIYQ7OO1">
                Contact Us
              </Link>
            </div>
          </div>

          <div className={styles.linkGroup}>
            <h3>Customer Service</h3>
            <div className={styles.groupContent}>
              <Link href="#">Track Your Order</Link>
              <Link href="#">Delivery</Link>
              <Link href="/about">Returns & Refunds</Link>
              <Link href="/about">How to Order</Link>
              <Link href="/about">Payment Methods</Link>
              <Link href="/feedback">Submit Feedback or Question</Link>
              <Link href="/about">FAQs</Link>
            </div>
          </div>

          <div className={styles.linkGroup}>
            <h3>Promotions & Offers</h3>
            <div className={styles.groupContent}>
              <Link href="/products/lowcost">Deals & Discounts</Link>
              <Link href="#">Refer a Friend</Link>
              <Link href="#">Coupons & Promo Codes</Link>
              <Link href="#">Affiliate Programs</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p>© 2024 Your Store Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
