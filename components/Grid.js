import classNames from "classnames";
import PropTypes from "prop-types";

// Styles
import styles from "@styles/components/Grid.module.scss";

export default function Grid({
  children,
  customClass,
  alignHorizontal = true,
}) {
  const classes = classNames([styles.grid], {
    [`${styles.alignHorizontal}`]: alignHorizontal,
    [`${customClass}`]: customClass,
  });

  return <div className={classes}>{children}</div>;
}

Grid.propTypes = {
  customClass: PropTypes.string,
  alignHorizontal: PropTypes.bool,
};
