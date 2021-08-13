// Next Components
import Link from "next/link";
import { useRouter } from "next/router";

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

// Translate
// import { ptBR, enUS } from "@locale/locale";

export default function Header() {
  const router = useRouter();
  const { locale } = router;

  // const translate = locale == "pt-BR" ? ptBR : enUS;

  const handleToggleLanguage = () => {
    switch (locale) {
      case "pt-BR":
        router.push("/", "/", { locale: "en-US" });
        break;
      case "en-US":
        router.push("/", "/", { locale: "pt-BR" });
        break;
    }
  };

  const renderCurrentLocale = (locale) => {
    switch (locale) {
      case "pt-BR":
        return "PT";
      case "en-US":
        return "EN";
      default:
        return "PT";
        break;
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
          <div className={styles.navLanguage} onClick={handleToggleLanguage}>
            <Icon icon="language" size={32} />
            <span className={styles.navLanguageLabel}>
              {renderCurrentLocale(locale)}
            </span>
          </div>
        </Grid>
      </Container>
    </header>
  );
}
