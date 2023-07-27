import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { convertMovieType } from "../helpers/convertMovieType";

import { setLimit, setType } from "@/shared/store/slices/filter/filterSlice";
import { RootState } from "@/shared/store";
import { useGetMoviesQuery } from "@/shared/api";
import useElementIsVisible from "@/shared/hooks/useElementIsVisible";

import styles from "./styles.module.sass";

import { Filters } from "@/components/common/Filters";
import { MovieCard } from "@/components/common/MovieCard";
import { Skeleton } from "@/components/ui/Skeleton";
import { Loader } from "@/components/ui/Loader";
import { Button } from "@/components/ui/Button";

const Movies = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useElementIsVisible(elementRef);
  const dispatch = useDispatch();
  const { filters } = useSelector((state: RootState) => state.filters);

  const {
    query: { slug },
  } = useRouter();

  const { isLoading, isFetching, data } = useGetMoviesQuery({
    filters,
  });

  useEffect(() => {
    dispatch(setType(slug));
    dispatch(setLimit(15));
  }, [dispatch, slug]);

  useEffect(() => {
    if (isOnScreen) {
      dispatch(setLimit(filters.limit + 15));
    }
  }, [isOnScreen]);

  return (
    <div className={`${styles.movies} container`}>
      <h3>Найди {convertMovieType(slug)} По Вкусу</h3>
      <Filters />
      {isLoading ? (
        <div className={styles.moviesList}>
          {[...Array(15)].map((_, index) => (
            <div key={index} className={styles.skeletonCard}>
              <Skeleton
                customStyles={{
                  height: "auto",
                  paddingBottom: "140%",
                  width: "100%",
                }}
              />
              <Skeleton
                customStyles={{
                  height: "auto",
                  paddingBottom: "7%",
                  width: "70%",
                }}
              />
              <Skeleton
                customStyles={{
                  height: "auto",
                  paddingBottom: "3%",
                  width: "30%",
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.moviesList}>
          {data?.docs?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
      <div ref={elementRef}></div>
      {isFetching ? <Loader /> : null}
    </div>
  );
};

export default Movies;
