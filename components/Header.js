import { useTranslation } from "react-i18next";

// Next Components
import Link from "next/link";

// Site Components
import Container from "@components/Container";
import Grid from "@components/Grid";
import HeaderNav from "@components/HeaderNav";
import Icon from "@components/Icon";

// Styles
import styles from "@styles/components/Header.module.scss";

// Images
import BrandSymbol from "@images/brand_symbol.svg";
import NavMenuLinesIcon from "@images/navmenu_lines.svg";

function Header() {
  const { t, i18n } = useTranslation("translation", { useSuspense: false });
  const { language: locale } = i18n;

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang);
  };

  const renderCurrentLocale = (locale) => {
    switch (locale) {
      case "en":
        return {
          alias: "PT",
          name: "Português Brasil",
        };
      case "pt":
        return {
          alias: "EN",
          name: "English",
        };
      default:
        return {
          alias: "PT",
          name: "Português Brasil",
        };
    }
  };

  return (
    <header className={styles.header}>
      <Container>
        <Grid alignHorizontal={true}>
          <div className={styles.brand}>
            <Link href="/">
              <a>
                <BrandSymbol />
              </a>
            </Link>
          </div>
          <HeaderNav />
          <div className={styles.navTrigger}>
            <NavMenuLinesIcon />
          </div>
          <div
            className={styles.navLanguage}
            onClick={() => changeLanguageHandler(locale === "en" ? "pt" : "en")}
            title={t("change_language", {
              locale: renderCurrentLocale(locale).name,
            })}
          >
            <Icon icon="language" size={32} />
            <span className={styles.navLanguageLabel}>
              {renderCurrentLocale(locale).alias}
            </span>
          </div>
        </Grid>
      </Container>
    </header>
  );
}

export default Header;
