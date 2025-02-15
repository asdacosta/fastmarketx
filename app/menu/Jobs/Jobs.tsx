import React from "react";
import JobCard from "./JobCard/JobCard";
import styles from "./Jobs.module.css";

const jobs = [
  {
    title: "Campus IT Support",
    store: "University of XYZ",
    type: "Full-time | On-Site",
    location: "On Campus",
    skill: "No required skill",
    salary: "₵15/weekly",
    deadline: "12/02/2025",
  },
  {
    title: "Library Assistant",
    store: "ABC University Library",
    type: "Work-Study | Remote",
    location: "Hall",
    skill: "No required skill",
    salary: "₵12/monthly",
    deadline: "12/02/2025",
  },
  {
    title: "Library Assistant",
    store: "ABC University Library",
    type: "Internship | Hybrid",
    location: "Hostel",
    skill: "No required skill",
    salary: "₵12/monthly",
    deadline: "12/02/2025",
  },
  {
    title: "Library Assistant",
    store: "ABC University Library",
    type: "Work-Study",
    location: "Area",
    skill: "No required skill",
    salary: "₵12/weekly",
    deadline: "12/02/2025",
  },
  {
    title: "Library Assistant",
    store: "ABC University Library",
    type: "Work-Study",
    location: "Library",
    skill: "No required skill",
    salary: "₵12/weekly",
    deadline: "12/02/2025",
  },
];

function Jobs() {
  return (
    <section className={styles.jobs}>
      <section className={styles.jobPosts}>
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </section>
    </section>
  );
}

export default Jobs;
