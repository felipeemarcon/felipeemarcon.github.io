// Site Components
import Section from "../Section";
import Container from "../Container";
import Grid from "../Grid";
import Heading from "../Heading";
import GridColumn from "../GridColumn";

// Styles
import styles from "../../styles/home/aboutMe.module.scss";

export default function AboutMe() {
  return (
    <Section customClass={styles.aboutMeSection}>
      <Container>
        <Grid>
          <GridColumn columns={12}>
            <div className={styles.wrapper}>
              <div className={styles.heading}>
                <Heading type="h2">
                  A little more <span>about me</span>
                </Heading>
              </div>
              <div className={styles.main}></div>
            </div>
          </GridColumn>
        </Grid>
      </Container>
    </Section>
  );
}
