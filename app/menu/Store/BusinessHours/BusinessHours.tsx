"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setField } from "@/app/redux/slices/CreateStoreFormSlice"; // Import Redux action
import { format } from "date-fns";
import styles from "./BusinessHours.module.css";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
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
  const [businessHours, setBusinessHours] = useState<{
    [day: string]: { from: string; to: string; alwaysOpen: boolean };
  }>({});

  // Check if any day has valid business hours
  const checkBusinessHours = () => {
    const hasValidHours = Object.values(businessHours).some(
      (day) => day.alwaysOpen || (day.from && day.to)
    );

    dispatch(setField({ field: "businessHours", value: hasValidHours }));
  };

  const handleTimeChange = (
    day: string,
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

  const toggleAlwaysOpen = (day: string) => {
    setBusinessHours((prev) => {
      const isAlwaysOpen = !prev[day]?.alwaysOpen;
      // Update alwaysOpen and set to and From back to default ""
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

      {daysOfWeek.map((day) => (
        <div key={day} className={styles.row}>
          <span className={styles.day}>{day}</span>

          <button
            className={`${styles.alwaysOpenButton} ${
              businessHours[day]?.alwaysOpen ? styles.active : ""
            }`}
            onClick={() => toggleAlwaysOpen(day)}
          >
            {businessHours[day]?.alwaysOpen ? "Open 24/7" : "Always Open"}
          </button>

          <select
            className={`${styles.select} ${
              businessHours[day]?.alwaysOpen ? styles.disabled : ""
            }`}
            onChange={(e) => handleTimeChange(day, "from", e.target.value)}
            value={businessHours[day]?.from || ""}
            disabled={businessHours[day]?.alwaysOpen}
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
              businessHours[day]?.alwaysOpen ? styles.disabled : ""
            }`}
            onChange={(e) => handleTimeChange(day, "to", e.target.value)}
            value={businessHours[day]?.to || ""}
            disabled={businessHours[day]?.alwaysOpen}
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
