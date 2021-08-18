import { useTranslation } from "react-i18next";

// Next Components
import Link from "next/link";

// Site Components
import Container from "@components/Container";
import Grid from "@components/Grid";
import HeaderNav from "@components/HeaderNav";
import ToggleLanguage from "@components/ToggleLanguage";
import DividerLine from "@components/DividerLine";
import SocialLinks from "@components/SocialLinks";

// Styles
import styles from "@styles/components/Header.module.scss";

// Images
import BrandSymbol from "@images/brand_symbol.svg";
import NavMenuLinesIcon from "@images/navmenu_lines.svg";
import { Fragment } from "react";

function Header({ socialLinks }) {
  const { t } = useTranslation("translation", { useSuspense: false });

  return (
    <header className={styles.header}>
      <Container>
        <Grid alignHorizontal={true}>
          <div className={styles.brand}>
            <Link href="/">
              <a title={t("Go to home")}>
                <div className={styles.brandSymbol}>
                  <BrandSymbol />
                </div>
                <div className={styles.brandLabel}>
                  Felipe{" "}
                  <span className={styles.brandLabelHighlight}>Marcon</span>
                </div>
              </a>
            </Link>
          </div>

          <div className={styles.right}>
            <HeaderNav />

            <div className={styles.navTrigger}>
              <NavMenuLinesIcon />
            </div>

            <DividerLine orientation="vertical" spaces="0 24px" />

            <ToggleLanguage />

            <DividerLine orientation="vertical" spaces="0 24px" />

            <SocialLinks links={socialLinks} type="header" />
          </div>
        </Grid>
      </Container>
    </header>
  );
}

export default Header;
