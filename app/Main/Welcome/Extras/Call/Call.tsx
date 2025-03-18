"use client";
import React, { useState } from "react";
import styles from "./Call.module.css";

function Call({ inMenu = false }: { inMenu?: boolean }) {
  const [showModal, setShowModal] = useState(false);
  const phone1 = "050 140 3974";
  const phone2 = "053 858 4584";

  return (
    <>
      <div onClick={() => setShowModal(true)} className={styles.contactCard}>
        {inMenu ? (
          <svg viewBox="0 0 512 512" className={styles.callIcon}>
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
        ) : (
          <svg viewBox="0 0 448 512">
            <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z" />
          </svg>
        )}
        <p>
          <span>Call</span>
          {!inMenu && (
            <span>
              {phone1} | {phone2}
            </span>
          )}
        </p>
      </div>
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <p>Select a number to call:</p>
            <button
              onClick={() => (window.location.href = `tel:${phone1}`)}
              className={styles.callButton}
            >
              {phone1}
            </button>
            <button
              onClick={() => (window.location.href = `tel:${phone2}`)}
              className={styles.callButton}
            >
              {phone2}
            </button>
            <br />
            <button
              onClick={(e) => {
                (e.nativeEvent as Event).stopImmediatePropagation();
                setShowModal(false);
              }}
              className={styles.cancelButton}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Call;
