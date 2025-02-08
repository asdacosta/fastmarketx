"use client";
import React from "react";
import Cart from "./Cart";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import Header from "../Header/Header";

function page() {
  return (
    <>
      <Header />
      <Provider store={store}>
        <Cart />
      </Provider>
    </>
  );
}

export default page;
