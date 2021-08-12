// Next Components
import Link from "next/link";
import LinkUnderscore from "../components/LinkUnderscore";

// Styles
import styles from "../styles/components/HeaderNav.module.scss";

// Content
import { attributes as globalAttributes } from "../content/contact/configs.md";

export default function HeaderNav() {
  const { contact_email } = globalAttributes;

  const navMenuItems = [
    {
      link: "/#work",
      label: "Work",
    },
    {
      link: "/#about",
      label: "About",
    },
    {
      link: "/blog",
      label: "Blog",
    },
  ];

  const renderNavMenu = (items) => {
    return (
      <ul className={styles.navMenuItems}>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>
              <a>{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className={styles.navMenu}>
      {renderNavMenu(navMenuItems)}

      <div className={styles.email}>
        <LinkUnderscore
          label={contact_email}
          link={`mailto:${contact_email}`}
          size="md"
        />
      </div>
    </nav>
  );
}
