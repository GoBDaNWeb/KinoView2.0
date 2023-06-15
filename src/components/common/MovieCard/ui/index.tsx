import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { IMovieCardProps } from "../types/moveCard.interface";
import { ratingColor } from "@/shared/helpers/ratingColor";
import { translateMovieType } from "@/shared/helpers/translateMovieType";
import { convertRating } from "@/shared/helpers/convertRating";
import styles from "./styles.module.sass";

const MovieCard: FC<IMovieCardProps> = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.id}`} className={styles.movieCard}>
      <div className={styles.imageWrapper}>
        {movie?.rating?.kp ? (
          <div className={`${styles.rating} ${ratingColor(movie?.rating?.kp)}`}>
            {convertRating(movie?.rating?.kp)}
          </div>
        ) : null}
        <Image
          src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${movie.id}.jpg`}
          alt="movie"
          fill
        />
      </div>
      <div className={styles.movieCardData}>
        <h5 className={styles.movieCardTitle}>
          {movie?.name || movie?.alternativeName}
        </h5>
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
