import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  animeListLimit: number;
} = {
  animeListLimit: 10,
};

export const animeSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setAnimeListLimit: (state, action) => {
      state.animeListLimit = action.payload;
    },
  },
});

export const { setAnimeListLimit } = animeSlice.actions;

export default animeSlice.reducer;
