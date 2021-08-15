import { useEffect } from "react";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import NextI18n from "../i18n";

// Sites Components
import Header from "@components/Header";

// Sections
import HomeHero from "@components/Home/HomeHero";
import HomeProjects from "@components/Home/HomeProjects";
import AboutMe from "@components/Home/AboutMe";
import Works from "@components/Home/Works";
import Footer from "@components/Footer";

// Styles
import styles from "@styles/home/general.module.scss";

export default function Home({ projects, socialLinks, works, ...props }) {
  useEffect(() => {
    NextI18n();
  });

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
        <Works works={works} />
        <Footer socialLinks={socialLinks} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const projectFiles = fs.readdirSync(`${process.cwd()}/content/projects`);
  const socialLinksFiles = fs.readdirSync(
    `${process.cwd()}/content/global/socialLinks`
  );
  const workFiles = fs.readdirSync(`${process.cwd()}/content/works/`);

  const projects = projectFiles.map((filename) => {
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

  const socialLinks = socialLinksFiles.map((filename) => {
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

  const works = workFiles.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`${process.cwd()}/content/works/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    return {
      data,
    };
  });

  return {
    props: {
      projects,
      socialLinks,
      works,
    },
  };
}
