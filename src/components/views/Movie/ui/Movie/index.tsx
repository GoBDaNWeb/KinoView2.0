import { FC } from "react";
import { IMovieProps } from "../../types/movie.interface";
import MovieInfo from "../MovieInfo";
import MovieTabContent from "../MovieTabContent";
import styles from "./styles.module.sass";
import MovieContent from "../MovieContent";

const Movie: FC<IMovieProps> = ({ movieData, isLoading }) => {
  const backdropImg = movieData?.backdrop?.url;

  return (
    <div
      className={`${styles.movie} container`}
      style={{
        background: `${backdropImg ? "#000" : "#27272a"}`,
        paddingTop: `${backdropImg ? "15rem" : "8rem"}`,
      }}
    >
      {movieData?.backdrop?.url ? (
        <div
          className={styles.movieBg}
          style={{ backgroundImage: `url(${backdropImg})` }}
        >
          <div className={styles.movieBgBackdrop}></div>
        </div>
      ) : null}
      <MovieInfo movieData={movieData} isLoading={isLoading} />
      <MovieContent />
    </div>
  );
};

export default Movie;
