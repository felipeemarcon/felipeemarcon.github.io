import fs from "fs";
import matter from "gray-matter";
import { locale, useRouter } from "next/router";

import Head from "next/head";

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

// Translate
import { ptBR, enUS } from "../locale/locale";

export default function Home({ projects, socialLinks, works, ...props }) {
  const router = useRouter();
  const { locale } = router;

  const translate = locale == "pt-BR" ? ptBR : enUS;

  const handleToggle = () => {
    switch (locale) {
      case "pt-BR":
        router.push("/", "/", { locale: "en-US" });
        break;
      case "en-US":
        router.push("/", "/", { locale: "pt-BR" });
        break;
    }
  };

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

      {/* <div>
        <h2> {translate.greeting} </h2>
        <p onClick={handleToggle}>{locale}</p>
      </div> */}

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
