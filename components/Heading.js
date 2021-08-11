import classNames from "classnames";
import PropTypes from "prop-types";

// Styles
import styles from "../styles/components/Heading.module.scss";

export default function Heading({ type, customClass, children }) {
  let classes = classNames([styles.text], {
    [customClass]: customClass,
  });

  const handleRenderHeading = () => {
    switch (type) {
      case "h1":
        return <h1 className={classes}>{children}</h1>;
      case "h2":
        return <h2 className={classes}>{children}</h2>;
      case "h3":
        return <h3 className={classes}>{children}</h3>;
      case "h4":
        return <h4 className={classes}>{children}</h4>;
      case "h5":
        return <h5 className={classes}>{children}</h5>;
      case "h6":
        return <h6 className={classes}>{children}</h6>;
      default:
        return <h2 className={classes}>{children}</h2>;
    }
  };

  return <div className={styles.heading}>{handleRenderHeading()}</div>;
}

Heading.propTypes = {
  type: PropTypes.string,
  customClass: PropTypes.string,
};
