export const translateMovieType = (type: string) => {
  if (type === "movie") return "фильм";
  if (type === "tv-series") return "сериал";
  if (type === "cartoon") return "мультфильм";
  if (type === "anime") return "аниме";
};
