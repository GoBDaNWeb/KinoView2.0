import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import qs from "query-string";

import type { RootState } from "@/shared/store";
import { IFilterSubmitProps } from "../../types/filters.interface";
import {
  setGenres,
  setRating,
  setSearch,
  setYear,
  setSortBy,
  setOrder,
} from "@/shared/store/slices/filter/filterSlice";

import styles from "./styles.module.sass";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Rating from "../Rating";
import Years from "../Years";
import Genres from "../Genres";
import SortBy from "../SortBy";
import Order from "../Order";

const Filters = () => {
  const router = useRouter();
  const params = useSearchParams();

  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);

  const { handleSubmit, setValue, control } = useForm({
    mode: "all",
    defaultValues: {
      order: filters.filters.order,
      genres: filters.filters.genres,
      rating: [1, 10],
      year: [1960, 2023],
      search: "",
      sortBy: filters.filters.sortBy,
    },
  });

  const onSubmit = (data: IFilterSubmitProps) => {
    if (data) {
      const { order, rating, year, genres, search, sortBy } = data;
      const ratingString = `${rating[0]}-${rating[1]}`;
      const yearString = `${year[0]}-${year[1]}`;
      const genre = genres === "Все жанры" ? null : genres;
      const genreFilter = genre !== null && genre !== "" ? genres : "";
      const ratingFilter = rating[0] !== rating[1] ? ratingString : rating[0];
      const yearsFilter = year[0] !== year[1] ? yearString : year[0];

      dispatch(setGenres(genreFilter));
      dispatch(setRating(ratingFilter));
      dispatch(setYear(yearsFilter));
      dispatch(setSearch(search));
      dispatch(setSortBy(sortBy));
      dispatch(setOrder(order));

      const updatedQuery = {
        order,
        rating,
        year,
        genres,
        search,
        sortBy,
      };

      const url = qs.stringifyUrl(
        {
          url: router.asPath,
          query: updatedQuery,
        },
        {
          skipNull: true,
          arrayFormatSeparator: "-",
        }
      );

      router.push(url);
    }
  };

  return (
    <form className={styles.filters} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.ranges}>
        <Controller
          control={control}
          name="rating"
          render={({ field: { onChange, value } }) => (
            <Rating value={value} onChange={onChange} />
          )}
        />
        <Controller
          control={control}
          name="year"
          render={({ field: { onChange, value } }) => (
            <Years value={value} onChange={onChange} />
          )}
        />
        <Controller
          control={control}
          name="genres"
          render={({ field: { onChange } }) => <Genres onChange={onChange} />}
        />
        <Controller
          control={control}
          name="order"
          render={({ field: { onChange } }) => <Order onChange={onChange} />}
        />
        <Controller
          control={control}
          name="sortBy"
          render={({ field: { onChange } }) => <SortBy onChange={onChange} />}
        />
      </div>
      <Controller
        control={control}
        name="search"
        render={({ field: { onChange, value } }) => (
          <Input
            clearSearchValue={() => setValue("search", "")}
            value={value}
            onChange={onChange}
          />
        )}
      />

      <Button func={onSubmit}>Найти</Button>
    </form>
  );
};

export default Filters;
