import { FC, useState, memo } from "react";
import Image from "next/image";
import Link from "next/link";

import { IMovieCardProps } from "../types/moveCard.interface";
import { ratingColor } from "@/shared/helpers/ratingColor";
import { translateMovieType } from "@/shared/helpers/translateMovieType";
import { convertRating } from "@/shared/helpers/convertRating";
import styles from "./styles.module.sass";

const MovieCard: FC<IMovieCardProps> = ({ movie }) => {
  const [imageLoading, setImageLoding] = useState(true);

  const { id, rating, poster, name, alternativeName, year, type } = movie;

  return (
    <Link href={`/movie/${id}`} className={styles.movieCard}>
      <div
        className={`${styles.imageWrapper} ${imageLoading ? styles.blur : ""}`}
      >
        {movie?.rating?.kp ? (
          <div className={`${styles.rating} ${ratingColor(rating?.kp)}`}>
            {convertRating(rating?.kp)}
          </div>
        ) : null}
        <Image
          src={poster ? poster.previewUrl : `/image-not-found.jpg`}
          alt="movie"
          fill
          sizes="100%"
          onLoadingComplete={() => setImageLoding((prev) => !prev)}
        />
      </div>
      <div className={styles.movieCardData}>
        <h5 className={styles.movieCardTitle}>{name || alternativeName}</h5>
        {year ? (
          <h6 className={styles.movieCardAbout}>
            {translateMovieType(type)}, {year}
          </h6>
        ) : null}
      </div>
    </Link>
  );
};

export default memo(MovieCard);
