import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  cartoonsListLimit: number;
} = {
  cartoonsListLimit: 10,
};

export const cartoonsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setCartoonsListLimit: (state, action) => {
      state.cartoonsListLimit = action.payload;
    },
  },
});

export const { setCartoonsListLimit } = cartoonsSlice.actions;

export default cartoonsSlice.reducer;
