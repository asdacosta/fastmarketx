"use client";
import { notFound, useParams } from "next/navigation";
import React from "react";
import Header from "../Header/Header";

const allowedAccounts = ["asdacosta"];

function page() {
  const params = useParams();
  const account = params?.account as string;

  if (!allowedAccounts.includes(account)) notFound();

  return (
    <>
      <Header />
      <h2>{account}</h2>
    </>
  );
}

export default page;
