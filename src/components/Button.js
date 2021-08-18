import PropTypes from "prop-types";

// Next Components
import Link from "next/link";

// Site Components
import Icon from "./Icon";

// Styles
import styles from "@styles/components/Button.module.scss";
import classNames from "classnames";

export default function Button({ label, link, icon, hasArrow }) {
  const classes = {
    button: styles.button,
    label: styles.label,
    icon: styles.icon,
  };

  const iconClasses = classNames([classes.icon], {
    [styles.arrowIcon]: hasArrow,
  });

  const renderButtonLink = () => (
    <Link href={link}>
      <a className={classes.button}>
        <span className={classes.label}>{label}</span>
        <div className={iconClasses}>
          <Icon icon={icon} size={32} />
        </div>
      </a>
    </Link>
  );

  const renderButton = () => (
    <button className={classes.button} type="submit">
      <span className={classes.label}>{label}</span>
      <div className={iconClasses}>
        <Icon icon={icon} size={32} />
      </div>
    </button>
  );

  return link ? renderButtonLink() : renderButton();
}

Button.defaultProps = {
  link: "#",
  label: "Button label",
};

Button.propTypes = {
  hasArrow: PropTypes.string,
  link: PropTypes.string,
  label: PropTypes.string,
};
