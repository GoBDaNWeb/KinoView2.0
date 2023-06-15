import { FC } from "react";
import { ISimilarMoviesProps } from "../../types/similarMovies.interface";

import { Carousel } from "@/components/common/Carousel";
import { MovieCard } from "@/components/common/MovieCard";
import { Skeleton } from "@/components/ui/Skeleton";
import { SwiperSlide } from "swiper/react";

const SimilarMovies: FC<ISimilarMoviesProps> = ({ movieData, isLoading }) => {
  return (
    <Carousel
      quantity={movieData?.similarMovies?.length}
      title="Похожее"
      errorText="Похожее не найдено"
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
          {movieData?.similarMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </>
      )}
    </Carousel>
  );
};

export default SimilarMovies;
