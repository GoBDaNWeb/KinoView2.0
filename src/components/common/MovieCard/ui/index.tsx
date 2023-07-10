import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { IMovieCardProps } from "../types/moveCard.interface";
import { ratingColor } from "@/shared/helpers/ratingColor";
import { translateMovieType } from "@/shared/helpers/translateMovieType";
import { convertRating } from "@/shared/helpers/convertRating";
import styles from "./styles.module.sass";

const MovieCard: FC<IMovieCardProps> = ({ movie }) => {
  const [imageLoading, setImageLoding] = useState(true);

  return (
    <Link href={`/movie/${movie.id}`} className={styles.movieCard}>
      <div
        className={`${styles.imageWrapper} ${imageLoading ? styles.blur : ""}`}
      >
        {movie?.rating?.kp ? (
          <div className={`${styles.rating} ${ratingColor(movie?.rating?.kp)}`}>
            {convertRating(movie?.rating?.kp)}
          </div>
        ) : null}
        <Image
          src={movie.poster ? movie.poster.previewUrl : `/image-not-found.jpg`}
          alt="movie"
          fill
          sizes="100%"
          onLoadingComplete={() => setImageLoding(false)}
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
