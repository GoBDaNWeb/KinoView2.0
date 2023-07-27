import { HYDRATE } from "next-redux-wrapper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IMovie, IMovies } from "@/shared/types/movie.interface";
import { IQuery, IBaseQuery } from "../types/query.interface";
import { IImages } from "@/shared/api/types/image.interface";
import { IReviews } from "@/shared/types/review.interface";
import { IPerson } from "./../types/person.interface";

const token = "BGGATXC-SC6M1QJ-QH36R71-HFMCSMW";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      headers.set("X-API-KEY", token);

      return headers;
    },
  }),

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getNewFilms: builder.query<IMovies, number>({
      query: (limit) =>
        `v1.3/movie?field=rating.kp&field=year&field=typeNumber&search=1-10&search=2023&search=1&limit=${limit}&sortField=year&sortField=votes.imdb&sortType=1&sortType=-1`,
    }),
    getNewSerials: builder.query<IMovies, number>({
      query: (limit) =>
        `v1.3/movie?field=rating.kp&field=year&field=typeNumber&search=1-10&search=2023&search=2&limit=${limit}&sortField=year&sortField=votes.imdb&sortType=1&sortType=-1`,
    }),
    getNewCartoons: builder.query<IMovies, number>({
      query: (limit) =>
        `v1.3/movie?field=rating.kp&field=year&field=typeNumber&search=1-10&search=2023&search=3&limit=${limit}&sortField=year&sortField=votes.imdb&sortType=1&sortType=-1`,
    }),
    getNewAnime: builder.query<IMovies, number>({
      query: (limit) =>
        `v1.3/movie?field=rating.kp&field=year&field=typeNumber&search=1-10&search=2023&search=4&limit=${limit}&sortField=year&sortField=votes.imdb&sortType=1&sortType=-1`,
    }),
    getMovieById: builder.query<IMovie, string | string[] | undefined>({
      query: (id) => `v1.3/movie/${id}`,
    }),

    getMovieImage: builder.query<IImages, IBaseQuery>({
      query: ({ id, limit }) =>
        `v1/image?search=${id}&field=movieId&limit=${limit}`,
    }),
    getReviews: builder.query<IReviews, IBaseQuery>({
      query: ({ id, limit }) =>
        `review?search=${id}&field=movieId&limit=${limit}`,
    }),
    getMoviesBySearch: builder.query<IMovies, IBaseQuery>({
      query: ({ query, type }) =>
        `v1.3/movie?search=${query}&field=name&limit=10&sortField=rating.kp&sortType=-1&field=typeNumber&search=${type}&isStrict=false`,
    }),
    getMovies: builder.query<IMovies, IQuery>({
      query: ({ filters }) =>
        `v1.3/movie?name=${filters.search}&${
          filters.genres ? `genres.name=${filters.genres}&` : ""
        }sortField=${filters.sortBy}&sortType=${filters.order}&typeNumber=${
          filters.type
        }&year=${filters.year}&rating.kp=${filters.rating}&limit=${
          filters.limit
        }&page=1`,
    }),
    getPersonById: builder.query<IPerson, string | string[] | undefined>({
      query: (id) => `v1/person/${id}`,
    }),
    getMoviesById: builder.query<
      IMovies,
      { query: string | undefined; limit: number }
    >({
      query: ({ query, limit }) => `v1.3/movie?${query}&limit=${limit}`,
    }),
  }),
});

export const {
  useGetNewFilmsQuery,
  useGetNewSerialsQuery,
  useGetNewCartoonsQuery,
  useGetNewAnimeQuery,
  useGetMovieByIdQuery,
  // useGetBestFilmsQuery,
  useGetMovieImageQuery,
  useGetReviewsQuery,
  useGetMoviesBySearchQuery,
  useGetMoviesQuery,
  useGetPersonByIdQuery,
  useGetMoviesByIdQuery,
  util: { getRunningQueriesThunk },
} = movieApi;
