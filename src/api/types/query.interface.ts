interface IFilters {
  rating: string;
  year: string;
  sortByRelease?: string;
  genres: string;
  search?: string;
  type: string | undefined;
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
