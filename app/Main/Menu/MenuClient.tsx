"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import Menu from "./Menu";

function MenuClient() {
  return (
    <>
      <Provider store={store}>
        <Menu />
      </Provider>
    </>
  );
}

export default MenuClient;
