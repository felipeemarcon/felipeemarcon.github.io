// Site Components
import Section from "@components/Section";
import Container from "@components/Container";
import Grid from "@components/Grid";
import ProjectItem from "@components/Home/ProjectItem";
import LinkUnderscore from "@components/LinkUnderscore";

// i18n
import { Trans } from "react-i18next";

// Styles
import styles from "@styles/home/projects.module.scss";
import Heading from "@components/Heading";

const HomeProjects = ({ data }) => {
  return (
    <Section customClass={styles.projectsSection}>
      <Container>
        <Grid>
          <div className={styles.heading}>
            <Heading type="h2">
              <Trans
                i18nKey="Things I've done"
                defaults="Things I've <highlight>done</highlight>"
                components={{
                  highlight: <span className={styles.title_highlight} />,
                }}
              />
            </Heading>
          </div>
          <div className={styles.list}>
            {data.map((frontmatter, index) => (
              <ProjectItem data={frontmatter} key={index} />
            ))}
          </div>
          <div className={styles.moreProjects}>
            <span>
              <Trans
                i18nKey="More projects"
                defaults="You can see more projects in my <link_1/> or <link_2/>."
                values={{ link_1: "Behance", link_2: "Dribbble" }}
                components={{
                  link_1: (
                    <LinkUnderscore
                      label="Behance"
                      link="https://www.behance.net/felipeemarcon"
                    />
                  ),
                  link_2: (
                    <LinkUnderscore
                      label="Dribbble"
                      link="https://dribbble.com/felipee_marcon"
                    />
                  ),
                }}
              />
            </span>
          </div>
        </Grid>
      </Container>
    </Section>
  );
};

export default HomeProjects;
