import { useRouter } from "next/router";
import { useGetMovieByIdQuery } from "@/api";

import styles from "./styles.module.sass";

import MovieInfo from "../MovieInfo";
import MovieContent from "../MovieContent";

const Movie = () => {
  const {
    query: { id },
  } = useRouter();

  const { data: movie, isLoading } = useGetMovieByIdQuery(id);

  const backdropImg = movie?.backdrop?.url;

  return (
    <div
      className={`${styles.movie} container`}
      style={{
        background: `${backdropImg ? "#000" : "#27272a"}`,
        paddingTop: `${backdropImg ? "15rem" : "8rem"}`,
      }}
    >
      {movie?.backdrop?.url ? (
        <div
          className={styles.movieBg}
          style={{ backgroundImage: `url(${backdropImg})` }}
        >
          <div className={styles.movieBgBackdrop}></div>
        </div>
      ) : null}
      <MovieInfo movieData={movie} isLoading={isLoading} />
      <MovieContent />
    </div>
  );
};

export default Movie;
