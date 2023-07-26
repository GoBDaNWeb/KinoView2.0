type Filters = {
  order: string;
  genres: string;
  rating: string | number;
  year: string | number;
  search: string;
  type?: string;
  sortBy: string;
  limit: number;
};

export interface IFilterSliceState {
  filters: Filters;
}
