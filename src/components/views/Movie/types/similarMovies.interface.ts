import { IMovie } from "@/shared/types/movie.interface";

export interface ISimilarMoviesProps {
  movieData: IMovie | undefined;
  isLoading: boolean;
}
