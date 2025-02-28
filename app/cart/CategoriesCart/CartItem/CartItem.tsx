import React from "react";
import styles from "./CartItem.module.css";
import Image from "next/image";
import RemoveSave from "./RemoveSave/RemoveSave";
import ItemQuantity from "./ItemQuantity/ItemQuantity";
import { CartItem as CartItemType } from "@/app/redux/slices/cartSlice";
import { useDispatch } from "react-redux";

function CartItem({ item }: { item: CartItemType }) {
  const dispatch = useDispatch();

  return (
    <section className={styles.item}>
      <div>
        <Image
          src={item.imageUrl || "/mainImgs/store.avif"}
          alt={item.name}
          fill
        />
      </div>
      <div className={styles.itemInfo}>
        <div className={styles.namePrice}>
          <span className={styles.itemName}>{item.name}</span>
          <div className={styles.price}>
            <span>GH₵</span>
            <span>{item.price.toFixed(2)}</span>
          </div>
        </div>
        <div className={styles.accountStock}>
          <span className={styles.accountName}>{item.accountName}</span>
          <span>•</span>
          <span className={styles.stock}>
            {item.stock > 20 ? "In Stock" : `${item.stock} items left`}
          </span>
        </div>
        <ItemQuantity item={item} />
        <RemoveSave id={item.id} />
      </div>
    </section>
  );
}

export default CartItem;
