import MainItems from "@/app/Main/MainCategories/MainItems/MainItems";
import { RootState } from "@/app/redux/store";
import React from "react";
import { useSelector } from "react-redux";

function FirstMainItems() {
  const category = useSelector(
    (state: RootState) => state.itemDetail.itemData.categoryName
  );

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
          )[category] || "product"
        }
        itemsName={category + "s often bought together with this"}
        url={`/${category.toLowerCase() + "s"}`}
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
          )[category] || "product"
        }
        itemsName={category + "s bought by same customers"}
        url={`/${category.toLowerCase() + "s"}`}
        itemsQuantity={4}
      />
    </>
  );
}

export default FirstMainItems;
