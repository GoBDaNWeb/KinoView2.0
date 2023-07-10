import { createSlice } from "@reduxjs/toolkit";
import { IBurgerSliceState } from "./types";

const initialState: IBurgerSliceState = {
  burgerIsActive: false,
};

const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    hadleOpenBurger: (state: IBurgerSliceState) => {
      state.burgerIsActive = !state.burgerIsActive;
    },
  },
});

export const { hadleOpenBurger } = burgerSlice.actions;

export default burgerSlice.reducer;
