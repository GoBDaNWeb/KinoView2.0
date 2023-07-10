import { FC } from "react";

import { IPersonFilmsProps } from "../../types/personFilms.interface";

import { Carousel } from "@/components/common/Carousel";
import { MovieCard } from "@/components/common/MovieCard";
import { Skeleton } from "@/components/ui/Skeleton";
import { SwiperSlide } from "swiper/react";

const PersonFilms: FC<IPersonFilmsProps> = ({ movieData, isLoading }) => {
  return (
    <Carousel
      quantity={movieData?.docs.length}
      title="Фильмы и сериалы"
      errorText="Фильмов не найдено"
      slidesPerView={7}
      viewQuantity
      contentIsLoading={isLoading}
    >
      {isLoading ? (
        [...Array(10)].map((_, index) => (
          <SwiperSlide key={index}>
            <Skeleton
              customStyles={{
                height: "auto",
                paddingBottom: "140%",
                width: "100%",
              }}
            />
          </SwiperSlide>
        ))
      ) : (
        <>
          {movieData?.docs.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </>
      )}
    </Carousel>
  );
};

export default PersonFilms;
