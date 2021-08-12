// Site Components
import Heading from "@components/Heading";

// Styles
import styles from "@styles/home/workItem.module.scss";

export default function WorkItem({ data }) {
  const { company, role, summary, period } = data;

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
          <p>{summary}</p>
        </div>
        <div className={styles.period}>{period}</div>
      </div>
    </div>
  );
}
