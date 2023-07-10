import { IMovie } from "@/shared/types/movie.interface";

export interface IMovieInfoProps {
  movieData?: IMovie;
  isLoading: boolean;
}
