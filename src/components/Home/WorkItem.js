// Site Components
import Heading from "@components/Heading";

// Utils
import formatDateToMonthAndYear from "@utils/formatDateToMonthAndYear";

// Styles
import styles from "@styles/home/workItem.module.scss";

export default function WorkItem({ work }) {
  const { company, role, description, date_start, date_end } = work.data;

  const renderWorkPeriod = (period) => {
    if (!period.date_end) {
      return `${formatDateToMonthAndYear(date_start)} - now`;
    }

    return `${formatDateToMonthAndYear(date_start)} -
      ${formatDateToMonthAndYear(date_end)}`;
  };

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
          {renderWorkPeriod({ date_start, date_end })}
        </div>
      </div>
    </div>
  );
}
