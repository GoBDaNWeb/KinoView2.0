import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useGetNewFilmsQuery } from "@/shared/api";
import { RootState } from "@/shared/store";
import { setFilmsListLimit } from "@/shared/store/slices/films/filmsSlice";

import { MovieList } from "@/components/common/MovieList";

const NewFilms = () => {
  const dispatch = useDispatch();

  const filmsLimit = useSelector(
    (state: RootState) => state.films.filmsListLimit
  );

  const {
    data: films,
    isLoading: filmsIsLoading,
    isFetching: filmsIsFetching,
  } = useGetNewFilmsQuery(filmsLimit);

  const changeFilmsLimit = useCallback(
    (type: string) => {
      if (type === "load") {
        dispatch(setFilmsListLimit(filmsLimit + 10));
      } else if (type === "clear") {
        setTimeout(() => {
          dispatch(setFilmsListLimit(10));
        }, 200);
      }
    },
    [dispatch, filmsLimit]
  );

  return (
    <section className="container">
      <MovieList
        type="films"
        isLoading={filmsIsLoading}
        isFetching={filmsIsFetching}
        movieList={films?.docs}
        changeMovieLimit={changeFilmsLimit}
        title="Новинки мира кино"
        total={films?.total}
      />
    </section>
  );
};

export default NewFilms;
