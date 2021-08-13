// Site Components
import Section from "@components/Section";
import Container from "@components/Container";
import Grid from "@components/Grid";
import Heading from "@components/Heading";
import LinkUnderscore from "@components/LinkUnderscore";
import Text from "@components/Text";
import SocialLinks from "@components/SocialLinks";

// Styles
import styles from "@styles/components/Footer.module.scss";

// Images
import BadgeImage from "@images/badge_projects.svg";
import BrandSymbol from "@images/brand_symbol.svg";

// Content
import { attributes as globalAttributes } from "@content/contact/configs.md";

export default function Footer({ socialLinks }) {
  const { contact_email } = globalAttributes;

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
                    label={contact_email}
                    link={`mailto:${contact_email}`}
                    color="yellow"
                  />
                </Text>
              </div>
              <div className={styles.social}>
                <SocialLinks links={socialLinks} />
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
              <div className={styles.creditsLeft}>
                <div className={styles.brand}>
                  <BrandSymbol />
                </div>
              </div>
              <div className={styles.creditsRight}>
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
