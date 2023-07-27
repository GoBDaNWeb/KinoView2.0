import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../index";
import { IFilterSliceState } from "./types";

const initialState: IFilterSliceState = {
  filters: {
    order: "-1",
    genres: "",
    rating: "1-10",
    year: "1960-2023",
    search: "",
    type: "",
    sortBy: "rating.kp",
    limit: 15,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setType: (state: IFilterSliceState, action) => {
      let type;
      if (action.payload === "films") {
        type = "1";
      } else if (action.payload === "serials") {
        type = "2";
      } else if (action.payload === "cartoons") {
        type = "3";
      } else if (action.payload === "anime") {
        type = "4";
      }
      state.filters.type = type;
    },
    setSortBy: (state: IFilterSliceState, action: PayloadAction<string>) => {
      state.filters.sortBy = action.payload;
    },
    setOrder: (state: IFilterSliceState, action: PayloadAction<string>) => {
      state.filters.order = action.payload;
    },
    setGenres: (state: IFilterSliceState, action: PayloadAction<string>) => {
      state.filters.genres = action.payload;
    },
    setRating: (
      state: IFilterSliceState,
      action: PayloadAction<string | number>
    ) => {
      state.filters.rating = action.payload;
    },
    setYear: (
      state: IFilterSliceState,
      action: PayloadAction<string | number>
    ) => {
      state.filters.year = action.payload;
    },
    setSearch: (state: IFilterSliceState, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
    },
    resetFilters: (state: IFilterSliceState) => {
      state.filters = initialState.filters;
    },
    setLimit: (state: IFilterSliceState, action: PayloadAction<number>) => {
      state.filters.limit = action.payload;
    },
  },
});

export const {
  setType,
  setSortBy,
  setOrder,
  setGenres,
  setRating,
  setYear,
  setSearch,
  setLimit,
} = filterSlice.actions;

export default filterSlice.reducer;
