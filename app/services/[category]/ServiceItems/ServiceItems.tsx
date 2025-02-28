import React from "react";
import styles from "./ServiceItems.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Item from "@/app/Main/MainCategories/Item/Item";
import { getNextAvailableItem } from "@/app/Main/MainCategories/Item/getNextAvailableItem";

interface ServiceItemsProps {
  currentItems: any[];
}

const ServiceItems: React.FC<ServiceItemsProps> = ({ currentItems }) => {
  const cartData = useSelector((state: RootState) => state.cart);

  return (
    <section className={styles.items}>
      {currentItems.map((_, index) => {
        const itemData = getNextAvailableItem(cartData.items);
        return <Item key={index} itemData={itemData} category="service" />;
      })}
    </section>
  );
};

export default ServiceItems;
