import dayjs from "dayjs";
import "dayjs/locale/ru";
dayjs.locale("ru");

export function convertDate(
  string: string | number | Date | undefined,
  format: string = "DD/MM/YYYY"
) {
  return dayjs(string).format(format);
}
dayjs;
