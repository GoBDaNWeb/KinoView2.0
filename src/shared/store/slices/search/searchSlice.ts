import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISearchSliceState } from "./types";

const initialState: ISearchSliceState = {
  searchValue: "",
  searchType: "1-4",
  hiddenSearchedMovies: false,
};

const searchMovieSlice = createSlice({
  name: "loadMore",
  initialState,
  reducers: {
    setSearchValue: (
      state: ISearchSliceState,
      action: PayloadAction<string>
    ) => {
      state.searchValue = action.payload;
    },
    setSearchType: (
      state: ISearchSliceState,
      action: PayloadAction<string>
    ) => {
      state.searchType = action.payload;
    },
    handleHiddenSearchedMovies: (
      state: ISearchSliceState,
      action: PayloadAction<boolean>
    ) => {
      state.hiddenSearchedMovies = action.payload;
    },
  },
});

export const { setSearchValue, setSearchType, handleHiddenSearchedMovies } =
  searchMovieSlice.actions;

export default searchMovieSlice.reducer;
