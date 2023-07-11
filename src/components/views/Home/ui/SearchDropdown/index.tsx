import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useDispatch } from "react-redux";
import { handleHiddenSearchedMovies } from "@/store/slices/search/searchSlice";
import { useGetMoviesBySearchQuery } from "@/api";

import styles from "./styles.module.sass";

import { Loader } from "@/components/ui/Loader";
import SearchMovieCard from "../SearchMovieCard";

const SearchDropDown = () => {
  const dispatch = useDispatch();

  const { searchValue, searchType, hiddenSearchedMovies } = useSelector(
    (state: RootState) => state.searchMovie
  );

  const handleVisibleSearchList = (boolean: boolean) => {
    dispatch(handleHiddenSearchedMovies(boolean));
  };

  const { isFetching, data } = useGetMoviesBySearchQuery({
    query: searchValue,
    type: searchType,
  });

  const classСondition =
    searchValue?.length > 0 && hiddenSearchedMovies
      ? `${styles.visible} ${styles.dropdown}`
      : `${styles.hidden} ${styles.dropdown}`;

  return (
    <div
      onBlur={() => handleVisibleSearchList(false)}
      onFocus={() => handleVisibleSearchList(true)}
      className={classСondition}
    >
      {isFetching ? (
        <div className={styles.loading}>
          <Loader />
        </div>
      ) : (
        <>
          {data?.docs && data?.docs?.length > 0 ? (
            <>
              {data?.docs?.map((movie) => (
                <SearchMovieCard key={movie.id} movie={movie} />
              ))}
            </>
          ) : (
            <h5>Ничего не найдено.</h5>
          )}
        </>
      )}
    </div>
  );
};

export default SearchDropDown;
