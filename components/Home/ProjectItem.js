import PropTypes from "prop-types";

// Styles
import styles from "../../styles/home/projectItem.module.scss";

export default function ProjectItem({ data }) {
  const { link, title, date, company, tags } = data;

  return (
    <article className={styles.item}>
      <a href={link}>
        <div className={styles.heading}>
          <div className={styles.title}>
            <h3>{title}</h3>
          </div>
          <div className={styles.infos}>
            <div className={styles.date}>{date}</div>
            <div className={styles.company}>{company}</div>
          </div>
          <div className={styles.tags}>
            <ul>
              {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </a>
    </article>
  );
}

ProjectItem.propTypes = {
  data: PropTypes.object,
};
