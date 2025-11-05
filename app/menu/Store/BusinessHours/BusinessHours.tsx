"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBusinessHoursValue,
  setFieldState,
} from "@/app/redux/slices/CreateStoreFormSlice";
import { format } from "date-fns";
import styles from "./BusinessHours.module.css";
import { BusinessHoursState } from "../../../redux/slices/CreateStoreFormSlice";
import { RootState } from "@/app/redux/store";

const daysOfWeek: { full: string; short: keyof BusinessHoursState }[] = [
  { full: "Monday", short: "mon" },
  { full: "Tuesday", short: "tue" },
  { full: "Wednesday", short: "wed" },
  { full: "Thursday", short: "thu" },
  { full: "Friday", short: "fri" },
  { full: "Saturday", short: "sat" },
  { full: "Sunday", short: "sun" },
];

const generateTimeOptions = () => {
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    for (const min of ["00", "30"]) {
      const time = format(new Date(2022, 0, 1, hour, parseInt(min)), "hh:mm a");
      times.push(time);
    }
  }
  return times;
};
const timeOptions = generateTimeOptions();

export default function BusinessHours() {
  const dispatch = useDispatch();
  const formFieldsBusHours = useSelector(
    (state: RootState) => state.storeFormValue.businessHours
  );

  const [businessHours, setBusinessHours] =
    useState<BusinessHoursState>(formFieldsBusHours);

  // Check if any day has valid business hours
  const checkBusinessHours = useCallback(() => {
    const hasValidHours = Object.values(businessHours).some(
      (day) => day.isOpen && day.from && day.to
    );

    dispatch(setFieldState({ field: "businessHours", value: hasValidHours }));
    dispatch(setBusinessHoursValue(businessHours));
  }, [businessHours, dispatch]);

  const handleTimeChange = (
    day: keyof BusinessHoursState,
    type: "from" | "to",
    value: string
  ) => {
    setBusinessHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [type]: value,
      },
    }));
  };

  const handleToggle = (day: keyof BusinessHoursState) => {
    setBusinessHours((prev) => ({
      ...prev,
      [day]: {
        isOpen: !prev[day].isOpen,
        from: !prev[day].isOpen ? prev[day]?.from || "" : "",
        to: !prev[day].isOpen ? prev[day]?.to || "" : "",
      },
    }));
  };

  // Trigger Redux update whenever businessHours change
  useEffect(() => {
    checkBusinessHours();
  }, [businessHours, checkBusinessHours]);

  return (
    <div className={styles.formGroup}>
      <span className={styles.title}>Business Hours</span>

      {daysOfWeek.map(({ full, short }) => (
        <div key={full} className={styles.row}>
          <span className={styles.day}>{full}</span>

          <section className={styles.selection}>
            <div>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  checked={businessHours[short]?.isOpen}
                  onChange={() => handleToggle(short)}
                />
                <span className={styles.slider}></span>
              </label>
              <span
                className={
                  businessHours[short]?.isOpen
                    ? styles.openLabel
                    : styles.closedLabel
                }
              >
                {businessHours[short]?.isOpen ? "Opened" : "Closed"}
              </span>
            </div>

            <div>
              <select
                className={`${styles.select} ${
                  !businessHours[short]?.isOpen ? styles.disabled : ""
                }`}
                onChange={(e) =>
                  handleTimeChange(short, "from", e.target.value)
                }
                value={businessHours[short]?.from || ""}
                disabled={!businessHours[short]?.isOpen}
              >
                <option value="">From</option>
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <select
                className={`${styles.select} ${
                  !businessHours[short]?.isOpen ? styles.disabled : ""
                }`}
                onChange={(e) => handleTimeChange(short, "to", e.target.value)}
                value={businessHours[short]?.to || ""}
                disabled={!businessHours[short]?.isOpen}
              >
                <option value="">To</option>
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
