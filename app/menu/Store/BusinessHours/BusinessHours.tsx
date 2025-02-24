"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBusinessHoursValue,
  setFieldState,
} from "@/app/redux/slices/CreateStoreFormSlice"; // Import Redux action
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
    for (let min of ["00", "30"]) {
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
  const checkBusinessHours = () => {
    const hasValidHours = Object.values(businessHours).some(
      (day) => day.alwaysOpen || (day.from && day.to)
    );

    dispatch(setFieldState({ field: "businessHours", value: hasValidHours }));
    dispatch(setBusinessHoursValue(businessHours));
  };

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
        alwaysOpen: false, // Ensure alwaysOpen is false when manually setting hours
      },
    }));
  };

  const toggleAlwaysOpen = (day: keyof BusinessHoursState) => {
    setBusinessHours((prev) => {
      const isAlwaysOpen = !prev[day]?.alwaysOpen;
      return {
        ...prev,
        [day]: {
          alwaysOpen: isAlwaysOpen,
          from: isAlwaysOpen ? "" : prev[day]?.from || "",
          to: isAlwaysOpen ? "" : prev[day]?.to || "",
        },
      };
    });
  };

  // Trigger Redux update whenever businessHours change
  useEffect(() => {
    checkBusinessHours();
  }, [businessHours]);

  return (
    <div className={styles.formGroup}>
      <span className={styles.title}>Business Hours</span>

      {daysOfWeek.map(({ full, short }) => (
        <div key={full} className={styles.row}>
          <span className={styles.day}>{full}</span>

          <button
            className={`${styles.alwaysOpenButton} ${
              businessHours[short]?.alwaysOpen ? styles.active : ""
            }`}
            onClick={() => toggleAlwaysOpen(short)}
          >
            {businessHours[short]?.alwaysOpen ? (
              <>
                <svg viewBox="0 -960 960 960" width="24" height="24">
                  <path d="M321.38-242.31h115.39v-35.38h-80v-44.62h80v-115.38H321.38v35.38h80v44.62h-80v115.38Zm283.08 0h35.39v-195.38h-35.39v80h-44.61v-80h-35.39v115.38h80v80Zm226.15-278.77v318.77q0 30.31-21 51.31-21 21-51.3 21H202.92q-30.3 0-51.3-21-21-21-21-51.31v-319.54q-24.16-19.84-36.27-51.5-12.12-31.65-.5-68.34l40.46-132.16q8-25.23 27.15-40.69Q180.62-830 207.23-830h546q26.62 0 45.46 14.77 18.85 14.77 27.46 40.62l41.23 132.92q11.62 36.69-.5 68.11-12.11 31.43-36.27 52.5Z" />
                </svg>
                Open 24/7
              </>
            ) : (
              "Always Open"
            )}
          </button>

          <select
            className={`${styles.select} ${
              businessHours[short]?.alwaysOpen ? styles.disabled : ""
            }`}
            onChange={(e) => handleTimeChange(short, "from", e.target.value)}
            value={businessHours[short]?.from || ""}
            disabled={businessHours[short]?.alwaysOpen}
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
              businessHours[short]?.alwaysOpen ? styles.disabled : ""
            }`}
            onChange={(e) => handleTimeChange(short, "to", e.target.value)}
            value={businessHours[short]?.to || ""}
            disabled={businessHours[short]?.alwaysOpen}
          >
            <option value="">To</option>
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
