"use client";
import React, { useState } from "react";
import styles from "./Call.module.css";

function Call() {
  const [showModal, setShowModal] = useState(false);
  const phone1 = "050 140 3974";
  const phone2 = "053 858 4584";

  return (
    <>
      <div onClick={() => setShowModal(true)} className={styles.contactCard}>
        <svg viewBox="0 0 448 512">
          <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z" />
        </svg>
        <p>
          <span>Call</span>
          <span>
            {phone1} | {phone2}
          </span>
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
              onClick={() => setShowModal(false)}
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
