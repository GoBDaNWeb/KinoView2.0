export function convertRating(rating: number | undefined) {
  if (rating) return rating.toFixed(1);
  else return "0";
}
