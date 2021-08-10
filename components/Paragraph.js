import classNames from "classnames";
import PropTypes from "prop-types";
import { Fragment } from "react";

// Styles
import styles from "../styles/components/Paragraph.module.scss";

const DEFAULT_PARAGRAPH_TEXT =
  "EricMauris laoreet mattis lobortis. Morbi sit amet vulputate ante, id facilisis ligula. Suspendisse lacinia bibendum dolor, vel dictum ipsum varius sit amet. Aliquam elementum fringilla cursus. Phasellus commodo quis ligula vel fermentum. Mauris luctus, arcu a volutpat ultricies, magna odio aliquam ex, eu vestibulum diam turpis ac nulla. Fusce fringilla tincidunt eros eget fermentum. Quisque eget congue lectus. Maecenas posuere sit amet erat sit amet posuere.";

export default function Paragraph({
  children = DEFAULT_PARAGRAPH_TEXT,
  size = "md",
  theme = "onLight",
  customClass,
}) {
  const classes = classNames([styles.paragraph], {
    [`${styles.sm}`]: size === "sm",
    [`${styles.md}`]: size === "md",
    [`${styles.lg}`]: size === "lg",
    [`${styles.xl}`]: size === "xl",
    [`${styles.onLight}`]: theme === "onLight",
    [`${styles.onDark}`]: theme === "onDark",
    [`${styles.customClass}`]: customClass,
  });

  return <p className={classes}>{children}</p>;
}

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  theme: PropTypes.string,
};
