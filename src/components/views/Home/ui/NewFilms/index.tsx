import { useGetNewFilmsQuery } from "@/api";
import { MovieList } from "@/components/common/MovieList";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { setFilmsListLimit } from "@/store/slices/films/filmsSlice";

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

  const changeFilmsLimit = (type: string) => {
    if (type === "load") {
      dispatch(setFilmsListLimit(filmsLimit + 10));
    } else if (type === "clear") {
      setTimeout(() => {
        dispatch(setFilmsListLimit(10));
      }, 200);
    }
  };

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
