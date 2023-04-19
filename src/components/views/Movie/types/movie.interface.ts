export interface IMovieProps {
  movieData: any;
}
export interface IAboutMovieProps {
  aboutMovieData: any;
}

export interface IFactsProps {
  facts: Facts[];
}

export interface IDescriptionProps {
  description: string;
}

export interface IReviewItemProps {
  review: IReview;
}

type Facts = {
  spoiler: boolean;
  type: string;
  value: string;
};

interface IReview {
  author: string;
  date: Date;
  id: number;
  movieId: number;
  review: string;
  reviewDislikes: number;
  reviewLikes: number;
  title: string;
  updatedAt: Date;
  userRating: number;
  type?: string;
}
