import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { IMoviecardProps } from "../types/moveCard.interface";
import { ratingColor } from "@/shared/helpers/ratingColor";
import { translateMovieType } from "@/shared/helpers/translateMovieType";
import styles from "./styles.module.sass";

const MovieCard: FC<IMoviecardProps> = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.id}`} className={styles.movieCard}>
      <div className={styles.imageWrapper}>
        {movie?.rating ? (
          <div
            className={`${styles.rating} ${ratingColor(movie?.rating?.imdb)}`}
          >
            {movie?.rating?.imdb}
          </div>
        ) : null}

        {movie?.poster ? (
          <Image src={movie?.poster.previewUrl} alt="movie" fill />
        ) : (
          <Image src="/image-not-found.jpg" alt="movie" fill />
        )}
      </div>
      <div className={styles.movieCardData}>
        <h5 className={styles.movieCardTitle}>{movie?.name}</h5>
        {movie?.year ? (
          <h6 className={styles.movieCardAbout}>
            {translateMovieType(movie?.type)}, {movie?.year}
          </h6>
        ) : null}
      </div>
    </Link>
  );
};

export default MovieCard;
