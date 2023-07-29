import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { FC, PropsWithChildren, useRef, useEffect, useState } from "react";
import { ICarouselProps } from "../types/carousel.interface";
import { Autoplay, Navigation } from "swiper";

import styles from "./styles.module.sass";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const breakpoints = {
  0: {
    slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 15,
  },
  500: {
    slidesPerGroup: 2,
    slidesPerView: 2,
    spaceBetween: 15,
  },
  770: {
    slidesPerGroup: 3,
    slidesPerView: 3,
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
  const [navigation, setNavigation] = useState({});
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  // const navigation = {
  //   prevEl: navigationPrevRef.current,
  //   nextEl: navigationNextRef.current,
  // };

  useEffect(() => {
    setNavigation({
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    });
  }, []);

  return (
    <div className={styles.movieSlider}>
      <div className={styles.movieSliderTop}>
        <h3 className={styles.movieSliderTitle}>
          {title} {viewQuantity && quantity ? `(${quantity})` : null}
        </h3>
        {quantity && quantity > 4 ? (
          <div className={styles.movieSliderNav}>
            <button dir="prev" ref={navigationPrevRef}>
              <IoIosArrowBack />
            </button>
            <button dir="next" ref={navigationNextRef}>
              <IoIosArrowForward />
            </button>
          </div>
        ) : null}
      </div>
      <Swiper
        navigation={navigation}
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
        modules={[Autoplay, Navigation]}
        className={styles.swiper}
      >
        {(quantity && quantity > 0) || contentIsLoading ? children : errorText}
      </Swiper>
    </div>
  );
};

export default Carousel;
