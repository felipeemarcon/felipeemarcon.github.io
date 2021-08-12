import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Site Components
import Section from "@components/Section";
import Container from "@components/Container";
import Grid from "@components/Grid";
import Heading from "@components/Heading";
import WorkItem from "@components/Home/WorkItem";

// Styles
import styles from "@styles/home/works.module.scss";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
            <Swiper
              className={styles.swiper}
              slidesPerView={3}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {works.map((work, index) => (
                <SwiperSlide key={index} className={styles.swipperSlide}>
                  <WorkItem work={work} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-container">
              <div className="swiper-wrapper"></div>
            </div>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
