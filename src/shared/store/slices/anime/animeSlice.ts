import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAnimeSliceState } from "./types";

const initialState: IAnimeSliceState = {
  animeListLimit: 10,
};

export const animeSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setAnimeListLimit: (
      state: IAnimeSliceState,
      action: PayloadAction<number>
    ) => {
      state.animeListLimit = action.payload;
    },
  },
});

export const { setAnimeListLimit } = animeSlice.actions;

export default animeSlice.reducer;
