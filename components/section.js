import styles from "../styles/components/Section.module.scss";

export default function Section({ children }) {
  return <section className={styles.section}>{children}</section>;
}
