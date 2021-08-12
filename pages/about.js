import fs from "fs";
import matter from "gray-matter";

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

export default function About({ projects, socialLinks, ...props }) {
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
        <HomeProjects data={projects} />
        <AboutMe />
        <Works />
        <Footer socialLinks={socialLinks} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const filesProjects = fs.readdirSync(`${process.cwd()}/content/projects`);
  const filesSocialLinks = fs.readdirSync(
    `${process.cwd()}/content/global/socialLinks`
  );

  const projects = filesProjects.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`${process.cwd()}/content/projects/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    const frontmatter = {
      ...data,
    };

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  const socialLinks = filesSocialLinks.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`${process.cwd()}/content/global/socialLinks/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    const frontmatter = {
      ...data,
    };

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  return {
    props: {
      projects,
      socialLinks,
    },
  };
}
