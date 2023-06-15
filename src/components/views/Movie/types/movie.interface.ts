import { IReview } from "@/shared/types/review.interface";
import { IMovie } from "@/shared/types/movie.interface";

export interface IMovieProps {
  movieData: IMovie;
  isLoading: boolean;
}

type Countries = {
  name: string;
};

type Genres = {
  name: string;
};

type Fees = {
  value: number;
  currency: string;
};
type Premiere = {
  world: Date;
};

interface IAboutMovie {
  countries: Countries[];
  fees: Fees;
  genres: Genres[];
  slogan: string;
  type: string;
  year: number;
  premiere: Premiere;
  movieLength: number;
  ageRating: number;
  budget: any;
}

export interface IAboutMovieProps {
  aboutMovieData: IAboutMovie;
}

export interface IFactsProps {
  facts: Facts[] | undefined;
}

export interface IDescriptionProps {
  description: string | undefined;
}

export interface IReviewItemProps {
  review: IReview;
}

type Facts = {
  spoiler: boolean;
  type: string;
  value: string;
};

// interface IReview {
//   author: string;
//   date: Date;
//   id: number;
//   movieId: number;
//   review: string;
//   reviewDislikes: number;
//   reviewLikes: number;
//   title: string;
//   updatedAt: Date;
//   userRating: number;
//   type?: string;
// }
