import { FC, memo } from "react";
import Link from "next/link";
import Image from "next/image";

import { ISearchMovieCard } from "../../types/serchMovieCard.interface";

import cropText from "../../helpers/cropText";
import { translateMovieType } from "@/shared/helpers/translateMovieType";
import { ratingColor } from "@/shared/helpers/ratingColor";
import { convertRating } from "@/shared/helpers/convertRating";

import styles from "./styles.module.sass";

const SearchMovieCard: FC<ISearchMovieCard> = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className={styles.card}>
        <div className={styles.imgWrapper}>
          <Image
            src={
              movie?.poster?.url ? movie?.poster?.url : "/image-not-found.jpg"
            }
            alt="movie poster"
            className={styles.image}
            fill
            unoptimized
          />
          <div className={`${styles.rating} ${ratingColor(movie.rating.kp)}`}>
            {convertRating(movie.rating.kp)}
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentTop}>
            <h3>{movie.name}</h3>
            <h5>{translateMovieType(movie.type)}</h5>
          </div>
          <p className={styles.description}>{cropText(movie.description)}</p>
        </div>
      </div>
    </Link>
  );
};

export default memo(SearchMovieCard);
