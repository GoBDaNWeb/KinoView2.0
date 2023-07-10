import { IMovies } from "@/shared/types/movie.interface";

export interface IPersonFilmsProps {
  movieData: IMovies | undefined;
  isLoading: boolean;
}
