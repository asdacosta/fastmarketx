"use client";
import React from "react";
import Cart from "./Cart";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";

function CartClient() {
  return (
    <>
      <Provider store={store}>
        <Cart /> 
      </Provider>
    </>
  );
}

export default CartClient;
