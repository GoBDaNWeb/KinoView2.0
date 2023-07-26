import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../index";
import { IPaginationSliceState } from "./types";

const initialState: IPaginationSliceState = {
  page: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage: (state: IPaginationSliceState, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = paginationSlice.actions;

export default paginationSlice.reducer;
