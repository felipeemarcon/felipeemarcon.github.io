import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import styles from "../styles/components/ButtonLink.module.scss";

export default function ButtonLink({
  link,
  label,
  size = "sm",
  color = "blue",
}) {
  const sizesClasses = classNames(styles.buttonLink, {
    [`${styles.buttonLinkSmall}`]: size == "sm",
    [`${styles.buttonLinkMedium}`]: size == "md",
  });

  const colorClasses = classNames({
    [styles.buttonLinkBlue]: color == "blue",
  });

  const classes = `${sizesClasses} ${colorClasses}`;

  return (
    <a className={classes} href={link}>
      {label}
    </a>
  );
}

ButtonLink.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
};
