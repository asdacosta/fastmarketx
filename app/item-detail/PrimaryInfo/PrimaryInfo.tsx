"use client";
import React, { useEffect, useState } from "react";
import styles from "./PrimaryInfo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleItemDetailFeedback } from "@/app/redux/slices/itemDetailSlice";
import { RootState } from "@/app/redux/store";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
} from "@/app/redux/slices/cartSlice";
import { addToWishlist } from "@/app/redux/slices/wishlistSlice";
import Link from "next/link";

function PrimaryInfo() {
  const dispatch = useDispatch();
  const feedback = useSelector((state: RootState) => state.itemDetail.feedback);
  const itemData = useSelector((state: RootState) => state.itemDetail.itemData);
  const wishList = useSelector((state: RootState) => state.wishlist.items);

  const wishItem = wishList.find((item) => item.id === itemData.id);

  const [addedToCart, setAddedToCart] = useState(
    itemData.quantity > 0 || false
  );
  const [quantity, setQuantity] = useState(itemData.quantity || 0);
  const [addedToWish, setAddedToWish] = useState(
    wishItem?.id === itemData.id || false
  );

  const decrementQuantity = () => {
    if (quantity <= 1) {
      dispatch(removeFromCart(itemData.id));
      setQuantity(0);
      setAddedToCart(false);
      dispatch(
        toggleItemDetailFeedback({ toggle: true, value: "Removed from Cart" })
      );
    } else {
      dispatch(updateQuantity({ id: itemData.id, quantity: quantity - 1 }));
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: itemData.id,
        name: itemData.name,
        price: itemData.price,
        quantity: 1,
        imageUrl: itemData.imageUrl,
        accountName: itemData.accountName,
        categoryName: itemData.categoryName,
        stock: itemData.stock,
      })
    );
    setAddedToCart(true);
    setQuantity(1);
    dispatch(toggleItemDetailFeedback({ toggle: true, value: "Add to Cart" }));
  };

  const incrementQuantity = () => {
    if (quantity < itemData.stock) {
      dispatch(updateQuantity({ id: itemData.id, quantity: quantity + 1 }));
      setQuantity((prev) => prev + 1);
    } else {
      dispatch(
        toggleItemDetailFeedback({
          toggle: true,
          value: "No more stock available",
        })
      );
    }
  };

  const handleAddToWish = () => {
    dispatch(addToWishlist({ name: itemData.name, id: itemData.id }));
    setAddedToWish((prev) => !prev);
    dispatch(
      toggleItemDetailFeedback({
        toggle: true,
        value: addedToWish ? "Removed from Wishlist" : "Added to Wishlist",
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(toggleItemDetailFeedback({ toggle: false, value: "" }));
    }, 1200);

    return () => clearTimeout(timer);
  }, [feedback]);

  return (
    <section className={styles.primaryInfo}>
      <h2>{itemData.name}</h2>
      {/* Dispatch store data  */}
      <Link href="/stores/any" className={styles.store}>
        <div></div>
        <span>{itemData.accountName}</span>
      </Link>
      <div className={styles.priceBox}>
        <div>
          <span className={styles.price}>${itemData.price}</span>
          <span className={styles.payOnDelivery}>You can pay on delivery</span>
        </div>
        <span>{itemData.stock > 30 ? "30+" : itemData.stock} Items Left</span>
      </div>
      <div className={styles.reviews}>
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
        <span>*</span>
        <span>30 ratings</span>
      </div>
      <div className={styles.categories}>
        <button>Color</button>
        <button>Item size</button>
      </div>
      <div className={styles.cartWish}>
        {!addedToCart ? (
          <button className={styles.add} onClick={handleAddToCart}>
            Add to cart
          </button>
        ) : (
          <div className={styles.addQuantity}>
            <svg role="img" viewBox="0 0 448 512" onClick={decrementQuantity}>
              <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 200l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
            </svg>
            <span>{quantity}</span>
            <svg role="img" viewBox="0 0 448 512" onClick={incrementQuantity}>
              <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
            </svg>
          </div>
        )}
        <button className={styles.wish} onClick={handleAddToWish}>
          {!addedToWish ? (
            <svg role="img" viewBox="0 0 512 512" className={styles.hollowStar}>
              <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
            </svg>
          ) : (
            <svg role="img" viewBox="0 0 512 512">
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
            </svg>
          )}
          <span>Wishlist</span>
        </button>
      </div>
    </section>
  );
}

export default PrimaryInfo;
