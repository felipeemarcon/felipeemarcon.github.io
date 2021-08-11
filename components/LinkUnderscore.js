import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import styles from "../styles/components/LinkUnderscore.module.scss";

export default function LinkUnderscore({ link, label, size, color = "blue" }) {
  const sizesClasses = classNames([styles.linkUnderscore], {
    [styles.linkUnderscoreSmall]: size == "sm",
    [styles.linkUnderscoreMedium]: size == "md",
  });

  const colorClasses = classNames([styles.linkUnderscoreColorDefault], {
    [styles.linkUnderscoreColorBlue]: color == "blue",
    [styles.linkUnderscoreColorRed]: color == "red",
    [styles.linkUnderscoreColorYellow]: color == "yellow",
  });

  const classes = `${sizesClasses} ${colorClasses}`;

  return (
    <a className={classes} href={link}>
      <span>{label}</span>
    </a>
  );
}

LinkUnderscore.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};
