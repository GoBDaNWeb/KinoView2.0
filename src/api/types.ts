type Data = {
  total: number;
  limit: number;
  page: number;
  pages: number;
};

type ExternalId = {
  kpHD: null;
  imdb: string;
  tmdb: number;
  _id: string;
};

type Logo = {
  _id: string;
  url: null;
};

type Poster = {
  _id: string;
  url: string;
  previewUrl: string;
};

type Rating = {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
  _id: string;
};

type Votes = {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
  _id: string;
};

type Watchability = {
  _id: string;
  items: null;
};

type Name = {
  _id: string;
  name: string;
};

interface IDocs {
  externalId: ExternalId;
  logo: Logo;
  poster: Poster;
  rating: Rating;
  votes: Votes;
  watchability: Watchability;
  movieLength: number;
  id: string;
  type: string;
  name: string;
  description: string;
  year: number;
  alternativeName: string;
  enName: null;
  names: Name[];
  shortDescription: null;
  releaseYears?: [];
}

export interface IGetNewFilms extends Data {
  docs: IDocs[];
}
