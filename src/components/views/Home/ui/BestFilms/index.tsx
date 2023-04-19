import { FC } from "react";

import Carousel from "@/components/common/Carousel/ui";
import { MovieCard } from "@/components/common/MovieCard";
import { SwiperSlide } from "swiper/react";
import { useGetBestFilmsQuery } from "@/api";
const BestFilms = () => {
  const { data: bestFilms } = useGetBestFilmsQuery(20);

  return (
    <Carousel
      title="Лучшие фильмы за всё время"
      quantity={bestFilms?.docs?.length}
      isAutoPlay
      errorText="Лучших фильмов не найдено"
    >
      {bestFilms?.docs?.map((movie: any) => (
        <SwiperSlide key={movie.id}>
          <MovieCard movie={movie} />
        </SwiperSlide>
      ))}
    </Carousel>
  );
};

export default BestFilms;
