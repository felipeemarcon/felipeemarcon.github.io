import Link from "next/link";

import Icon from "@components/Icon";

// Styles
import styles from "@styles/components/SocialLinks.module.scss";

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
              >
                <Icon icon={icon} color="#fff" size={32} />
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
