import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index";

const initialState: {
  filmsListLimit: number;
} = {
  filmsListLimit: 10,
};

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setFilmsListLimit: (state, action) => {
      state.filmsListLimit = action.payload;
    },
  },
});

export const { setFilmsListLimit } = filmsSlice.actions;
export const filmsLimit = (state: RootState) => state.films.filmsListLimit;
export default filmsSlice.reducer;
