import React from "react";
import styles from "./MealItems.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Item from "@/app/Main/MainCategories/Item/Item";
import { getNextAvailableItem } from "@/app/Main/MainCategories/Item/getNextAvailableItem";

interface MealItemsProps {
  currentItems: any[]; // Update the type as needed
}

const MealItems: React.FC<MealItemsProps> = ({ currentItems }) => {
  const cartData = useSelector((state: RootState) => state.cart);

  return (
    <section className={styles.items}>
      {currentItems.map((_, index) => {
        const itemData = getNextAvailableItem(cartData.items);
        return <Item key={index} itemData={itemData} category="meal" />;
      })}
    </section>
  );
};

export default MealItems;
