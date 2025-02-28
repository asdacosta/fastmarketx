"use client";
import React, { useState } from "react";
import styles from "./ItemQuantity.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity } from "@/app/redux/slices/cartSlice";
import { CartDataState } from "@/app/Main/MainCategories/Item/ItemClient";
import { RootState } from "@/app/redux/store";

function ItemQuantity({ item }: { item: CartDataState }) {
  const dispatch = useDispatch();
  const cartData = useSelector((state: RootState) => state.cart);
  const storedItem = cartData.items.find((i) => i.id === item.id);
  const quantity = storedItem ? storedItem.quantity : 0;

  const increaseQuantity = () => {
    dispatch(updateQuantity({ id: item.id, quantity: quantity + 1 }));
  };
  const decreaseQuantity = () => {
    dispatch(
      updateQuantity({ id: item.id, quantity: Math.max(1, quantity - 1) })
    );
  };

  return (
    <div className={styles.itemQuantity}>
      <svg
        viewBox="0 0 448 512"
        role="img"
        aria-label="Decrease quantity"
        onClick={decreaseQuantity}
        className={quantity === 1 ? styles.hide : ""}
      >
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 200l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
      </svg>
      <span>{quantity}</span>
      <svg
        viewBox="0 0 448 512"
        role="img"
        aria-label="Increase quantity"
        onClick={increaseQuantity}
      >
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
      </svg>
    </div>
  );
}

export default ItemQuantity;
