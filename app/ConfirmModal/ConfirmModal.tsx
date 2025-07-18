"use client";

import React from "react";
import ReactDOM from "react-dom";
import styles from "./ConfirmModal.module.css";

interface ConfirmModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  question: string;
}

const ConfirmModal = ({ onConfirm, onCancel, question }: ConfirmModalProps) => {
  if (typeof window === "undefined") return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.confirmModal}>
        <div className={styles.modalContent}>
          <p>{question}</p>
          <div className={styles.modalActions}>
            <button className={styles.confirmBtn} onClick={onConfirm}>
              Yes
            </button>
            <button className={styles.cancelBtn} onClick={onCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ConfirmModal;
