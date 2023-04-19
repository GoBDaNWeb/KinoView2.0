import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGetNewFilms } from "../types";
import { HYDRATE } from "next-redux-wrapper";

const token = process.env.NEXT_PUBLIC_API_KEY;

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getNewFilms: builder.query<IGetNewFilms, number>({
      query: (limit) =>
        `movie?field=rating.kp&field=year&field=typeNumber&search=1-10&search=2022&search=1&limit=${limit}&sortField=year&sortField=votes.imdb&sortType=1&sortType=-1&token=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
    getNewSerials: builder.query<any, number>({
      query: (limit) =>
        `movie?field=rating.kp&field=year&field=typeNumber&search=1-10&search=2022&search=2&limit=${limit}&sortField=year&sortField=votes.imdb&sortType=1&sortType=-1&token=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
    getNewCartoons: builder.query<any, number>({
      query: (limit) =>
        `movie?field=rating.kp&field=year&field=typeNumber&search=1-10&search=2022&search=3&limit=${limit}&sortField=year&sortField=votes.imdb&sortType=1&sortType=-1&token=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
    getNewAnime: builder.query<any, number>({
      query: (limit) =>
        `movie?field=rating.kp&field=year&field=typeNumber&search=1-10&search=2022&search=4&limit=${limit}&sortField=year&sortField=votes.imdb&sortType=1&sortType=-1&token=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
    getMovieById: builder.query<any, string | string[] | undefined>({
      query: (id: any) =>
        `movie?field=id&search=${id}&token=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
    getBestFilms: builder.query<any, any>({
      query: () =>
        `movie?field=rating.kp&search=9-10&sortField=rating.kp&sortType=-1&field=typeNumber&search=1&token=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
    getMovieImage: builder.query<any, any>({
      query: ({ id, limit }) =>
        `/image?search=${id}&field=movieId&limit=${limit}&token=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
    getReviews: builder.query<any, any>({
      query: ({ id, limit }) =>
        `/review?search=${id}&field=movieId&limit=${limit}&token=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
    getMoviesBySearch: builder.query<any, any>({
      query: ({ query, type }) =>
        `movie?search=${query}&field=name&limit=10&sortField=year&sortType=-1&field=typeNumber&search=${type}&isStrict=false&token=BGGATXC-SC6M1QJ-QH36R71-HFMCSMW`,
    }),
  }),
});

export const {
  useGetNewFilmsQuery,
  useGetNewSerialsQuery,
  useGetNewCartoonsQuery,
  useGetNewAnimeQuery,
  useGetMovieByIdQuery,
  useGetBestFilmsQuery,
  useGetMovieImageQuery,
  useGetReviewsQuery,
  useGetMoviesBySearchQuery,
  util: { getRunningQueriesThunk },
} = movieApi;
