"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import Complete from "./Complete";

function page() {
  return (
    <Provider store={store}>
      <Complete />
    </Provider>
  );
}

export default page;
