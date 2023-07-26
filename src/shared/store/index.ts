import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { movieApi } from "@/shared/api";

import filmReducer from "./slices/films/filmsSlice";
import serialsReducer from "./slices/serial/serialsSlice";
import cartoonsReducer from "./slices/cartoons/cartoonsSlice";
import animeReducer from "./slices/anime/animeSlice";
import searchMovieReducer from "./slices/search/searchSlice";
import filtersReducer from "./slices/filter/filterSlice";
import paginationReducer from "./slices/pagination/paginationSlice";
import burgerReducer from "./slices/burger/burgerSlice";

export const store = () =>
  configureStore({
    reducer: {
      films: filmReducer,
      serials: serialsReducer,
      cartoons: cartoonsReducer,
      anime: animeReducer,
      searchMovie: searchMovieReducer,
      filters: filtersReducer,
      pagination: paginationReducer,
      burger: burgerReducer,
      [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(movieApi.middleware),
  });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(store, { debug: true });
