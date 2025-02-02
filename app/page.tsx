"use client";

import styles from "./page.module.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Bot from "./Bot/Bot";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Main />
        <Bot />
      </Provider>
    </>
  );
}
