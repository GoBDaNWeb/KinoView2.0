import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { FC, PropsWithChildren } from "react";
import { ICarouselProps } from "../types/carousel.interface";
import { Autoplay } from "swiper";

import styles from "./styles.module.sass";

const Carousel: FC<PropsWithChildren<ICarouselProps>> = ({
  children,
  quantity,
  title,
  slidesPerView = 5,
  isAutoPlay = false,
  errorText,
  viewQuantity,
}) => {
  return (
    <div className={styles.movieSlider}>
      <h3 className={styles.movieSliderTitle}>
        {title} {viewQuantity ? `(${quantity})` : null}
      </h3>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={
          isAutoPlay
            ? {
                delay: 2500,
                disableOnInteraction: false,
              }
            : false
        }
        modules={[Autoplay]}
        className="mySwiper"
      >
        {quantity > 0 ? children : errorText}
      </Swiper>
    </div>
  );
};

export default Carousel;
