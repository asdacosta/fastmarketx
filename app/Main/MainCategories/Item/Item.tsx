"use client";
import React, { useEffect, useState } from "react";
import styles from "./Item.module.css";
import Image from "next/image";
import { storeIcons } from "./StoreIcons";

interface ItemProps {
  includeStars?: boolean;
  includeButton?: boolean;
  category?: "product" | "meal" | "service";
}

function Item({
  includeStars = true,
  includeButton = true,
  category = "product",
}: ItemProps) {
  const [addedToWish, setAddedToWish] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [revealDescription, setRevealDescription] = useState(false);
  const [addedFeedback, setAddedFeedback] = useState("");
  const [toggleFeedback, setToggleFeedback] = useState(false);

  const [storeColor, setStoreColor] = useState("rgba(232, 205, 4, 1)");
  const [storeIconIndex, setStoreIconIndex] = useState(10);

  const decrementQuantity = () => {
    setQuantity((prev) => {
      if (prev === 1) {
        setAddedToCart(false);
        setAddedFeedback("Removed from Cart");
        return prev;
      }
      return prev - 1;
    });
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setAddedFeedback("Added to Cart");
  };

  const handleAddToWish = () => {
    if (addedToWish) {
      setAddedFeedback("Removed from Wishlist");
    } else {
      setAddedFeedback("Added to Wishlist");
    }
    setAddedToWish((prev) => !prev);
  };

  useEffect(() => {
    setToggleFeedback(true);
    const timer = setTimeout(() => {
      setToggleFeedback(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [addedFeedback]);

  return (
    <section className={`${styles.item} ${styles[category]}`}>
      <div className={styles.imgBox}>
        <Image
          draggable="false"
          src="/mainImgs/products.avif"
          alt="Store"
          layout="fill"
          className={styles.img}
        />
        <svg
          role="img"
          viewBox="0 0 512 512"
          className={styles.infoIcon}
          onMouseEnter={() => setRevealDescription(true)}
          onMouseLeave={() => setRevealDescription(false)}
        >
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
        </svg>
        {revealDescription && (
          <p className={styles.description}>
            <span>
              <em>Receiving Method:</em> Delivery
            </span>
            <span>
              <em>Name:</em> If me make a billion a morning
            </span>
            <span>
              <em>Description:</em> Anything ah anything. Work till we can't no
              more then we work again and again until we're incapacitated then
              we work once again. Yeah...
            </span>
          </p>
        )}
        <div onClick={handleAddToWish} className={styles.wishBox}>
          {!addedToWish ? (
            <div className={styles.emptyWishWithCover}>
              <svg role="img" viewBox="0 0 512 512">
                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
              </svg>
              <svg
                role="img"
                viewBox="0 0 512 512"
                className={styles.wishCover}
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
            </div>
          ) : (
            <div>
              <svg role="img" viewBox="0 0 512 512">
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
            </div>
          )}
        </div>
        {toggleFeedback && addedFeedback !== "" && (
          <span className={styles.addedFeedback}>{addedFeedback}</span>
        )}
      </div>
      <div className={styles.productInfo}>
        <span className={styles.productName}>Product Name</span>
        <div className={styles.price}>
          <span>GH₵</span>
          <span>100.45</span>
        </div>
        {includeStars && (
          <div className={styles.stars}>
            <div className={styles.starIcons}>
              <svg role="img" viewBox="0 0 576 512">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <svg role="img" viewBox="0 0 576 512">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <svg role="img" viewBox="0 0 576 512">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <svg role="img" viewBox="0 0 576 512">
                <path d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3 0 289.2zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" />
              </svg>
              <svg role="img" viewBox="0 0 576 512">
                <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
              </svg>
            </div>
            <span>●</span>
            <span>30</span>
          </div>
        )}
        <div className={styles.storeName}>
          <div
            className={`${styles.storeLogo} ${styles.officialColor} ${styles.officialIcon}`}
            style={{ background: storeColor }}
          >
            {React.cloneElement(storeIcons.stores[storeIconIndex], {
              fill: "black",
              width: 16,
              height: 16,
              stroke: "black",
              strokeWidth: 10,
              style: {
                filter: `drop-shadow(2px 2px 5px #000)`,
              },
            })}
          </div>
          <span>Official Store</span>
        </div>
        {includeButton && (
          <>
            {!addedToCart ? (
              <button className={styles.add} onClick={handleAddToCart}>
                Add to cart
              </button>
            ) : (
              <div className={styles.addQuantity}>
                <svg
                  role="img"
                  viewBox="0 0 448 512"
                  onClick={decrementQuantity}
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 200l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
                </svg>
                <span>{quantity}</span>
                <svg
                  role="img"
                  viewBox="0 0 448 512"
                  onClick={incrementQuantity}
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                </svg>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default Item;
