import { Swiper } from "swiper/react";
import "swiper/css";
import { SwiperSlide } from "swiper/react";
import styles from "./styles.module.sass";
import { Autoplay } from "swiper";

import TrailersItem from "../BannersItem";

const movieIds = [
  { title: "1917", id: "1171976" },
  { title: "Зеленая миля", id: "435" },
  { title: "Форест Гамп", id: "448" },
  { title: "Остров проклятых", id: "397667" },
  { title: "Кот в сапогах 2: Последнее желание", id: "840821" },
];

const Banners = () => {
  return (
    <section className={styles.sectionTrailers}>
      <div className={styles.trailers}>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          speed={1200}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="trailersSwiper"
        >
          {movieIds.map((movie) => (
            <SwiperSlide key={movie.id}>
              <TrailersItem id={movie.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banners;
