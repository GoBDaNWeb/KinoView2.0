import { useDispatch, useSelector } from "react-redux";

import { useGetNewAnimeQuery } from "@/shared/api";
import { RootState } from "@/shared/store";
import { setAnimeListLimit } from "@/shared/store/slices/anime/animeSlice";

import { MovieList } from "@/components/common/MovieList";

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
    <section className="container">
      <MovieList
        type="anime"
        isLoading={animeIsLoading}
        isFetching={animeIsFetching}
        movieList={anime?.docs}
        changeMovieLimit={changeAnimeLimit}
        title="Новинки мира аниме"
        total={anime?.total}
      />
    </section>
  );
};

export default NewAnime;
