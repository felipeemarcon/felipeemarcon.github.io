import Link from "next/link";

// Styles
import styles from "../styles/components/SocialLinks.module.scss";

export default function SocialLinks({ links }) {
  return (
    <ul className={styles.socialList}>
      {links.map(({ frontmatter: { link, label, icon } }, index) => {
        return (
          <li key={index}>
            <Link href={link}>
              <a
                target="_blank"
                rel="external noreferrer"
                className={styles.socialItem}
                title={label}
              ></a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
