import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index";

const initialState: {
  filters: {
    order: string;
    genres: string;
    rating: string;
    year: string;
    search: string;
    type: string | undefined;
    sortBy: string;
    limit: number;
  };
} = {
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
    setType: (state, action) => {
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
    setSortBy: (state, action) => {
      state.filters.sortBy = action.payload;
    },
    setOrder: (state, action) => {
      state.filters.order = action.payload;
    },
    setGenres: (state, action) => {
      state.filters.genres = action.payload;
    },
    setRating: (state, action) => {
      state.filters.rating = action.payload;
    },
    setYear: (state, action) => {
      state.filters.year = action.payload;
    },
    setSearch: (state, action) => {
      state.filters.search = action.payload;
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
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
} = filterSlice.actions;

export default filterSlice.reducer;
