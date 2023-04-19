import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "@/api";
import { createWrapper } from "next-redux-wrapper";
import filmReducer from "./slices/filmsSlice";
import serialsReducer from "./slices/serialsSlice";
import cartoonsReducer from "./slices/cartoonsSlice";
import animeReducer from "./slices/animeSlice";
import searchMovieReducer from "./slices/searchSlice";

export const store = () =>
  configureStore({
    reducer: {
      films: filmReducer,
      serials: serialsReducer,
      cartoons: cartoonsReducer,
      anime: animeReducer,
      seachMovie: searchMovieReducer,
      [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(movieApi.middleware),
  });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(store, { debug: true });
