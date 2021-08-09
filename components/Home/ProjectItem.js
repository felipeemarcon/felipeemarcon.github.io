import React from "react";

import PropTypes from "prop-types";

// Styles
import styles from "../../styles/home/projectItem.module.scss";

// Images
import IconExternalLink from "../../public/images/profile_image.jpg";

export default function ProjectItem({ data }) {
  const { link, title, date, company, tags } = data;

  return (
    <article className={styles.item}>
      <div className={styles.container}>
        <a href={link} className={styles.link}>
          <div className={styles.content}>
            <div className={styles.heading}>
              <div className={styles.title}>
                <h3>{title}</h3>
              </div>
              <div className={styles.infos}>
                <span className={styles.date}>{date}</span>
                <span className={styles.company}>{company}</span>
              </div>
            </div>
            <div className={styles.tags}>
              <ul>
                {tags.map((tag, index) => (
                  <li key={index}>#{tag}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.iconLink}>
            <svg
              width="64"
              height="65"
              viewBox="0 0 64 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 16.7H29.6V21.5H12.8V52.7H44V35.9H48.8V57.5H8V16.7Z"
                fill="white"
              />
              <path
                className={styles.iconLinkArrow}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.8059 14.3H39.2V9.5H56V26.3H51.2V17.6941L28.8971 39.9971L25.5029 36.6029L47.8059 14.3Z"
                fill="white"
              />
            </svg>
          </div>
        </a>
      </div>
    </article>
  );
}

ProjectItem.propTypes = {
  data: PropTypes.object,
};
