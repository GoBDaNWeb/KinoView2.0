import { useGetNewAnimeQuery } from "@/api";
import { MovieList } from "@/components/common/MovieList";
import { RootState } from "@/store";
import { setAnimeListLimit } from "@/store/slices/animeSlice";
import { useDispatch, useSelector } from "react-redux";

const NewAnime = () => {
  const dispatch = useDispatch();

  const animeLimit = useSelector(
    (state: RootState) => state.anime.animeListLimit
  );

  const {
    data: anime,
    isLoading: animeIsLoading,
    isFetching: animeIsFetching,
  } = useGetNewAnimeQuery(animeLimit);

  const changeAnimeLimit = (type: string) => {
    if (type === "load") {
      dispatch(setAnimeListLimit(animeLimit + 10));
    } else if (type === "clear") {
      setTimeout(() => {
        dispatch(setAnimeListLimit(10));
      }, 200);
    }
  };
  return (
    <MovieList
      type="anime"
      isLoading={animeIsLoading}
      isFetching={animeIsFetching}
      movieList={anime?.docs}
      changeMovieLimit={changeAnimeLimit}
      title="Новинки мира аниме"
    />
  );
};

export default NewAnime;
