import { useGetMovieByIdQuery } from "@/api";
import Carousel from "@/components/common/Carousel/ui";
import { MovieCard } from "@/components/common/MovieCard";
import { useRouter } from "next/router";
import { SwiperSlide } from "swiper/react";
import MovieReviews from "../MovieReviews";
import MovieTabContent from "../MovieTabContent";
import styles from "./styles.module.sass";

const MovieContent = () => {
  const {
    query: { id },
  } = useRouter();
  const { data: movieData } = useGetMovieByIdQuery(id);

  return (
    <div className={styles.movieContent}>
      <MovieTabContent />
      <Carousel
        quantity={movieData?.similarMovies?.length}
        title="Похожее"
        errorText="Похожее не найдено"
        slidesPerView={7}
        viewQuantity
      >
        {movieData?.similarMovies.map((movie: any) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Carousel>
      <MovieReviews />
    </div>
  );
};

export default MovieContent;
