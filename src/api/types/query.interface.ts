interface IFilters {
  rating: string | number;
  year: string | number;
  sortByRelease?: string;
  genres: string;
  search?: string;
  type?: string;
  sortBy: string;
  order: string;
  limit: number;
}

export interface IBaseQuery {
  type?: string;
  query?: string;
  limit?: number;
  page?: number;
  id?: string | string[] | undefined;
}

export interface IQuery extends IBaseQuery {
  filters: IFilters;
}
