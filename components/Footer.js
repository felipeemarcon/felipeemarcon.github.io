// Site Components
import Section from "./Section";
import Container from "./Container";
import Grid from "./Grid";
import Heading from "./Heading";
import ButtonLink from "./ButtonLink";
import Text from "./Text";

// Styles
import styles from "../styles/components/Footer.module.scss";

// Images
import BadgeImage from "../public/images/badge_projects.svg";

export default function Footer() {
  return (
    <Section>
      <Container>
        <Grid customClass={styles.grid}>
          <div className={styles.left}>
            <div className={styles.heading}>
              <div className={styles.title}>
                <Heading>
                  Let’s work <span>together?</span>
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
                <ButtonLink label="oi@felipemarcon.com.br" color="yellow" />
              </Text>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.badge}>
              <BadgeImage />
            </div>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
