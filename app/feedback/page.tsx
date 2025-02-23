"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Header from "../Header/Header";

const Page: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <section className={styles.page}>
        <h2>Support & Feedback Hub</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <label htmlFor="feedbackType">Select an option:</label>
            <select
              id="feedbackType"
              name="feedbackType"
              value={feedbackType}
              onChange={(e) => setFeedbackType(e.target.value)}
            >
              <option value="">-- Choose an option --</option>
              <option value="problem">
                Report a Problem (Complaint or Bug)
              </option>
              <option value="feature">Suggest a New Feature</option>
              <option value="feedback">General Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your issue or suggestion here..."
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Page;
