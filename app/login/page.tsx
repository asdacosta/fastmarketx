"use client";

import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import ClientPage from "./ClientPage";

export default function PageWrapper() {
  return (
    <Provider store={store}>
      <ClientPage />
    </Provider>
  );
}
