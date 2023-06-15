import { IMovie } from "@/shared/types/movie.interface";

export interface IPersonFilmsProps {
  movieData: IMovie[] | undefined;
  isLoading: boolean;
}
