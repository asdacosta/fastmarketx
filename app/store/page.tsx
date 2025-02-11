"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import StoreClient from "./StoreClient";

function page() {
  return (
    <Provider store={store}>
      <StoreClient />
    </Provider>
  );
}

export default page;
