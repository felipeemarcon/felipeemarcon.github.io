// Site Components
import Section from "@components/Section";
import Container from "@components/Container";
import Grid from "@components/Grid";
import Heading from "@components/Heading";
import WorkItem from "@components/Home/WorkItem";

// Styles
import styles from "@styles/home/works.module.scss";

export default function Works({ works }) {
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
              <WorkItem key={index} work={work} />
            ))}
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
