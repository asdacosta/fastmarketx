import styles from "./WorkingHours.module.css";

interface WorkingHoursProps {
  hours: {
    day: string;
    open?: string;
    close?: string;
    closed?: boolean;
  }[];
}

const WorkingHours: React.FC<WorkingHoursProps> = ({ hours }) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Day of Week</th>
            <th>Open Hour</th>
            <th>Close Hour</th>
          </tr>
        </thead>
        <tbody>
          {hours.map(({ day, open, close, closed }) => (
            <tr key={day} className={closed ? styles.closed : ""}>
              <td>{day}</td>
              {closed ? (
                <td colSpan={2}>CLOSED</td>
              ) : (
                <>
                  <td>{open}</td>
                  <td>{close}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkingHours;
