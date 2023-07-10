import { FC, useEffect, useState, useRef } from "react";
import { IMovieListProps } from "../types/movieList.interface";
import { MovieCard } from "@/components/common/MovieCard";
import { Skeleton } from "@/components/ui/Skeleton";
import { Button } from "@/components/ui/Button";
import styles from "./styles.module.sass";

const MovieList: FC<IMovieListProps> = ({
  title,
  movieList,
  isLoading,
  isFetching,
  type,
  total,
  changeMovieLimit,
}) => {
  const [disabled, setDisables] = useState<boolean>(false);

  const sectionRef = useRef(null);

  const clickResetMovies = () => {
    window.scrollTo({
      //@ts-ignore
      top: sectionRef.current?.offsetTop + 600,
      behavior: "smooth",
    });
    changeMovieLimit("clear");
  };

  const handleDisabled = total === movieList?.length || isFetching;

  useEffect(() => {
    setDisables(handleDisabled);
  }, [handleDisabled, isFetching]);

  return (
    <div ref={sectionRef} className={styles.movies} id={`${type}`}>
      <h3 className={styles.moviesTitle}>{title}</h3>
      <div className={styles.moviesList}>
        {isLoading || !movieList ? (
          <>
            {[...Array(10)].map((_, index: number) => (
              <Skeleton
                customStyles={{
                  height: "auto",
                  paddingBottom: "140%",
                  width: "100%",
                }}
                key={index}
              />
            ))}
          </>
        ) : (
          <>
            {movieList.map((item, index: number) => (
              <MovieCard movie={item} key={item.id} />
            ))}
          </>
        )}
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.totalMovie}>
          Всего показано: {movieList?.length}
        </div>
        <Button isDisabled={disabled} func={() => changeMovieLimit("load")}>
          {isFetching ? "Загрузка..." : "Показать еще"}
        </Button>
        <Button
          customStyles={{ opacity: `${movieList?.length === 10 ? 0 : 1}` }}
          isDisabled={movieList?.length === 10}
          func={() => clickResetMovies()}
        >
          Скрыть
        </Button>
      </div>
    </div>
  );
};

export default MovieList;
