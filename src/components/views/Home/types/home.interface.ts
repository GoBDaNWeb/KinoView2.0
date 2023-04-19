export interface IMovieListProps {
  title: string;
  movieList: any;
  isLoading: boolean;
  isFetching: boolean;
  loadMoreMovie?: any;
  changeMovieLimit?: any;
  type: string;
}
