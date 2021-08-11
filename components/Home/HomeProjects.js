// Site Components
import Section from "../../components/Section";
import Container from "../../components/Container";
import Grid from "../../components/Grid";
import ProjectItem from "../../components/Home/ProjectItem";
import LinkUnderscore from "../LinkUnderscore";

// Content Mock
import projectsMock from "../../utils/projects_mock.json";

// Styles
import styles from "../../styles/home/projects.module.scss";

export default function HomeProjects() {
  const projects = projectsMock;

  return (
    <Section customClass={styles.projectsSection}>
      <Container>
        <Grid>
          <div className={styles.list}>
            {projects.map((project, index) => (
              <ProjectItem data={project} key={index} />
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
}
