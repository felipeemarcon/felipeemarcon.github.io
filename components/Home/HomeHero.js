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
import heroStyles from "@styles/home/hero.module.scss";

export default function HomeHero() {
  const { t } = useTranslation("translation", { useSuspense: false });
  const { contact_email } = globalAttributes;

  return (
    <Section>
      <Container>
        <div className={heroStyles.hero}>
          <Grid>
            <div className={heroStyles.left}>
              <div className={heroStyles.heading}>
                <div className={heroStyles.greeting}>{t("Hello there")}</div>
                <Heading type="h1" customClass={heroStyles.title}>
                  <Trans
                    i18nKey="Im Felipe"
                    defaults="I'm <highlight>Felipe Marcon</highlight> and I design delightful experiences."
                    components={{
                      highlight: (
                        <span className={heroStyles.title_highlight} />
                      ),
                    }}
                  />
                </Heading>
              </div>
              <div className={heroStyles.content}>
                <div className={heroStyles.description}>
                  <Text>{t("Hero Description")}</Text>
                </div>
                <div className={heroStyles.contact}>
                  <Text
                    tag="span"
                    weight={600}
                    customClass={heroStyles.contact_label}
                  >
                    {t("How can I help you?")}
                  </Text>
                  <LinkUnderscore
                    label={contact_email}
                    link={`mailto:${contact_email}`}
                    size="md"
                  />
                </div>
                <div className={heroStyles.action}>
                  <Button label={t("Check my work")} />
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </Container>
    </Section>
  );
}
