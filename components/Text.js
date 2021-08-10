import classNames from "classnames";
import PropTypes from "prop-types";

// Styles
import styles from "../styles/components/Text.module.scss";

const DEFAULT_PARAGRAPH_TEXT =
  "EricMauris laoreet mattis lobortis. Morbi sit amet vulputate ante, id facilisis ligula. Suspendisse lacinia bibendum dolor, vel dictum ipsum varius sit amet. Aliquam elementum fringilla cursus. Phasellus commodo quis ligula vel fermentum. Mauris luctus, arcu a volutpat ultricies, magna odio aliquam ex, eu vestibulum diam turpis ac nulla. Fusce fringilla tincidunt eros eget fermentum. Quisque eget congue lectus. Maecenas posuere sit amet erat sit amet posuere.";

export default function Text({
  children = DEFAULT_PARAGRAPH_TEXT,
  tag = "p",
  size = "md",
  weight = "500",
  theme = "onLight",
  customClass,
}) {
  const classes = classNames([styles.text], {
    [`${styles.sm}`]: size === "sm",
    [`${styles.md}`]: size === "md",
    [`${styles.lg}`]: size === "lg",
    [`${styles.xl}`]: size === "xl",
    [`${styles.regular}`]: weight === "500",
    [`${styles.onLight}`]: theme === "onLight",
    [`${styles.onDark}`]: theme === "onDark",
    [`${styles.customClass}`]: customClass,
  });

  const Tag = tag;

  return <Tag className={classes}>{children}</Tag>;
}

Text.propTypes = {
  theme: PropTypes.string,
  tag: PropTypes.string,
  size: PropTypes.string,
  customClass: PropTypes.string,
};
