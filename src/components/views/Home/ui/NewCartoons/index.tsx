import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetNewCartoonsQuery } from "@/shared/api";
import { RootState } from "@/shared/store";
import { setCartoonsListLimit } from "@/shared/store/slices/cartoons/cartoonsSlice";

import { MovieList } from "@/components/common/MovieList";

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

  const chasngeCartoonsLimit = useCallback(
    (type: string) => {
      if (type === "load") {
        dispatch(setCartoonsListLimit(cartoonsLimit + 10));
      } else if (type === "clear") {
        setTimeout(() => {
          dispatch(setCartoonsListLimit(10));
        }, 200);
      }
    },
    [cartoonsLimit, dispatch]
  );

  return (
    <section className="container">
      <MovieList
        type="cartoon"
        isLoading={cartoonsIsLoading}
        isFetching={cartoonsIsFetching}
        movieList={cartoons?.docs}
        total={cartoons?.total}
        changeMovieLimit={chasngeCartoonsLimit}
        title="Новинки мира мультфильмов"
      />
    </section>
  );
};

export default NewCartoons;
