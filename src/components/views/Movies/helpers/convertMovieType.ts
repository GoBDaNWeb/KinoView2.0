export const convertMovieType = (type: string | string[] | undefined) => {
  if (type === "films") return "Фильмы";
  if (type === "serials") return "Сериалы";
  if (type === "anime") return "Аниме";
  if (type === "cartoons") return "Мультфильмы";
};
