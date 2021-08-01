import PropTypes from "prop-types";

// Styles
import styles from "../styles/components/ButtonLink.module.scss";

export default function ButtonLink({ link, label }) {
  return (
    <a className={styles.buttonLink} href={link}>
      {label}
    </a>
  );
}

ButtonLink.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
};
