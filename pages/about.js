import Head from "next/head";

// Sites Components
import Header from "../components/header";

// Sections
import HomeHero from "../components/Home/HomeHero";
import HomeProjects from "../components/Home/HomeProjects";

// Styles
import styles from "../styles/home/general.module.scss";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Felipe Marcon</title>
        <meta
          name="description"
          content="I am a Product Designer with front-end skills based in Brazil"
        />
      </Head>

      <Header />
      <HomeHero />
      <div className={styles.darkArea}>
        <HomeProjects />
      </div>
    </>
  );
}
