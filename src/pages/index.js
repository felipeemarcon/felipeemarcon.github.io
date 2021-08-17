import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import "@src/i18n";

// Sites Components
import SEO from "@components/Seo";
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
  return (
    <>
      <SEO
        title="Home"
        description="I am a Product Designer with front-end skills based in Brazil"
      />

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
  const projectFiles = fs.readdirSync(`${process.cwd()}/src/content/projects`);
  const socialLinksFiles = fs.readdirSync(
    `${process.cwd()}/src/content/global/socialLinks`
  );
  const workFiles = fs.readdirSync(`${process.cwd()}/src/content/works/`);

  const projects = projectFiles.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`${process.cwd()}/src/content/projects/${filename}`)
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
      .readFileSync(
        `${process.cwd()}/src/content/global/socialLinks/${filename}`
      )
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
      .readFileSync(`${process.cwd()}/src/content/works/${filename}`)
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
