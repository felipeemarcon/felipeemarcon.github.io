import PropTypes from "prop-types";

// Next Components
import Link from "next/link";

// Styles
import styles from "@styles/components/Button.module.scss";

export default function Button({ type, label, link }) {
  const classes = {
    button: styles.button,
    label: styles.label,
  };

  const renderButtonLink = () => (
    <Link href={link}>
      <a className={classes.button}>
        <span className={classes.label}>{label}</span>
      </a>
    </Link>
  );

  const renderButton = () => (
    <button className={classes.button} type="submit">
      <span className={classes.label}>{label}</span>
    </button>
  );

  const handleWhichButtonRender = (type) => {
    switch (type) {
      case "link":
        return renderButtonLink();
      case "button":
        return renderButton();
      default:
        return renderButtonLink();
    }
  };

  return handleWhichButtonRender();
}

Button.defaultProps = {
  type: "link",
  link: "#",
  label: "Button label",
};

Button.propTypes = {
  type: PropTypes.string,
  link: PropTypes.string,
  label: PropTypes.string,
};
