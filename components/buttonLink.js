import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import styles from "../styles/components/ButtonLink.module.scss";

export default function ButtonLink({ link, label, size, color = "blue" }) {
  const sizesClasses = classNames(styles.buttonLink, {
    [`${styles.buttonLinkSmall}`]: size == "sm",
    [`${styles.buttonLinkMedium}`]: size == "md",
  });

  const colorClasses = classNames({
    [styles.buttonLinkBlue]: color == "blue",
    [styles.buttonLinkRed]: color == "red",
  });

  const classes = `${sizesClasses} ${colorClasses}`;

  return (
    <a className={classes} href={link}>
      <span>{label}</span>
    </a>
  );
}

ButtonLink.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};
