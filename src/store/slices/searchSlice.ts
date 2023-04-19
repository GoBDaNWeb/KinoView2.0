import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  searchValue: string;
  searchType: string;
  hiddenSearchedMovies: boolean;
} = {
  searchValue: "",
  searchType: "1-4",
  hiddenSearchedMovies: false,
};

const searchMovieSlice = createSlice({
  name: "loadMore",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSearchType: (state, action) => {
      state.searchType = action.payload;
    },
    handleHiddenSearchedMovies: (state, action) => {
      state.hiddenSearchedMovies = action.payload;
    },
  },
});

export const { setSearchValue, setSearchType, handleHiddenSearchedMovies } =
  searchMovieSlice.actions;

export default searchMovieSlice.reducer;
