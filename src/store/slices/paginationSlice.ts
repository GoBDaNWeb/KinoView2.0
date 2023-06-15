import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index";

const initialState: {
  page: number;
} = {
  page: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = paginationSlice.actions;

export default paginationSlice.reducer;
