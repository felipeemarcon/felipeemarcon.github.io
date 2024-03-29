import { toBase64, shimmer } from "@utils/index";

// Next Components
import Image from "next/image";

// Site Components
import Section from "@components/Section";
import Container from "@components/Container";
import Grid from "@components/Grid";
import Heading from "@components/Heading";
import LinkUnderscore from "@components/LinkUnderscore";

// i18n
import { Trans, useTranslation } from "react-i18next";

// Styles
import styles from "@styles/home/aboutMe.module.scss";

// Images
import AboutMeImage from "@images/profile_image_about_me.jpg";

export default function AboutMe() {
  const { t } = useTranslation("translation", { useSuspense: false });

  return (
    <Section id="aboutMe" customClass={styles.aboutMeSection}>
      <Container>
        <Grid>
          <div className={styles.heading}>
            <Heading type="h2">
              <Trans
                i18nKey="A little more about me"
                defaults="A little more <highlight>about me</highlight>"
                components={{
                  highlight: <span className={styles.title_highlight} />,
                }}
              />
            </Heading>
          </div>
        </Grid>

        <div className={styles.main}>
          <Grid customClass={styles.grid}>
            <div className={styles.leftCol}>
              <div className={styles.photo}>
                <div className={styles.image}>
                  <Image
                    src={AboutMeImage}
                    alt={t("This is me")}
                    quality={100}
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(700, 475)
                    )}`}
                  />
                </div>
                <div className={styles.photoLabel}>
                  <Heading type="h6">{t("Designer and Musician")}</Heading>
                  <span className={styles.photoText}>{t("Fun fact")}</span>
                </div>
              </div>
            </div>
            <div className={styles.rightCol}>
              <div className={styles.description}>
                <p>
                  My name is Felipe Marcon and Im a Product Designer with
                  front-end skills based in Brazil. I’m a fan of music,
                  technology, colors, shapes and experiences.
                </p>
                <p>
                  Currently, I work as Product Designer at Gamers Club with the
                  Product and Engineering teams to develop new solutions for our
                  users and make their experiencie better. Gamers Club is the
                  biggest Counter-Strike club of Latin America and growth to
                  became the world biggest Game Platform.
                </p>
                <p>
                  In my spare time I play guitar. I’m a member of a Hardcore
                  band as guitar player,{" "}
                  <LinkUnderscore
                    label="check it out"
                    link="https://open.spotify.com/artist/47x8Hj9iDylNShwbrRhJmh?si=O5fIW9E-Qru8kWclO_G_GQ&dl_branch=1"
                    color="red"
                    newTab={true}
                  />
                  . Music makes me a better person and is where I can make any
                  crazy idea just because I love it.
                </p>
              </div>
            </div>
          </Grid>
        </div>
      </Container>
    </Section>
  );
}
