import Head from "next/head";

// Sites Components
import Header from "../components/header";

// Sections
import HomeHero from "../components/Home/HomeHero";
import HomeProjects from "../components/Home/HomeProjects";

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
      <HomeProjects />
    </>
  );
}
