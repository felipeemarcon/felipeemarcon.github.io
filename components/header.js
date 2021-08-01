// Next Components
import Image from "next/image";
import Link from "next/link";

// Components
import Container from "../components/container";
import Grid from "../components/Grid";
import HeaderNav from "../components/headerNav";

import styles from "../styles/components/Header.module.scss";

import BrandSymbol from "../public/images/brand_symbol.svg";
import NavMenuLines from "../public/images/navmenu_lines.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Grid>
          <div className={styles.brand}>
            <Link href="/">
              <a>
                <Image src={BrandSymbol} alt="Felipe Marcon Brand Symbol" />
              </a>
            </Link>
          </div>

          <HeaderNav />

          <div className={styles.navTrigger}>
            <Image src={NavMenuLines} alt="Click to open the site's menu" />
          </div>
        </Grid>
      </Container>
    </header>
  );
}
