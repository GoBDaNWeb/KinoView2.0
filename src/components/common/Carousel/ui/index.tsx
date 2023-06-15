import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { FC, PropsWithChildren } from "react";
import { ICarouselProps } from "../types/carousel.interface";
import { Autoplay } from "swiper";

import styles from "./styles.module.sass";

const breakpoints = {
  500: {
    slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 15,
  },
  770: {
    slidesPerGroup: 2,
    slidesPerView: 2,
    spaceBetween: 30,
  },
  1025: {
    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1200: {
    slidesPerGroup: 4,
    slidesPerView: 4,
    spaceBetween: 30,
  },
  1500: {
    slidesPerGroup: 5,
    slidesPerView: 5,
    spaceBetween: 30,
  },
};

const Carousel: FC<PropsWithChildren<ICarouselProps>> = ({
  children,
  quantity,
  title,
  slidesPerView = 5,
  isAutoPlay = false,
  errorText,
  viewQuantity,
  contentIsLoading,
}) => {
  return (
    <div className={styles.movieSlider}>
      <h3 className={styles.movieSliderTitle}>
        {title} {viewQuantity && quantity ? `(${quantity})` : null}
      </h3>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={breakpoints}
        autoplay={
          isAutoPlay
            ? {
                delay: 2500,
                disableOnInteraction: false,
              }
            : false
        }
        modules={[Autoplay]}
        className={styles.swiper}
      >
        {(quantity && quantity > 0) || contentIsLoading ? children : errorText}
      </Swiper>
    </div>
  );
};

export default Carousel;
