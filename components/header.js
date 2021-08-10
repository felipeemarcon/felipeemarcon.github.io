// Next Components
import Image from "next/image";
import Link from "next/link";

// Components
import Container from "../components/Container";
import Grid from "../components/Grid";
import HeaderNav from "../components/HeaderNav";

import styles from "../styles/components/Header.module.scss";

import BrandSymbol from "../public/images/brand_symbol.svg";
import NavMenuLines from "../public/images/navmenu_lines.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Grid alignHorizontal={true}>
          <div className={styles.brand}>
            <Link href="/">
              <a>
                {/* <Image src={BrandSymbol} alt="Felipe Marcon Brand Symbol" /> */}
                <BrandSymbol />
              </a>
            </Link>
          </div>
          <HeaderNav />

          <div className={styles.navTrigger}>
            {/* <Image src={NavMenuLines} alt="Click to open the site's menu" /> */}
            <NavMenuLines />
          </div>
        </Grid>
      </Container>
    </header>
  );
}
