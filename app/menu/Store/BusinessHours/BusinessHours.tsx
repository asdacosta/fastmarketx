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
            {businessHours[day]?.alwaysOpen ? (
              <>
                <svg viewBox="0 -960 960 960" width="24" height="24">
                  <path d="M321.38-242.31h115.39v-35.38h-80v-44.62h80v-115.38H321.38v35.38h80v44.62h-80v115.38Zm283.08 0h35.39v-195.38h-35.39v80h-44.61v-80h-35.39v115.38h80v80Zm226.15-278.77v318.77q0 30.31-21 51.31-21 21-51.3 21H202.92q-30.3 0-51.3-21-21-21-21-51.31v-319.54q-24.16-19.84-36.27-51.5-12.12-31.65-.5-68.34l40.46-132.16q8-25.23 27.15-40.69Q180.62-830 207.23-830h546q26.62 0 45.46 14.77 18.85 14.77 27.46 40.62l41.23 132.92q11.62 36.69-.5 68.11-12.11 31.43-36.27 52.5ZM568.62-550q32.77 0 49.27-20.04t13.5-43.04L607.08-770h-96.47v158q0 25.23 17.08 43.62Q544.77-550 568.62-550Zm-180 0q27.61 0 44.8-18.38 17.2-18.39 17.2-43.62v-158h-96.47l-24.3 158.46q-3.24 21.31 13.38 41.43Q359.85-550 388.62-550Zm-178 0q22.23 0 38.23-15.5 16-15.5 19.77-38.96L292.15-770h-84.92q-6.54 0-10.38 2.88-3.85 2.89-5.77 8.66l-38.47 130.15q-7.92 25.77 7.47 52.04Q175.46-550 210.62-550Zm540 0q32.46 0 49.69-25.5 17.23-25.5 8.31-52.81l-40.47-130.92q-1.92-5.77-5.76-8.27-3.85-2.5-10.39-2.5h-82.92l23.53 165.54q3.77 23.46 19.77 38.96t38.24 15.5Zm-547.7 360h555.39q5.38 0 8.84-3.46 3.47-3.46 3.47-8.85v-291.23q-6.54 2.39-10.93 2.96-4.38.58-9.07.58-27 0-47.5-9.77t-39.74-31.31q-16.84 18.77-39.84 29.93-23 11.15-52.46 11.15-25.46 0-48-10.58-22.54-10.57-42.46-30.5-18.54 19.93-42 30.5Q415.15-490 391.08-490q-27.08 0-50.77-9.81-23.69-9.81-41.69-31.27-25.24 25.23-46.51 33.16-21.26 7.92-41.49 7.92-4.7 0-9.7-.58-5-.57-10.31-2.96v291.23q0 5.39 3.47 8.85 3.46 3.46 8.84 3.46Zm555.39 0H202.92 758.31Z" />
                </svg>
                Open 24/7
              </>
            ) : (
              "Always Open"
            )}
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
