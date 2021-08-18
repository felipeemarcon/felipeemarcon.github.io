import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import styles from "@styles/components/DividerLine.module.scss";

export default function DividerLine({
  orientation,
  width,
  height,
  color,
  spaces,
}) {
  const classes = classNames([styles.divider], {
    [`${styles.divider_horizontal}`]: orientation === "horizontal",
    [`${styles.divider_vertical}`]: orientation === "vertical",
  });

  const inlineStyles = {
    width,
    height,
    backgroundColor: color,
    margin: spaces,
  };

  const renderStyles = () => {
    const hasWidthOrHeight = width || height;

    return hasWidthOrHeight ? inlineStyles : {};
  };

  return <div className={classes} style={inlineStyles}></div>;
}

DividerLine.defaultProps = {
  orientation: "horizontal",
  width: "1px",
  height: "32px",
  color: "rgba(36, 37, 44, 0.08)",
  spaces: "10px 10px",
};

DividerLine.propTypes = {
  orientation: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  spaces: PropTypes.string,
};
