import {
  Smartphone,
  MapPin,
  Briefcase,
  Coins,
  KeySquare,
  Timer,
  FileText,
  Share2,
} from "lucide-react";
import styles from "./JobCard.module.css";

interface Job {
  title: string;
  store: string;
  type: string;
  location: string;
  skill: string;
  salary: string;
  deadline: string;
}

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <section className={styles.jobCard}>
      <div className={styles.header}>
        <h2 className={styles.title}>{job.title}</h2>
        <p className={styles.store}>{job.store}</p>
      </div>

      <div className={styles.type}>
        <Briefcase size={16} />
        <span>{job.type}</span>
      </div>
      <div className={styles.location}>
        <MapPin size={16} />
        <span>{job.location}</span>
      </div>
      <div className={styles.skill}>
        <KeySquare size={16} />
        <span>{job.skill}</span>
      </div>
      <div className={styles.salary}>
        <Coins size={16} />
        <span>{job.salary}</span>
      </div>
      <div className={styles.timer}>
        <Timer size={16} />
        <span>{job.deadline}</span>
      </div>

      <div className={styles.applyBox}>
        <button className={styles.applyButton}>Apply Now</button>
        <div className={styles.callDescriptionBox}>
          <FileText size={20} className={styles.descriptionIcon} />
          <Smartphone size={20} className={styles.callIcon} />
          <Share2 size={20} className={styles.shareIcon} />
        </div>
      </div>
    </section>
  );
};

export default JobCard;
