import PropTypes from "prop-types";

// Styles
import styles from "@styles/components/Button.module.scss";

export default function Button({ link, label }) {
  return (
    <button className={styles.button}>
      <span className={styles.label}>{label}</span>
    </button>
  );
}

Button.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
};
