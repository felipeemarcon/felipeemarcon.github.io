// Next Components
import Link from "next/link";

// Components
import Container from "./Container";
import Grid from "./Grid";
import HeaderNav from "./HeaderNav";

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
