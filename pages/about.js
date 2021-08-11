import Head from "next/head";

// Sites Components
import Header from "../components/Header";

// Sections
import HomeHero from "../components/Home/HomeHero";
import HomeProjects from "../components/Home/HomeProjects";
import AboutMe from "../components/Home/AboutMe";
import Works from "../components/Home/Works";
import Footer from "../components/Footer";

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
        <AboutMe />
        <Works />
        <Footer />
      </div>
    </>
  );
}
