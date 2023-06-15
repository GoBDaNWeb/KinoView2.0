import { IMovie } from "@/shared/types/movie.interface";

export interface IMovieListProps {
  title: string;
  movieList: IMovie[] | undefined;
  isLoading: boolean;
  isFetching: boolean;
  changeMovieLimit: (type: string) => void;
  type: string;
}
