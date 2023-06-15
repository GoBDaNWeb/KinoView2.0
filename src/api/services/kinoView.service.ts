import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie, IMovies } from "@/shared/types/movie.interface";
import { IQuery, IBaseQuery } from "../types/query.interface";
import { IImages } from "@/api/types/image.interface";
import { IReviews } from "@/shared/types/review.interface";
import { HYDRATE } from "next-redux-wrapper";
import { IPerson } from "./../types/person.interface";

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
    getNewFilms: builder.query<IMovies, number>({
      query: (limit) =>
        `movie?field=rating.kp&field=year&field=typeNumber&search=1-10&search=2023&search=1&limit=${limit}&sortField=year&sortField=votes.imdb&sortType=1&sortType=-1&token=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
    getNewSerials: builder.query<IMovies, number>({
      query: (limit) =>
        `movie?field=rating.kp&field=year&field=typeNumber&search=1-10&search=2023&search=2&limit=${limit}&sortField=year&sortField=votes.imdb&sortType=1&sortType=-1&token=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
    getNewCartoons: builder.query<IMovies, number>({
      query: (limit) =>
        `movie?field=rating.kp&field=year&field=typeNumber&search=1-10&search=2023&search=3&limit=${limit}&sortField=year&sortField=votes.imdb&sortType=1&sortType=-1&token=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
    getNewAnime: builder.query<IMovies, number>({
      query: (limit) =>
        `movie?field=rating.kp&field=year&field=typeNumber&search=1-10&search=2023&search=4&limit=${limit}&sortField=year&sortField=votes.imdb&sortType=1&sortType=-1&token=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
    getMovieById: builder.query<IMovie, string | string[] | undefined>({
      query: (id) =>
        `movie?field=id&search=${id}&token=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
    getBestFilms: builder.query<IMovies, IBaseQuery>({
      query: () =>
        `movie?field=rating.kp&search=9-10&sortField=rating.kp&sortType=-1&field=typeNumber&search=1&token=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
    getMovieImage: builder.query<IImages, IBaseQuery>({
      query: ({ id, limit }) =>
        `image?search=${id}&field=movieId&limit=${limit}&token=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
    getReviews: builder.query<IReviews, IBaseQuery>({
      query: ({ id, limit }) =>
        `review?search=${id}&field=movieId&limit=${limit}&token=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
    getMoviesBySearch: builder.query<IMovies, IBaseQuery>({
      query: ({ query, type }) =>
        `movie?search=${query}&field=name&limit=10&sortField=year&sortType=-1&field=typeNumber&search=${type}&isStrict=false&token=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
    getMovies: builder.query<IMovies, IQuery>({
      query: ({ filters, page }) =>
        `movie?${filters.genres}search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=${filters.search}&field=name&isStrict=false&search=${filters.type}&field=typeNumber&search=!null&field=votes.kp&sortField=${filters.sortBy}&sortType=${filters.order}&limit=${filters.limit}&page=${page}&token=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
    getPersonById: builder.query<IPerson, string | string[] | undefined>({
      query: (id) =>
        `person?search=${id}&field=id&token=BGGATXC-SC6M1QJ-QH36R71-HFMCSMW`,
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
  useGetMoviesQuery,
  useGetPersonByIdQuery,
  util: { getRunningQueriesThunk },
} = movieApi;
