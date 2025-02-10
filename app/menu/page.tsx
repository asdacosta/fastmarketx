"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import Menu from "./Menu";
import Header from "../Header/Header";

function page() {
  return (
    <>
      <Header />
      <Provider store={store}>
        <Menu />
      </Provider>
    </>
  );
}

export default page;
