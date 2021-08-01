import classNames from "classnames";

// Styles
import styles from "../styles/components/Section.module.scss";

export default function Section({ children, customClass }) {
  const classes = classNames([styles.section], {
    [`${customClass}`]: customClass,
  });

  return <section className={classes}>{children}</section>;
}
