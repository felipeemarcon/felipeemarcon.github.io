// Next Components
import Image from "next/image";

// Site Components
import Section from "@components/Section";
import Container from "@components/Container";
import Grid from "@components/Grid";
import Heading from "@components/Heading";
import GridColumn from "@components/GridColumn";
import LinkUnderscore from "@components/LinkUnderscore";

// Styles
import styles from "@styles/home/aboutMe.module.scss";

// Images
import AboutMeImage from "@images/profile_image_about_me.jpg";

export default function AboutMe() {
  const shimmer = (w, h) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return (
    <Section customClass={styles.aboutMeSection}>
      <Container>
        <Grid>
          <GridColumn columns={12}>
            <div className={styles.wrapper}>
              <div className={styles.heading}>
                <Heading type="h2">
                  A little more{" "}
                  <span className={styles.title_highlight}>about me</span>
                </Heading>
              </div>
            </div>
          </GridColumn>
        </Grid>

        <div className={styles.main}>
          <Grid>
            <div className={styles.leftCol}>
              <div className={styles.photo}>
                <div className={styles.image}>
                  <Image
                    src={AboutMeImage}
                    alt="This is me in the image"
                    quality={100}
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(700, 475)
                    )}`}
                  />
                </div>
                <div className={styles.photoLabel}>
                  <Heading type="h6">
                    Designer, Musician and pizza lover
                  </Heading>
                  <span className={styles.photoText}>
                    Fun fact: it’s says “Pizza or die” on my shirt in this photo
                    and I was at Dominos when this photo was taken. I really
                    like pizza. 🍕
                  </span>
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
