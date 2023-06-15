import { useGetMovieByIdQuery } from "@/api";
import { useRouter } from "next/router";
import MovieReviews from "../MovieReviews";
import MovieTabContent from "../MovieTabContent";
import styles from "./styles.module.sass";
import Persons from "../Persons";
import SimilarMovies from "../SimilarMovies";

const MovieContent = () => {
  const {
    query: { id },
  } = useRouter();

  const { data: movieData, isLoading, isFetching } = useGetMovieByIdQuery(id);

  return (
    <div className={styles.movieContent}>
      <MovieTabContent />
      <SimilarMovies movieData={movieData} isLoading={isLoading} />
      <Persons movieData={movieData} isLoading={isLoading} />
      <MovieReviews />
    </div>
  );
};

export default MovieContent;
