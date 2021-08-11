// Site Components
import Section from "../Section";
import Container from "../Container";
import Grid from "../Grid";
import Heading from "../Heading";
import WorkItem from "./WorkItem";

// Content Mock
import worksDataMock from "../../utils/works_data_mock.json";

// Styles
import styles from "../../styles/home/works.module.scss";

export default function Works() {
  const works = worksDataMock;

  return (
    <Section customClass={styles.worksSection}>
      <Container>
        <Grid>
          <div className={styles.heading}>
            <Heading type="h3">
              Places I <span className={styles.title_highlight}>worked</span>
            </Heading>
          </div>
          <div className={styles.items}>
            {works.map((work, index) => (
              <WorkItem key={index} data={work} />
            ))}
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
