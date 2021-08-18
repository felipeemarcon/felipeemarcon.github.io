// Sites Components
import Section from "@components/Section";
import Container from "@components/Container";
import Grid from "@components/Grid";
import LinkUnderscore from "@components/LinkUnderscore";
import Button from "@components/Button";
import Text from "@components/Text";
import Heading from "@components/Heading";

// Content
import { attributes as globalAttributes } from "@content/contact/configs.md";

// i18n
import { Trans, useTranslation } from "react-i18next";

// Styles
import styles from "@styles/home/hero.module.scss";

export default function HomeHero() {
  const { t } = useTranslation("translation", { useSuspense: false });
  const { contact_email } = globalAttributes;

  return (
    <Section customClass={styles.section}>
      <Container>
        <div className={styles.hero}>
          <Grid>
            <div className={styles.left}>
              <div className={styles.heading}>
                <div className={styles.greeting}>{t("Hello there")}</div>
                <Heading type="h1" customClass={styles.title}>
                  <Trans
                    i18nKey="Im Felipe"
                    defaults="I'm <highlight>Felipe Marcon</highlight> and I design delightful experiences."
                    components={{
                      highlight: <span className={styles.title_highlight} />,
                    }}
                  />
                </Heading>
              </div>
              <div className={styles.content}>
                <div className={styles.description}>
                  <Text>{t("Hero Description")}</Text>
                </div>
                <div className={styles.contact}>
                  <Text
                    tag="span"
                    weight={600}
                    customClass={styles.contact_label}
                  >
                    {t("How can I help you?")}
                  </Text>
                  <LinkUnderscore
                    label={contact_email}
                    link={`mailto:${contact_email}`}
                    size="md"
                  />
                </div>
                <div className={styles.action}>
                  <Button
                    label={t("Check my work")}
                    link="#myProjects"
                    icon="arrowDown"
                    hasArrow={true}
                  />
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </Container>
    </Section>
  );
}
