import Link from "next/link";

// Site Components
import Section from "./Section";
import Container from "./Container";
import Grid from "./Grid";
import Heading from "./Heading";
import LinkUnderscore from "./LinkUnderscore";
import Text from "./Text";

// Styles
import styles from "../styles/components/Footer.module.scss";

// Images
import BadgeImage from "../public/images/badge_projects.svg";
import IconBehance from "../public/images/icons/Behance.svg";
import IconDribbble from "../public/images/icons/Dribbble.svg";
import IconLinkedin from "../public/images/icons/Linkedin.svg";
import BrandSymbol from "../public/images/brand_symbol.svg";

export default function Footer() {
  const socialLinks = [
    {
      link: "https://www.behance.net/felipeemarcon",
      label: "Behance",
      icon: <IconBehance />,
    },
    {
      link: "https://dribbble.com/felipee_marcon",
      label: "Dribbble",
      icon: <IconDribbble />,
    },
    {
      link: "https://www.linkedin.com/in/felipeemarcon/",
      label: "Linkedin",
      icon: <IconLinkedin />,
    },
  ];

  return (
    <footer>
      <Section customClass={styles.section}>
        <Container>
          <Grid customClass={styles.grid}>
            <div className={styles.left}>
              <div className={styles.heading}>
                <div className={styles.title}>
                  <Heading>
                    Let’s work{" "}
                    <span className={styles.title_highlight}>together?</span>
                  </Heading>
                </div>
                <div className={styles.subtitle}>
                  <Text theme="onDark" tag="span">
                    I’m free to do some freelance projects.
                  </Text>
                  <Text theme="onDark" tag="span">
                    We can talk about your ideas.
                  </Text>
                </div>
              </div>
              <div className={styles.contact}>
                <Text theme="onDark" tag="span">
                  Get in touch:{" "}
                  <LinkUnderscore
                    label="oi@felipemarcon.com.br"
                    link="mailto:oi@felipemarcon.com.br"
                    color="yellow"
                  />
                </Text>
              </div>
              <div className={styles.social}>
                <ul className={styles.socialList}>
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.link}>
                        <a
                          target="_blank"
                          rel="external noreferrer"
                          className={styles.socialItem}
                          title={link.label}
                        >
                          {link.icon}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.badge}>
                <BadgeImage />
              </div>
            </div>
          </Grid>
        </Container>
        <Container>
          <div className={styles.credits}>
            <Grid customClass={styles.grid}>
              <div className={styles.left}>
                <div className={styles.brand}>
                  <BrandSymbol />
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.madeWith}>
                  <Text tag="span" theme="onDark" size="sm">
                    Made with 💛️ in Brazil
                  </Text>
                </div>
              </div>
            </Grid>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
