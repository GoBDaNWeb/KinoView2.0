// * react/next
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IMovieCardProps } from "@/shared/types/movie";

// * helpers
import cropText from "../../helpers/cropText";
import { translateMovieType } from "@/shared/helpers/translateMovieType";
import { ratingColor } from "@/shared/helpers/ratingColor";

// * styles
import styles from "./styles.module.sass";

const SearchMovieCard: React.FC<IMovieCardProps> = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className={styles.card}>
        <div className={styles.imgWrapper}>
          <Image
            src={movie.poster.url}
            alt="movie poster"
            className={styles.image}
            layout="fill"
            unoptimized
          />
          <div className={`${styles.rating} ${ratingColor(movie.rating.kp)}`}>
            {movie.rating.kp}
          </div>
        </div>
        <div className={styles.content}>
          <>
            <h3>{movie.name}</h3>
            <h5>{translateMovieType(movie.type)}</h5>
          </>
          <p className={styles.description}>{cropText(movie.description)}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchMovieCard;
