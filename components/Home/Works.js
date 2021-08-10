// Site Components
import Section from "../Section";
import Container from "../Container";
import Grid from "../Grid";
import Heading from "../Heading";
import WorkItem from "./WorkItem";

// Styles
import styles from "../../styles/home/works.module.scss";

export default function Works() {
  return (
    <Section customClass={styles.worksSection}>
      <Container>
        <Grid>
          <div className={styles.heading}>
            <Heading type="h3">
              Places I <span>worked</span>
            </Heading>
          </div>
          <div className={styles.items}>
            <WorkItem />
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
