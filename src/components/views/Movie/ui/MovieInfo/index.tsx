import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components/ui/Button";
import AboutMovie from "../AboutMovie";
import { IMovieProps } from "../../types/movie.interface";
import { Skeleton } from "@/components/ui/Skeleton";
import styles from "./styles.module.sass";
import { BsBookmark } from "react-icons/bs";
const MovieInfo: FC<IMovieProps> = ({ movieData }) => {
  const aboutMovieData = {
    year: movieData?.year,
    countries: movieData?.countries,
    genres: movieData?.genres,
    slogan: movieData?.slogan,
    fees: movieData?.fees?.world,
    premiere: movieData?.premiere,
    type: movieData?.type,
  };
  console.log("movieData", movieData);

  return (
    <div className={styles.movieInfo}>
      <div className={styles.imageWrapper}>
        {!movieData ? (
          <Skeleton
            customStyles={{
              width: " 100%",
              paddingBottom: "145%",
              minWidth: "288px",
            }}
          />
        ) : (
          <>
            {movieData?.poster ? (
              <Image src={movieData?.poster?.url} fill alt="movie" />
            ) : (
              <Image src="/image-not-found.jpg" fill alt="movie" />
            )}
          </>
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
          <Button func={() => console.log("asd")}>
            <BsBookmark />
            Добавить в избранное
          </Button>
        </div>

        <AboutMovie aboutMovieData={aboutMovieData} />
      </div>
    </div>
  );
};

export default MovieInfo;
