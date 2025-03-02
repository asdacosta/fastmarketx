import React, { useState } from "react";
import styles from "./Categories.module.css";
import Link from "next/link";
import SubCategories from "../CardsBox/SubCategories/SubCategories";

function Categories() {
  const [SubCategoriesNames, setCategoriesNames] = useState({
    category: "",
    subCategory: "",
    active: false,
  });

  return (
    <section className={styles.categories}>
      <section className={styles.products}>
        <h3>Products</h3>
        <Link
          href="products/electronics"
          className={styles.link}
          onMouseEnter={() =>
            setCategoriesNames({
              category: "Products",
              subCategory: "Electronics",
              active: true,
            })
          }
          onMouseLeave={() =>
            setCategoriesNames((prev) => ({ ...prev, active: false }))
          }
        >
          <svg viewBox="0 -960 960 960" fill="#e8eaed" role="img">
            <path d="M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80Zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z" />
          </svg>
          <span className={styles.item}>Electronics</span>
        </Link>
        <Link
          href="products/groceries"
          className={styles.link}
          onMouseEnter={() =>
            setCategoriesNames({
              category: "Products",
              subCategory: "Groceries",
              active: true,
            })
          }
          onMouseLeave={() =>
            setCategoriesNames((prev) => ({ ...prev, active: false }))
          }
        >
          <svg viewBox="0 -960 960 960" fill="#e8eaed" role="img">
            <path d="M640-80q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170T640-80Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm-480 0q-33 0-56.5-23.5T80-240v-304q0-8 1.5-16t4.5-16l80-184h-6q-17 0-28.5-11.5T120-800v-40q0-17 11.5-28.5T160-880h280q17 0 28.5 11.5T480-840v40q0 17-11.5 28.5T440-760h-6l66 152q-19 10-36 21t-32 25l-84-198h-96l-92 216v304h170q5 21 13.5 41.5T364-160H160Zm480-440q-42 0-71-29t-29-71q0-42 29-71t71-29v200q0-42 29-71t71-29q42 0 71 29t29 71H640Z" />
          </svg>
          <span className={styles.item}>Groceries</span>
        </Link>
        <Link
          href="products/fashion"
          className={styles.link}
          onMouseEnter={() =>
            setCategoriesNames({
              category: "Products",
              subCategory: "Fashion",
              active: true,
            })
          }
          onMouseLeave={() =>
            setCategoriesNames((prev) => ({ ...prev, active: false }))
          }
        >
          <svg viewBox="0 -960 960 960" fill="#e8eaed" role="img">
            <path d="m240-522-40 22q-14 8-30 4t-24-18L66-654q-8-14-4-30t18-24l230-132h70q9 0 14.5 5.5T400-820v20q0 33 23.5 56.5T480-720q33 0 56.5-23.5T560-800v-20q0-9 5.5-14.5T580-840h70l230 132q14 8 18 24t-4 30l-80 140q-8 14-23.5 17.5T760-501l-40-20v361q0 17-11.5 28.5T680-120H280q-17 0-28.5-11.5T240-160v-362Zm80-134v456h320v-456l124 68 42-70-172-100q-15 51-56.5 84.5T480-640q-56 0-97.5-33.5T326-758L154-658l42 70 124-68Zm160 177Z" />
          </svg>
          <span className={styles.item}>Fashion</span>
        </Link>
        <Link
          href="products/academic"
          className={styles.link}
          onMouseEnter={() =>
            setCategoriesNames({
              category: "Products",
              subCategory: "Academic",
              active: true,
            })
          }
          onMouseLeave={() =>
            setCategoriesNames((prev) => ({ ...prev, active: false }))
          }
        >
          <svg viewBox="0 -960 960 960" fill="#e8eaed" role="img">
            <path d="M480-60q-72-68-165-104t-195-36v-440q101 0 194 36.5T480-498q73-69 166-105.5T840-640v440q-103 0-195.5 36T480-60Zm0-104q63-47 134-75t146-37v-276q-73 13-143.5 52.5T480-394q-66-66-136.5-105.5T200-552v276q75 9 146 37t134 75Zm0-436q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-760q0-33-23.5-56.5T480-840q-33 0-56.5 23.5T400-760q0 33 23.5 56.5T480-680Zm0-80Zm0 366Z" />
          </svg>
          <span className={styles.item}>Academic</span>
        </Link>
        <Link
          href="products/home-and-kitchen"
          className={styles.link}
          onMouseEnter={() =>
            setCategoriesNames({
              category: "Products",
              subCategory: "Home & Kitchen",
              active: true,
            })
          }
          onMouseLeave={() =>
            setCategoriesNames((prev) => ({ ...prev, active: false }))
          }
        >
          <svg
            viewBox="0 0 576 512"
            height="22px"
            width="22px"
            fill="#e8eaed"
            role="img"
          >
            <path d="M240 144A96 96 0 1 0 48 144a96 96 0 1 0 192 0zm44.4 32C269.9 240.1 212.5 288 144 288C64.5 288 0 223.5 0 144S64.5 0 144 0c68.5 0 125.9 47.9 140.4 112l71.8 0c8.8-9.8 21.6-16 35.8-16l104 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-104 0c-14.2 0-27-6.2-35.8-16l-71.8 0zM144 80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM400 240c13.3 0 24 10.7 24 24l0 8 96 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-240 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l96 0 0-8c0-13.3 10.7-24 24-24zM288 464l0-112 224 0 0 112c0 26.5-21.5 48-48 48l-128 0c-26.5 0-48-21.5-48-48zM48 320l80 0 16 0 32 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-80c0-8.8 7.2-16 16-16zm128 64c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0 32 16 0zM24 464l176 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
          </svg>
          <span className={styles.item}>Home & Kitchen</span>
        </Link>
        <Link
          href="products/beauty-and-health"
          className={styles.link}
          onMouseEnter={() =>
            setCategoriesNames({
              category: "Products",
              subCategory: "Beauty & Health",
              active: true,
            })
          }
          onMouseLeave={() =>
            setCategoriesNames((prev) => ({ ...prev, active: false }))
          }
        >
          <svg viewBox="0 -960 960 960" fill="#e8eaed" role="img">
            <path d="M200-80 40-520l200-120v-240h160v240l200 120L440-80H200Zm480 0q-17 0-28.5-11.5T640-120q0-17 11.5-28.5T680-160h120v-80H680q-17 0-28.5-11.5T640-280q0-17 11.5-28.5T680-320h120v-80H680q-17 0-28.5-11.5T640-440q0-17 11.5-28.5T680-480h120v-80H680q-17 0-28.5-11.5T640-600q0-17 11.5-28.5T680-640h120v-80H680q-17 0-28.5-11.5T640-760q0-17 11.5-28.5T680-800h160q33 0 56.5 23.5T920-720v560q0 33-23.5 56.5T840-80H680Zm-424-80h128l118-326-124-74H262l-124 74 118 326Zm64-200Z" />
          </svg>
          <span className={styles.item}>Beauty & Health</span>
        </Link>
        <Link
          href="products/sports"
          className={styles.link}
          onMouseEnter={() =>
            setCategoriesNames({
              category: "Products",
              subCategory: "Sports",
              active: true,
            })
          }
          onMouseLeave={() =>
            setCategoriesNames((prev) => ({ ...prev, active: false }))
          }
        >
          <svg viewBox="0 0 640 512" fill="#e8eaed" role="img">
            <path d="M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z" />
          </svg>
          <span className={styles.item}>Sports</span>
        </Link>
        <Link
          href="products/games-and-toys"
          className={styles.link}
          onMouseEnter={() =>
            setCategoriesNames({
              category: "Products",
              subCategory: "Games & Toys",
              active: true,
            })
          }
          onMouseLeave={() =>
            setCategoriesNames((prev) => ({ ...prev, active: false }))
          }
        >
          <svg viewBox="0 0 640 512" fill="#e8eaed" role="img">
            <path d="M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8L173.1 413.7c28.1 28.1 73.7 28.1 101.8 0L413.7 274.9c28.1-28.1 28.1-73.7 0-101.8L274.9 34.3zM200 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 376a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM352 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 120a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm96 328c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-114.3 0c11.6 36 3.1 77-25.4 105.5L320 413.8l0 34.2zM480 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
          </svg>
          <span className={styles.item}>Games & Toys</span>
        </Link>
        <Link
          href="products/automotive"
          className={styles.link}
          onMouseEnter={() =>
            setCategoriesNames({
              category: "Products",
              subCategory: "Automotive",
              active: true,
            })
          }
          onMouseLeave={() =>
            setCategoriesNames((prev) => ({ ...prev, active: false }))
          }
        >
          <svg viewBox="0 0 640 512" fill="#e8eaed" role="img">
            <path d="M171.3 96L224 96l0 96-112.7 0 30.4-75.9C146.5 104 158.2 96 171.3 96zM272 192l0-96 81.2 0c9.7 0 18.9 4.4 25 12l67.2 84L272 192zm256.2 1L428.2 68c-18.2-22.8-45.8-36-75-36L171.3 32c-39.3 0-74.6 23.9-89.1 60.3L40.6 196.4C16.8 205.8 0 228.9 0 256L0 368c0 17.7 14.3 32 32 32l33.3 0c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80l130.7 0c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80l33.3 0c17.7 0 32-14.3 32-32l0-48c0-65.2-48.8-119-111.8-127zM434.7 368a48 48 0 1 1 90.5 32 48 48 0 1 1 -90.5-32zM160 336a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
          <span className={styles.item}>Automotive</span>
        </Link>
        {SubCategoriesNames.active &&
          SubCategoriesNames.category === "Products" && (
            <section
              className={styles.hoverCover}
              onMouseEnter={() =>
                setCategoriesNames((prev) => ({ ...prev, active: true }))
              }
              onMouseLeave={() =>
                setCategoriesNames((prev) => ({ ...prev, active: false }))
              }
            >
              <SubCategories
                categoryDetails={{
                  category: SubCategoriesNames.category,
                  subCategory: SubCategoriesNames.subCategory,
                }}
              />
            </section>
          )}
      </section>
      <section className={styles.meals}>
        <h3>Meals</h3>
        <Link
          href="meals/beverages"
          className={styles.link}
          onMouseEnter={() =>
            setCategoriesNames({
              category: "Meals",
              subCategory: "Beverages",
              active: true,
            })
          }
          onMouseLeave={() =>
            setCategoriesNames((prev) => ({ ...prev, active: false }))
          }
        >
          <svg viewBox="0 0 512 512" fill="#e8eaed" role="img">
            <path d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32L0 416c0 53 43 96 96 96l192 0c53 0 96-43 96-96l16 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-48 0L32 192zm352 64l16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0 0-96zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z" />
          </svg>
          <span className={styles.item}>Beverages</span>
        </Link>
        <Link
          href="meals/bakery"
          className={styles.link}
          onMouseEnter={() =>
            setCategoriesNames({
              category: "Meals",
              subCategory: "Bakery",
              active: true,
            })
          }
          onMouseLeave={() =>
            setCategoriesNames((prev) => ({ ...prev, active: false }))
          }
        >
          <svg viewBox="0 -960 960 960" fill="#e8eaed" role="img">
            <path d="M804-282q17 9 30-4t4-30l-58-108-42 108 66 34Zm-200-38h48l96-238q3-8-1.5-13.5T736-580l-80-32q-9-3-17.5 2T628-596l-24 276Zm-296 0h48l-24-276q-2-11-10.5-15t-17.5-1l-80 32q-8 3-11.5 8.5T212-558l96 238Zm-152 38 66-34-42-108-58 108q-9 17 4 30t30 4Zm280-38h88l30-338q2-9-4.5-15.5T534-680H426q-8 0-14.5 6.5T406-658l30 338ZM138-200q-42 0-70-31.5T40-306q0-12 3.5-23.5T52-352l88-168q-14-40 1-79t53-55l80-32q14-5 28-7t28 1q14-29 39-48.5t57-19.5h108q32 0 57 19.5t39 48.5q14-2 28-.5t28 6.5l80 32q40 16 56 55t-2 77l88 168q6 11 9 23t3 25q0 45-30.5 75.5T814-200q-11 0-22-2.5t-22-7.5l-62-30H250l-56 30q-13 7-27.5 8.5T138-200Zm342-280Z" />
          </svg>
          <span className={styles.item}>Bakery</span>
        </Link>
        <Link
          href="meals/international"
          className={styles.link}
          onMouseEnter={() =>
            setCategoriesNames({
              category: "Meals",
              subCategory: "International",
              active: true,
            })
          }
          onMouseLeave={() =>
            setCategoriesNames((prev) => ({ ...prev, active: false }))
          }
        >
          <svg viewBox="0 0 512 512" fill="#e8eaed" role="img">
            <path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
          </svg>
          <span className={styles.item}>International</span>
        </Link>
        <Link
          href="meals/native"
          className={styles.link}
          onMouseEnter={() =>
            setCategoriesNames({
              category: "Meals",
              subCategory: "Native",
              active: true,
            })
          }
          onMouseLeave={() =>
            setCategoriesNames((prev) => ({ ...prev, active: false }))
          }
        >
          <svg viewBox="0 0 512 512" fill="#e8eaed" role="img">
            <path d="M176 56c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24zm24 48l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM56 176l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM0 283.4C0 268.3 12.3 256 27.4 256l457.1 0c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28l-231.5 0c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4zM224 200c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24zm-96 0c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24zm-24-96l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm216 96c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24zm-24-96l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm120 96c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24zm-24-96l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM296 32l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
          </svg>
          <span className={styles.item}>Native</span>
        </Link>
        <Link
          href="meals/instant-and-snacks"
          className={styles.link}
          onMouseEnter={() =>
            setCategoriesNames({
              category: "Meals",
              subCategory: "Instant & Snacks",
              active: true,
            })
          }
          onMouseLeave={() =>
            setCategoriesNames((prev) => ({ ...prev, active: false }))
          }
        >
          <svg viewBox="0 -960 960 960" fill="#e8eaed" role="img">
            <path d="M533-440q-32-45-84.5-62.5T340-520q-56 0-108.5 17.5T147-440h386ZM40-360q0-109 91-174.5T340-600q118 0 209 65.5T640-360H40Zm0 160v-80h600v80H40ZM720-40v-80h56l56-560H450l-10-80h200v-160h80v160h200L854-98q-3 25-22 41.5T788-40h-68Zm0-80h56-56ZM80-40q-17 0-28.5-11.5T40-80v-40h600v40q0 17-11.5 28.5T600-40H80Zm260-400Z" />
          </svg>
          <span className={styles.item}>Instant & Snacks</span>
        </Link>
        <Link
          href="meals/frozen-foods"
          className={styles.link}
          onMouseEnter={() =>
            setCategoriesNames({
              category: "Meals",
              subCategory: "Frozen Foods",
              active: true,
            })
          }
          onMouseLeave={() =>
            setCategoriesNames((prev) => ({ ...prev, active: false }))
          }
        >
          <svg viewBox="0 -960 960 960" fill="#e8eaed" role="img">
            <path d="M482-40 294-400q-71 3-122.5-41T120-560q0-51 29.5-92t74.5-58q18-91 89.5-150.5T480-920q95 0 166.5 59.5T736-710q45 17 74.5 58t29.5 92q0 75-53 119t-119 41L482-40ZM280-480q15 0 29.5-5t26.5-17l22-22 26 16q21 14 45.5 21t50.5 7q26 0 50.5-7t45.5-21l26-16 22 22q12 12 26.5 17t29.5 5q33 0 56.5-23.5T760-560q0-30-19-52.5T692-640l-30-4-2-32q-5-69-57-116.5T480-840q-71 0-123 47.5T300-676l-2 32-30 6q-30 6-49 27t-19 51q0 33 23.5 56.5T280-480Zm202 266 108-210q-24 12-52 18t-58 6q-27 0-54.5-6T372-424l110 210Zm-2-446Z" />
          </svg>
          <span className={styles.item}>Frozen Foods</span>
        </Link>
        <Link
          href="meals/vegan-and-vegetarian"
          className={styles.link}
          // onMouseEnter={() =>
          //   setCategoriesNames({
          //     category: "Meals",
          //     subCategory: "Vegan & Vegetarian",
          //     active: true,
          //   })
          // }
          // onMouseLeave={() =>
          //   setCategoriesNames((prev) => ({ ...prev, active: false }))
          // }
        >
          <svg viewBox="0 -960 960 960" fill="#e8eaed" role="img">
            <path d="M440-120v-319q-64 0-123-24.5T213-533q-45-45-69-104t-24-123v-80h80q63 0 122 24.5T426-746q31 31 51.5 68t31.5 79q5-7 11-13.5t13-13.5q45-45 104-69.5T760-720h80v80q0 64-24.5 123T746-413q-45 45-103.5 69T520-320v200h-80Zm0-400q0-48-18.5-91.5T369-689q-34-34-77.5-52.5T200-760q0 48 18 92t52 78q34 34 78 52t92 18Zm80 120q48 0 91.5-18t77.5-52q34-34 52.5-78t18.5-92q-48 0-92 18.5T590-569q-34 34-52 77.5T520-400Zm0 0Zm-80-120Z" />
          </svg>
          <span className={styles.item}>Vegan & Vegetarian</span>
        </Link>
        <Link
          href="meals/meal-prep-subscriptions"
          className={styles.link}
          // onMouseEnter={() =>
          //   setCategoriesNames({
          //     category: "Meals",
          //     subCategory: "Meal Prep",
          //     active: true,
          //   })
          // }
          // onMouseLeave={() =>
          //   setCategoriesNames((prev) => ({ ...prev, active: false }))
          // }
        >
          <svg viewBox="0 -960 960 960" fill="#e8eaed" role="img">
            <path d="M200-80q-33 0-56.5-23.5T120-160v-451q-18-11-29-28.5T80-680v-120q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v120q0 23-11 40.5T840-611v451q0 33-23.5 56.5T760-80H200Zm0-520v440h560v-440H200Zm-40-80h640v-120H160v120Zm200 280h240v-80H360v80Zm120 20Z" />
          </svg>
          <span className={styles.item}>Meal Prep Subscriptions</span>
        </Link>
        {SubCategoriesNames.active &&
          SubCategoriesNames.category === "Meals" && (
            <section
              className={styles.hoverCover}
              onMouseEnter={() =>
                setCategoriesNames((prev) => ({ ...prev, active: true }))
              }
              onMouseLeave={() =>
                setCategoriesNames((prev) => ({ ...prev, active: false }))
              }
            >
              <SubCategories
                categoryDetails={{
                  category: SubCategoriesNames.category,
                  subCategory: SubCategoriesNames.subCategory,
                }}
              />
            </section>
          )}
      </section>
      <section className={styles.services}>
        <h3>Services</h3>
        <Link
          href="services/beauty-and-wellness"
          className={styles.link}
          onMouseEnter={() =>
            setCategoriesNames({
              category: "Services",
              subCategory: "Beauty & Wellness",
              active: true,
            })
          }
          onMouseLeave={() =>
            setCategoriesNames((prev) => ({ ...prev, active: false }))
          }
        >
          <svg viewBox="0 -960 960 960" fill="#e8eaed" role="img">
            <path d="M480-600 340-740l140-140 140 140-140 140ZM40-160v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-200q-43 0-84-13.5T320-252v92H40Zm120-280q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-560q0 50-34.5 85T160-440Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-560q0 50-34.5 85T800-440Z" />
          </svg>
          <span className={styles.item}>Beauty & Wellness</span>
        </Link>
        <Link
          href="services/home"
          className={styles.link}
          onMouseEnter={() =>
            setCategoriesNames({
              category: "Services",
              subCategory: "Home",
              active: true,
            })
          }
          onMouseLeave={() =>
            setCategoriesNames((prev) => ({ ...prev, active: false }))
          }
        >
          <svg viewBox="0 -960 960 960" fill="#e8eaed" role="img">
            <path d="M720-360v-80h80q17 0 28.5 11.5T840-400q0 17-11.5 28.5T800-360h-80Zm0 160v-80h80q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200h-80Zm-160 40q-33 0-56.5-23.5T480-240h-80v-160h80q0-33 23.5-56.5T560-480h120v320H560ZM280-280q-66 0-113-47t-47-113q0-66 47-113t113-47h60q25 0 42.5-17.5T400-660q0-25-17.5-42.5T340-720H200q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h140q58 0 99 41t41 99q0 58-41 99t-99 41h-60q-33 0-56.5 23.5T200-440q0 33 23.5 56.5T280-360h80v80h-80Z" />
          </svg>
          <span className={styles.item}>Home</span>
        </Link>
        <Link
          href="services/tech"
          className={styles.link}
          onMouseEnter={() =>
            setCategoriesNames({
              category: "Services",
              subCategory: "Tech",
              active: true,
            })
          }
          onMouseLeave={() =>
            setCategoriesNames((prev) => ({ ...prev, active: false }))
          }
        >
          <svg viewBox="0 0 640 512" fill="#e8eaed" role="img">
            <path d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
          </svg>
          <span className={styles.item}>Tech</span>
        </Link>
        <Link
          href="services/academic-services"
          className={styles.link}
          onMouseEnter={() =>
            setCategoriesNames({
              category: "Services",
              subCategory: "Academic Services",
              active: true,
            })
          }
          onMouseLeave={() =>
            setCategoriesNames((prev) => ({ ...prev, active: false }))
          }
        >
          <svg viewBox="0 0 640 512" fill="#e8eaed" role="img">
            <path d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 384l0-128 16 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-288 56 0 64 0 16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-64 192 0 0 192-192 0 0-32-64 0 0 48c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48L368 0c-26.5 0-48 21.5-48 48l0 80-76.9 0-65.9 0c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9 120 480c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
          </svg>
          <span className={styles.item}>Academic</span>
        </Link>
        <Link
          href="services/logistics"
          className={styles.link}
          onMouseEnter={() =>
            setCategoriesNames({
              category: "Services",
              subCategory: "Logistics",
              active: true,
            })
          }
          onMouseLeave={() =>
            setCategoriesNames((prev) => ({ ...prev, active: false }))
          }
        >
          <svg viewBox="0 -960 960 960" fill="#e8eaed" role="img">
            <path d="M280-160q-50 0-85-35t-35-85H60l18-80h113q17-19 40-29.5t49-10.5q26 0 49 10.5t40 29.5h167l84-360H182l4-17q6-28 27.5-45.5T264-800h456l-37 160h117l120 160-40 200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H400q0 50-35 85t-85 35Zm357-280h193l4-21-74-99h-95l-28 120Zm-19-273 2-7-84 360 2-7 34-146 46-200ZM20-427l20-80h220l-20 80H20Zm80-146 20-80h260l-20 80H100Zm180 333q17 0 28.5-11.5T320-280q0-17-11.5-28.5T280-320q-17 0-28.5 11.5T240-280q0 17 11.5 28.5T280-240Zm400 0q17 0 28.5-11.5T720-280q0-17-11.5-28.5T680-320q-17 0-28.5 11.5T640-280q0 17 11.5 28.5T680-240Z" />
          </svg>
          <span className={styles.item}>Logistics</span>
        </Link>
        <Link
          href="services/events"
          className={styles.link}
          // onMouseEnter={() =>
          //   setCategoriesNames({
          //     category: "Services",
          //     subCategory: "Events",
          //     active: true,
          //   })
          // }
          // onMouseLeave={() =>
          //   setCategoriesNames((prev) => ({ ...prev, active: false }))
          // }
        >
          <svg viewBox="0 0 640 512" fill="#e8eaed" role="img">
            <path d="M155.6 17.3C163 3 179.9-3.6 195 1.9L320 47.5l125-45.6c15.1-5.5 32 1.1 39.4 15.4l78.8 152.9c28.8 55.8 10.3 122.3-38.5 156.6L556.1 413l41-15c16.6-6 35 2.5 41 19.1s-2.5 35-19.1 41l-71.1 25.9L476.8 510c-16.6 6.1-35-2.5-41-19.1s2.5-35 19.1-41l41-15-31.3-86.2c-59.4 5.2-116.2-34-130-95.2L320 188.8l-14.6 64.7c-13.8 61.3-70.6 100.4-130 95.2l-31.3 86.2 41 15c16.6 6 25.2 24.4 19.1 41s-24.4 25.2-41 19.1L92.2 484.1 21.1 458.2c-16.6-6.1-25.2-24.4-19.1-41s24.4-25.2 41-19.1l41 15 31.3-86.2C66.5 292.5 48.1 226 76.9 170.2L155.6 17.3zm44 54.4l-27.2 52.8L261.6 157l13.1-57.9L199.6 71.7zm240.9 0L365.4 99.1 378.5 157l89.2-32.5L440.5 71.7z" />
          </svg>
          <span className={styles.item}>Events</span>
        </Link>
        {SubCategoriesNames.active &&
          SubCategoriesNames.category === "Services" && (
            <section
              className={styles.hoverCover}
              onMouseEnter={() =>
                setCategoriesNames((prev) => ({ ...prev, active: true }))
              }
              onMouseLeave={() =>
                setCategoriesNames((prev) => ({ ...prev, active: false }))
              }
            >
              <SubCategories
                categoryDetails={{
                  category: SubCategoriesNames.category,
                  subCategory: SubCategoriesNames.subCategory,
                }}
              />
            </section>
          )}
      </section>
    </section>
  );
}

export default Categories;
