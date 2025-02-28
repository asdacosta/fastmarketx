import React from "react";
import styles from "./ProductItems.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Item from "@/app/Main/MainCategories/Item/Item";
import { getNextAvailableItem } from "@/app/Main/MainCategories/Item/getNextAvailableItem";

interface ProductItemsProps {
  currentItems: any[]; // Update the type as needed
}

const ProductItems: React.FC<ProductItemsProps> = ({ currentItems }) => {
  const cartData = useSelector((state: RootState) => state.cart);

  return (
    <section className={styles.items}>
      {currentItems.map((_, index) => {
        const itemData = getNextAvailableItem(cartData.items);
        return <Item key={index} itemData={itemData} />;
      })}
    </section>
  );
};

export default ProductItems;
