"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

import styles from "./CreateStore.module.css";
import { CheckCircle, XCircle } from "lucide-react";
import BusinessHours from "./BusinessHours/BusinessHours";
import InfoFields from "./InfoFields/InfoFields";
import CategoryFields from "./CategoryFields/CategoryFields";
import Location from "./Location/Location";
import Logo from "./Logo/Logo";
import Banner from "./Banner/Banner";
import { disableCategoryType } from "@/app/redux/slices/updateStoreSlice";

function CreateStore() {
  const dispatch = useDispatch();
  const [isPublic, setIsPublic] = useState(true);
  const formFields = useSelector((state: RootState) => state.createStoreForm);

  // Check if all required fields are true
  const allFieldsComplete = Object.values(formFields).every(
    (value) => value === true
  );

  return (
    <section className={styles.createStore}>
      <section className={styles.container}>
        <p>Fill in the details to set up your store.</p>
        <div className={styles.card}>
          <InfoFields />
          <CategoryFields />
          <BusinessHours />
          <Location />
          <Logo />
          <Banner />

          <div className={styles.toggleGroup}>
            <label>Public Store</label>
            <div
              className={styles.toggle}
              onClick={() => setIsPublic(!isPublic)}
            >
              {isPublic ? (
                <CheckCircle size={20} color="green" />
              ) : (
                <XCircle size={20} color="gray" />
              )}
              <span>{isPublic ? "Enabled" : "Disabled"}</span>
            </div>
          </div>

          <button
            className={`${styles.createButton} ${
              allFieldsComplete ? styles.activeButton : ""
            }`}
            onClick={() => dispatch(disableCategoryType())}
          >
            {allFieldsComplete ? "Create Store" : "Complete all fields"}
          </button>
        </div>
      </section>
    </section>
  );
}

export default CreateStore;
