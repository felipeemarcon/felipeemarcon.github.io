// Site Components
import Section from "@components/Section";
import Container from "@components/Container";
import Grid from "@components/Grid";
import ProjectItem from "@components/Home/ProjectItem";
import LinkUnderscore from "@components/LinkUnderscore";

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
              Things I&apos;ve{" "}
              <span className={styles.title_highlight}>done</span>
            </Heading>
          </div>
          <div className={styles.list}>
            {data.map((frontmatter, index) => (
              <ProjectItem data={frontmatter} key={index} />
            ))}
          </div>
          <div className={styles.moreProjects}>
            <span>
              You can see more projects in my{" "}
              <LinkUnderscore
                label="Behance"
                link="https://www.behance.net/felipeemarcon"
              />{" "}
              or{" "}
              <LinkUnderscore
                label="Dribbble"
                link="https://dribbble.com/felipee_marcon"
              />
              .
            </span>
          </div>
        </Grid>
      </Container>
    </Section>
  );
};

export default HomeProjects;
