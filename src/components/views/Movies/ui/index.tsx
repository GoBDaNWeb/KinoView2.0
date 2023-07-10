import { useEffect } from "react";
import { useRouter } from "next/router";

import { convertMovieType } from "../helpers/convertMovieType";

import styles from "./styles.module.sass";

import { useDispatch, useSelector } from "react-redux";
import { setType } from "@/store/slices/filter/filterSlice";
import { setPage } from "@/store/slices/pagination/paginationSlice";
import { RootState } from "@/store";
import { useGetMoviesQuery } from "@/api";
import { Filters } from "@/components/common/Filters";
import { MovieCard } from "@/components/common/MovieCard";
import { Pagination } from "@/components/ui/Pagination";
import { Skeleton } from "@/components/ui/Skeleton";

const Movies = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state: RootState) => state.filters);
  const { page } = useSelector((state: RootState) => state.pagination);

  const {
    query: { slug },
  } = useRouter();

  useEffect(() => {
    dispatch(setType(slug));
    dispatch(setPage(1));
  }, [dispatch, slug]);

  const { isLoading, isFetching, data } = useGetMoviesQuery({
    filters,
    page,
  });

  return (
    <div className={`${styles.movies} container`}>
      <h3>Найди {convertMovieType(slug)} По Вкусу</h3>
      <Filters />
      {isLoading || isFetching ? (
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
      <Pagination totalPages={data?.pages} />
    </div>
  );
};

export default Movies;
