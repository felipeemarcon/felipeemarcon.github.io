// Site Components
import Heading from "@components/Heading";

// Styles
import styles from "@styles/home/workItem.module.scss";

export default function WorkItem({ work }) {
  const { company, role, description, date_start, date_end } = work.data;

  return (
    <div className={styles.item}>
      <div className={styles.heading}>
        <div className={styles.title}>
          <Heading type="h5">{company}</Heading>
        </div>
        <div className={styles.role}>{role}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <div className={styles.period}>
          {date_start} - {date_end}
        </div>
      </div>
    </div>
  );
}
