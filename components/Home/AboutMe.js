// Site Components
import Section from "../Section";
import Container from "../Container";
import Grid from "../Grid";

// Styles
import styles from "../../styles/home/aboutMe.module.scss";

export default function AboutMe() {
  return (
    <Section customClass={styles.aboutMeSection}>
      <Container>
        <Grid>
          <div className={styles.container}>
            <div className={styles.heading}>
              <h2>A Little more about me</h2>
            </div>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
