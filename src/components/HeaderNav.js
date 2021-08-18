// Next Components
import Link from "next/link";
import LinkUnderscore from "@components/LinkUnderscore";

// Site components
import DividerLine from "@components/DividerLine";

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
      link: "/#myProjects",
      label: t("nav_menu.work"),
      newTab: false,
    },
    {
      link: "/#aboutMe",
      label: t("nav_menu.about"),
      newTab: false,
    },
    {
      link: "https://medium.com/@felipemarcon",
      label: t("nav_menu.articles"),
      newTab: true,
    },
    {
      link: "mailto:oi@felipemarcon.com.br",
      label: t("nav_menu.contact"),
      newTab: false,
    },
  ];

  const renderNavMenu = (items) => {
    return (
      <ul className={styles.navMenuItems}>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>
              <a target={`${item.newTab && "target='_blank'"}`}>{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className={styles.navMenu} role="nav">
      {renderNavMenu(navMenuItems)}
    </nav>
  );
}
