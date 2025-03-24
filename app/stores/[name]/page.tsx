"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import PageClient from "./PageClient";

function page() {
  return (
    <Provider store={store}>
      <PageClient />
    </Provider>
  );
}

export default page;
