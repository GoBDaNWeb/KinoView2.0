import { FC } from "react";
import Image from "next/image";

import { IMovieInfoProps } from "../../types/movieInfo.interface";

import { ratingColor } from "@/shared/helpers/ratingColor";
import { convertRating } from "@/shared/helpers/convertRating";

import styles from "./styles.module.sass";

import AboutMovie from "../AboutMovie";
import { Skeleton } from "@/components/ui/Skeleton";

const MovieInfo: FC<IMovieInfoProps> = ({ movieData, isLoading }) => {
  const aboutMovieData = {
    year: movieData?.year,
    countries: movieData?.countries,
    genres: movieData?.genres,
    slogan: movieData?.slogan,
    fees: movieData?.fees?.world,
    premiere: movieData?.premiere,
    type: movieData?.type,
    movieLength: movieData?.movieLength,
    ageRating: movieData?.ageRating,
    budget: movieData?.budget,
  };

  return (
    <div className={styles.movieInfo}>
      <div className={styles.imageWrapper}>
        {movieData?.rating?.kp ? (
          <div
            className={`${styles.rating} ${ratingColor(movieData?.rating?.kp)}`}
          >
            {convertRating(movieData?.rating?.kp)}
          </div>
        ) : null}
        {!movieData || isLoading ? (
          <Skeleton
            customStyles={{
              width: " 100%",
              aspectRatio: ".75",
              minWidth: "288px",
            }}
          />
        ) : (
          <Image
            src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${movieData.id}.jpg`}
            fill
            alt="movie"
            sizes="100%"
          />
        )}
      </div>

      <div className={styles.movieInfoAbout}>
        <div className={styles.aboutMain}>
          <h1 className={styles.movieTitle}>
            {!movieData ? (
              <Skeleton customStyles={{ width: "270px", height: "40px" }} />
            ) : (
              <>
                {movieData?.name} ({movieData?.year})
              </>
            )}
          </h1>
          <h3 className={styles.movieSlogan}>
            {!movieData ? (
              <Skeleton customStyles={{ height: "22px", width: "200px" }} />
            ) : (
              movieData?.slogan
            )}
          </h3>
        </div>
        <AboutMovie aboutMovieData={aboutMovieData} />
      </div>
    </div>
  );
};

export default MovieInfo;
