"use client";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Label,
} from "recharts";
import styles from "./Chart.module.css";

const weeklyData = [
  { date: "Mon", amount: 500 },
  { date: "Tue", amount: 700 },
  { date: "Wed", amount: 800 },
  { date: "Thu", amount: 650 },
  { date: "Fri", amount: 900 },
  { date: "Sat", amount: 1000 },
  { date: "Sun", amount: 1200 },
];

const monthlyData = [
  { date: "Week 1", amount: 4000 },
  { date: "Week 2", amount: 4500 },
  { date: "Week 3", amount: 3800 },
  { date: "Week 4", amount: 5000 },
];

const yearlyData = [
  { date: "Jan", amount: 1200 },
  { date: "Feb", amount: 2500 },
  { date: "Mar", amount: 1800 },
  { date: "Apr", amount: 3200 },
  { date: "May", amount: 4000 },
  { date: "Jun", amount: 3800 },
  { date: "Jul", amount: 4500 },
  { date: "Aug", amount: 4800 },
  { date: "Sep", amount: 5100 },
  { date: "Oct", amount: 5300 },
  { date: "Nov", amount: 6000 },
  { date: "Dec", amount: 7000 },
];

export default function Chart() {
  const [timeFrame, setTimeFrame] = useState<"weekly" | "monthly" | "yearly">(
    "weekly"
  );

  const getData = () => {
    if (timeFrame === "weekly") return weeklyData;
    if (timeFrame === "monthly") return monthlyData;
    return yearlyData;
  };

  return (
    <div className={styles.chartContainer}>
      <div className={styles.buttonContainer}>
        <button
          className={
            timeFrame === "weekly" ? styles.activeButton : styles.button
          }
          onClick={() => setTimeFrame("weekly")}
        >
          Weekly
        </button>
        <button
          className={
            timeFrame === "monthly" ? styles.activeButton : styles.button
          }
          onClick={() => setTimeFrame("monthly")}
        >
          Monthly
        </button>
        <button
          className={
            timeFrame === "yearly" ? styles.activeButton : styles.button
          }
          onClick={() => setTimeFrame("yearly")}
        >
          Yearly
        </button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={getData()}
          margin={{ top: 20, right: 30, left: 40, bottom: 50 }}
        >
          <CartesianGrid strokeDasharray="3 3" className={styles.grid} />

          <XAxis dataKey="date" className={styles.axis}>
            <Label
              value="Time Period"
              offset={-10}
              position="insideBottom"
              style={{ fill: "white", fontSize: "14px" }}
            />
          </XAxis>

          <YAxis className={styles.axis}>
            <Label
              value="Revenue (GH₵)"
              angle={-90}
              offset={-5}
              position="insideLeft"
              style={{ fill: "white", fontSize: "14px" }}
            />
          </YAxis>

          <Tooltip
            contentStyle={{
              backgroundColor: "#000",
              color: "#fff",
              border: "1px solid rgba(232, 205, 4, 1)",
            }}
            labelStyle={{ color: "rgba(232, 205, 4, 1)" }}
          />

          <Line
            type="monotone"
            dataKey="amount"
            stroke="rgba(232, 205, 4, 1)"
            strokeWidth={3}
            dot={{ fill: "rgba(232, 205, 4, 1)", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
