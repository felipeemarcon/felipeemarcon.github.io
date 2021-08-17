import classNames from "classnames";
import PropTypes from "prop-types";

// Styles
import styles from "@styles/components/Section.module.scss";

export default function Section({ children, id, customClass }) {
  const classes = classNames([styles.section], {
    [`${customClass}`]: customClass,
  });

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
}

Section.defaultProps = {
  id: "",
  customClass: "",
};

Section.propTypes = {
  id: PropTypes.string,
  customClass: PropTypes.string,
};
