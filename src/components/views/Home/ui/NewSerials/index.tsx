import { useGetNewSerialsQuery } from "@/api";
import { MovieList } from "@/components/common/MovieList";
import { RootState } from "@/store";
import { setSerialsListLimit } from "@/store/slices/serialsSlice";
import { useDispatch, useSelector } from "react-redux";

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
    <MovieList
      type="serials"
      isLoading={serialsIsLoading}
      isFetching={serialsIsFetching}
      movieList={serials?.docs}
      changeMovieLimit={changeSerialsLimit}
      title="Новинки мира сериалов"
    />
  );
};

export default NewSerials;
