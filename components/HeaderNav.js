// Next Components
import Link from "next/link";
import LinkUnderscore from "@components/LinkUnderscore";

// Content
import { attributes as globalAttributes } from "@content/contact/configs.md";

// i18n
import { Trans, useTranslation } from "react-i18next";

// Styles
import styles from "@styles/components/HeaderNav.module.scss";

export default function HeaderNav() {
  const { t } = useTranslation("translation", { useSuspense: false });

  const { contact_email } = globalAttributes;

  const navMenuItems = [
    {
      link: "/#work",
      label: t("nav_menu.work"),
    },
    {
      link: "/#about",
      label: t("nav_menu.about"),
    },
    {
      link: "/blog",
      label: t("nav_menu.articles"),
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
