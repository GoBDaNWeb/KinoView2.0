import { useDispatch, useSelector } from "react-redux";

import { useGetNewSerialsQuery } from "@/shared/api";
import { RootState } from "@/shared/store";
import { setSerialsListLimit } from "@/shared/store/slices/serial/serialsSlice";

import { MovieList } from "@/components/common/MovieList";

const NewSerials = () => {
  const dispatch = useDispatch();

  const serialsLimit = useSelector(
    (state: RootState) => state.serials.serialsListLimit
  );

  const {
    data: serials,
    isLoading: serialsIsLoading,
    isFetching: serialsIsFetching,
    refetch,
  } = useGetNewSerialsQuery(serialsLimit);

  const changeSerialsLimit = (type: string) => {
    if (type === "load") {
      dispatch(setSerialsListLimit(serialsLimit + 10));
      refetch();
    } else if (type === "clear") {
      setTimeout(() => {
        dispatch(setSerialsListLimit(10));
      }, 200);
    }
  };

  return (
    <section className="container">
      <MovieList
        type="serials"
        isLoading={serialsIsLoading}
        isFetching={serialsIsFetching}
        movieList={serials?.docs}
        changeMovieLimit={changeSerialsLimit}
        title="Новинки мира сериалов"
        total={serials?.total}
      />
    </section>
  );
};

export default NewSerials;
