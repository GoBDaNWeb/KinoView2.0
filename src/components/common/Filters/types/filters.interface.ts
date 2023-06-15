export interface IFilterSubmitProps {
  order: string;
  genres: string;
  rating: number[];
  search: string;
  sortBy: string;
  year: number[];
}

export interface IFilterComponentsProps {
  value?: number[];
  onChange: () => void;
}
