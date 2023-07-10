import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICartoonSliceState } from "./types";

const initialState: ICartoonSliceState = {
  cartoonsListLimit: 10,
};

export const cartoonsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setCartoonsListLimit: (
      state: ICartoonSliceState,
      action: PayloadAction<number>
    ) => {
      state.cartoonsListLimit = action.payload;
    },
  },
});

export const { setCartoonsListLimit } = cartoonsSlice.actions;

export default cartoonsSlice.reducer;
