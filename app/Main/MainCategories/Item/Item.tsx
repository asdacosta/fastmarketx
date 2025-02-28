"use client";

import { store } from "@/app/redux/store";
import React from "react";
import { Provider } from "react-redux";
import ItemClient, { CartDataState } from "./ItemClient";

function Item({
  category,
  includeButton,
  includeStars,
  itemData,
}: {
  category?: "product" | "meal" | "service";
  includeButton?: boolean;
  includeStars?: boolean;
  itemData: CartDataState;
}) {
  return (
    <Provider store={store}>
      <ItemClient
        category={category}
        includeButton={includeButton}
        includeStars={includeStars}
        itemData={itemData}
      />
    </Provider>
  );
}

export default Item;
