import React from "react";
import styles from "./Bot.module.css";

function Bot() {
  return (
    <section className={styles.bot}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="M180-140v-180.85q0-29.84 21.24-51.03 21.24-21.2 51.07-21.2h455.38q29.83 0 51.07 21.24Q780-350.6 780-320.77V-140H180Zm185.77-308.46q-77.09 0-131.43-54.34T180-634.23q0-77.09 54.34-131.43T365.77-820h228.46q77.09 0 131.43 54.34T780-634.23q0 77.09-54.34 131.43t-131.43 54.34H365.77ZM240-200h480v-120.77q0-5.38-3.46-8.85-3.46-3.46-8.85-3.46H252.31q-5.39 0-8.85 3.46-3.46 3.47-3.46 8.85V-200Zm125.77-308.46h228.46q52.69 0 89.23-36.54Q720-581.54 720-634.23q0-52.69-36.54-89.23Q646.92-760 594.23-760H365.77q-52.69 0-89.23 36.54Q240-686.92 240-634.23q0 52.69 36.54 89.23 36.54 36.54 89.23 36.54Zm-.01-91.16q14.7 0 24.66-9.94 9.96-9.95 9.96-24.66 0-14.7-9.94-24.66-9.95-9.97-24.66-9.97-14.7 0-24.66 9.95-9.97 9.95-9.97 24.66 0 14.7 9.95 24.66t24.66 9.96Zm228.46 0q14.7 0 24.66-9.94 9.97-9.95 9.97-24.66 0-14.7-9.95-24.66-9.95-9.97-24.66-9.97-14.7 0-24.66 9.95t-9.96 24.66q0 14.7 9.94 24.66 9.95 9.96 24.66 9.96ZM480-200Zm0-434.23Z" />
      </svg>
    </section>
  );
}

export default Bot;
