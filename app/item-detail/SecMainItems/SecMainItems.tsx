import MainItems from "@/app/Main/MainCategories/MainItems/MainItems";
import { RootState } from "@/app/redux/store";
import React from "react";
import { useSelector } from "react-redux";

function SecMainItems() {
  const itemData = useSelector((state: RootState) => state.itemDetail.itemData);

  return (
    <>
      <MainItems
        category={
          (
            {
              Product: "product",
              Service: "service",
              Meal: "meal",
            } as const
          )[itemData.categoryName] || "product"
        }
        itemsName="Smart Picks for You"
        url={`/${itemData.categoryName.toLowerCase() + "s"}`}
        itemsQuantity={4}
      />
      <MainItems
        category={
          (
            {
              Product: "product",
              Service: "service",
              Meal: "meal",
            } as const
          )[itemData.categoryName] || "product"
        }
        itemsName={`More from ${itemData.accountName} store`}
        url={`/${itemData.categoryName.toLowerCase() + "s"}`}
        itemsQuantity={4}
      />
    </>
  );
}

export default SecMainItems;
