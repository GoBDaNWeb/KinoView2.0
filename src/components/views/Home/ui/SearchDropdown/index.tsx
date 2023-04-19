import { useSelector } from "react-redux";
import { useGetMoviesBySearchQuery } from "@/api";

import { Loader } from "@/components/ui/Loader";
import styles from "./styles.module.sass";

// * components
import SearchMovieCard from "../SearchMovieCard";

const SearchDropDown = () => {
  const { searchValue, searchType, hiddenSearchedMovies } = useSelector(
    (state: any) => state.searchMovie
  );
  // @ts-ignore
  const { isFetching, data } = useGetMoviesBySearchQuery({
    query: searchValue,
    type: searchType,
  });
  const classcondition =
    searchValue?.length > 0 && hiddenSearchedMovies
      ? `${styles.visible} ${styles.dropdown}`
      : `${styles.hidden} ${styles.dropdown}`;

  return (
    <div className={classcondition}>
      {isFetching ? (
        <div className={styles.loading}>
          <Loader />
        </div>
      ) : (
        <>
          {data?.docs?.map((movie) => (
            <SearchMovieCard key={movie.id} movie={movie} />
          ))}
        </>
      )}
    </div>
  );
};

export default SearchDropDown;
