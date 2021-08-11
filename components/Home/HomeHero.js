// Sites Components
import Section from "../../components/Section";
import Container from "../../components/Container";
import Grid from "../../components/Grid";
import LinkUnderscore from "../../components/LinkUnderscore";
import Button from "../../components/Button";
import Text from "../../components/Text";
import Heading from "../../components/Heading";

import heroStyles from "../../styles/home/hero.module.scss";

export default function HomeHero() {
  return (
    <Section>
      <Container>
        <div className={heroStyles.hero}>
          <Grid>
            <div className={heroStyles.left}>
              <div className={heroStyles.heading}>
                <div className={heroStyles.greeting}>Hello, there 👋</div>
                <Heading type="h1" customClass={heroStyles.title}>
                  I’m{" "}
                  <span className={heroStyles.title_highlight}>
                    Felipe Marcon
                  </span>{" "}
                  and I design delightful experiences.
                </Heading>
              </div>
              <div className={heroStyles.content}>
                <div className={heroStyles.description}>
                  <p>
                    I am a Product Designer and I love to develop experiences
                    and help people and companies through good design. In my
                    spare time I play music with some friends.
                  </p>
                </div>
                <div className={heroStyles.contact}>
                  <Text tag="span" customClass={heroStyles.contact_label}>
                    How can I help you?
                  </Text>
                  <LinkUnderscore
                    label="oi@felipemarcon.com.br"
                    link="mailto:oi@felipemarcon.com.br"
                    size="md"
                  />
                </div>
                <div className={heroStyles.action}>
                  <Button label="Check my work" />
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </Container>
    </Section>
  );
}
