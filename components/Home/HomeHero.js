// Sites Components
import Section from "../../components/Section";
import Container from "../../components/Container";
import Grid from "../../components/Grid";
import ButtonLink from "../../components/ButtonLink";
import Button from "../../components/Button";

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
                <h2>
                  I’m <span>Felipe Marcon</span> and I design delightful
                  experiences.
                </h2>
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
                  <span>How can I help you?</span>
                  <ButtonLink
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
