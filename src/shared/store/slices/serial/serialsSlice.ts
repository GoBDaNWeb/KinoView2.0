import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ISerialSliceState } from "./types";

const initialState: ISerialSliceState = {
  serialsListLimit: 10,
};

export const serialsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setSerialsListLimit: (
      state: ISerialSliceState,
      action: PayloadAction<number>
    ) => {
      state.serialsListLimit = action.payload;
    },
  },
});

export const { setSerialsListLimit } = serialsSlice.actions;

export default serialsSlice.reducer;
