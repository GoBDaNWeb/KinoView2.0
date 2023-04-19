import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  serialsListLimit: number;
} = {
  serialsListLimit: 10,
};

export const serialsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setSerialsListLimit: (state, action) => {
      state.serialsListLimit = action.payload;
    },
  },
});

export const { setSerialsListLimit } = serialsSlice.actions;

export default serialsSlice.reducer;
