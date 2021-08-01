// Site Components
import Section from "../../components/Section";
import Container from "../../components/Container";
import Grid from "../../components/Grid";
import ProjectItem from "../../components/Home/ProjectItem";

import projectsMock from "../../utils/projects_mock.json";

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
        </Grid>
      </Container>
    </Section>
  );
}
