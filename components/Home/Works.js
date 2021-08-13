import { useRef } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Site Components
import Section from "@components/Section";
import Container from "@components/Container";
import Grid from "@components/Grid";
import Heading from "@components/Heading";
import WorkItem from "@components/Home/WorkItem";
import Icon from "@components/Icon";

// Styles
import styles from "@styles/home/works.module.scss";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Works({ works }) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Section customClass={styles.worksSection}>
      <Container>
        <Grid>
          <div className={styles.heading}>
            <Heading type="h3">
              Places I <span className={styles.title_highlight}>worked</span>
            </Heading>
            <div className={styles.swiperNavigation}>
              <div
                ref={navigationPrevRef}
                className={styles.swiperNavigationControl}
              >
                <Icon icon="arrowLeft" size="32" />
              </div>
              <div
                ref={navigationNextRef}
                className={styles.swiperNavigationControl}
              >
                <Icon icon="arrowRight" size="32" />
              </div>
            </div>
          </div>
        </Grid>
      </Container>
      <div style={{ position: "relative" }}>
        <div className={styles.swiperMask}></div>
        <Container>
          <Grid>
            <Swiper
              className={styles.swiper}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
                disabledClass: styles.swiperNavigationDisabled,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.update();
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  scrollbar: { draggable: true },
                },
                748: {
                  slidesPerView: 2,
                },
                1360: {
                  slidesPerView: 3,
                },
              }}
            >
              {works.map((work, index) => (
                <SwiperSlide key={index} className={styles.swipperSlide}>
                  <WorkItem work={work} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Container>
      </div>
    </Section>
  );
}
