import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../index";
import { IFilmsSliceState } from "./types";

const initialState: IFilmsSliceState = {
  filmsListLimit: 10,
};

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setFilmsListLimit: (
      state: IFilmsSliceState,
      action: PayloadAction<number>
    ) => {
      state.filmsListLimit = action.payload;
    },
  },
});

export const { setFilmsListLimit } = filmsSlice.actions;
// export const filmsLimit = (state: RootState) => state.films.filmsListLimit;
export default filmsSlice.reducer;
