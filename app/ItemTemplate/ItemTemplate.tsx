import React from "react";
import styles from "./ItemTemplate.module.css";
import Image from "next/image";

interface ItemTemplateProps {
  itemsQuantity: number;
  extraDetails?: string[];
  buttons?: string[];
  price?: boolean;
}

function ItemTemplate({
  itemsQuantity,
  extraDetails = [],
  buttons = [],
  price = true,
}: ItemTemplateProps) {
  const items = new Array(itemsQuantity).fill(1);

  return (
    <section className={styles.items}>
      {items.map((_, index) => {
        return (
          <section key={index} className={styles.item}>
            <div className={styles.imgBox}>
              <Image
                draggable="false"
                src="/mainImgs/products.avif"
                alt="Store"
                fill
                className={styles.img}
              />
            </div>
            <div className={styles.productInfo}>
              <span className={styles.productName}>Product Name</span>
              {price && (
                <div className={styles.price}>
                  <span>GH₵</span>
                  <span>100.45</span>
                </div>
              )}
              {extraDetails.map((detail, index) => (
                <span key={index} className={styles.extraDetail}>
                  {detail}
                </span>
              ))}
            </div>
            <div className={styles.buttons}>
              {buttons.map((content, index) => {
                return <button key={index}>{content}</button>;
              })}
            </div>
          </section>
        );
      })}
    </section>
  );
}

export default ItemTemplate;
