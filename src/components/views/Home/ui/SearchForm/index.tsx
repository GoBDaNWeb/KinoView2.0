import React, { useEffect, useCallback } from "react";
import { Controller, useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import {
  setSearchValue,
  setSearchType,
  handleHiddenSearchedMovies,
} from "@/store/slices/search/searchSlice";

import useDebounce from "@/shared/hooks/useDebounce";

import { Select } from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
import styles from "./styles.module.sass";

const options = [
  { label: "Что Угодно", value: "Что Угодно" },
  { label: "Фильмы", value: "Фильмы" },
  { label: "Сериалы", value: "Сериалы" },
  { label: "Мультфильмы", value: "Мультфильмы" },
  { label: "Аниме", value: "Аниме" },
];

const SearchForm = () => {
  const dispatch = useDispatch();

  const handleVisibleSearchList = (boolean: boolean) => {
    dispatch(handleHiddenSearchedMovies(boolean));
  };

  const { setValue, watch, control } = useForm({
    mode: "all",
  });

  const WatchSelect = watch("Select", "Что угодно");
  const WatchSearch = watch("Search");

  const debounced = useDebounce(WatchSearch);

  const searhType = useCallback(() => {
    switch (WatchSelect) {
      case "Что Угодно":
        return "1-4";
      case "Фильмы":
        return "1";
      case "Сериалы":
        return "2";
      case "Мультфильмы":
        return "3";
      case "Аниме":
        return "4";
      default:
        return "1-4";
    }
  }, [WatchSelect]);

  useEffect(() => {
    dispatch(setSearchValue(debounced));
  }, [debounced, dispatch, WatchSearch]);

  useEffect(() => {
    dispatch(setSearchType(searhType()));
  }, [WatchSelect, dispatch, searhType]);

  const clearSearchValue = (): void => {
    setValue("Search", "");
  };

  return (
    <form className={styles.searchForm}>
      <Controller
        control={control}
        name="Select"
        render={({ field: { onChange } }) => (
          <Select
            options={options}
            onChange={onChange}
            onBlur={() => handleVisibleSearchList(false)}
            onFocus={() => handleVisibleSearchList(true)}
          />
        )}
      />
      <Controller
        control={control}
        name="Search"
        render={({ field: { onChange, value } }) => (
          <Input
            onChange={onChange}
            value={value}
            onBlur={() => handleVisibleSearchList(false)}
            onFocus={() => handleVisibleSearchList(true)}
            placeholder={WatchSelect ? `Найти ${WatchSelect}` : "Поиск"}
            clearSearchValue={clearSearchValue}
          />
        )}
      />
    </form>
  );
};

export default SearchForm;
