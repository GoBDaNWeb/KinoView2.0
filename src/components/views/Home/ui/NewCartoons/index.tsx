import { useGetNewCartoonsQuery } from "@/api";
import { MovieList } from "@/components/common/MovieList";
import { RootState } from "@/store";
import { setCartoonsListLimit } from "@/store/slices/cartoonsSlice";
import { useDispatch, useSelector } from "react-redux";

const NewCartoons = () => {
  const dispatch = useDispatch();

  const cartoonsLimit = useSelector(
    (state: RootState) => state.cartoons.cartoonsListLimit
  );

  const {
    data: cartoons,
    isLoading: cartoonsIsLoading,
    isFetching: cartoonsIsFetching,
  } = useGetNewCartoonsQuery(cartoonsLimit);

  const chasngeCartoonsLimit = (type: string) => {
    if (type === "load") {
      dispatch(setCartoonsListLimit(cartoonsLimit + 10));
    } else if (type === "clear") {
      setTimeout(() => {
        dispatch(setCartoonsListLimit(10));
      }, 200);
    }
  };

  return (
    <section className="container">
      <MovieList
        type="cartoon"
        isLoading={cartoonsIsLoading}
        isFetching={cartoonsIsFetching}
        movieList={cartoons?.docs}
        changeMovieLimit={chasngeCartoonsLimit}
        title="Новинки мира мультфильмов"
      />
    </section>
  );
};

export default NewCartoons;
