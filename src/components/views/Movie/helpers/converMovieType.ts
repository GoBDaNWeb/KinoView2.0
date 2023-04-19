export const convertMovieType = (type: string) => {
  if (type === "movie") return "фильме";
  if (type === "tv-series") return "сериале";
  if (type === "cartoon") return "мультфильме";
  if (type === "anime") return "аниме";
};
