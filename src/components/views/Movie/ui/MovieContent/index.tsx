import { useRouter } from "next/router";

import { useGetMovieByIdQuery } from "@/shared/api";

import styles from "./styles.module.sass";

import MovieReviews from "../MovieReviews";
import MovieTabContent from "../MovieTabContent";
import Persons from "../Persons";
import SimilarMovies from "../SimilarMovies";

const MovieContent = () => {
  const {
    query: { id },
  } = useRouter();

  const { data: movieData, isLoading } = useGetMovieByIdQuery(id);

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
