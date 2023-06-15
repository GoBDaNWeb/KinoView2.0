import { FC } from "react";
import { IFilterComponentsProps } from "./../../types/filters.interface";

import styles from "./styles.module.sass";

import { Select } from "@/components/ui/Select";

const genres = [
  { label: "Все жанры", value: "" },
  { label: "Семейные", value: "семейный" },
  { label: "Биографии", value: "биография" },
  { label: "Боевики", value: "боевик" },
  { label: "Вестерны", value: "вестерн" },
  { label: "Военные", value: "военный" },
  { label: "Детективы", value: "детектив" },
  { label: "Детские", value: "детский" },
  { label: "Документальные", value: "документальный" },
  { label: "Драмы", value: "драма" },
  { label: "Исторические", value: "история" },
  { label: "Комедии", value: "комедия" },
  { label: "Короткометражки", value: "короткометражка" },
  { label: "Криминал", value: "криминал" },
  { label: "Мелодрамы", value: "мелодрама" },
  { label: "Музыкальные", value: "музыка" },
  { label: "Мюзиклы", value: "мюзикл" },
  { label: "Новости", value: "новости" },
  { label: "Приключения", value: "приключения" },
  { label: "Спортивные", value: "спорт" },
  { label: "Триллеры", value: "триллер" },
  { label: "Ужасы", value: "ужасы" },
  { label: "Фантастика", value: "фантастика" },
  { label: "Фильмы-нуар", value: "фильм-нуар" },
  { label: "Фэнтези", value: "фэнтези" },
];

const Genres: FC<IFilterComponentsProps> = ({ onChange }) => {
  return (
    <div className={styles.genresFilter}>
      <h5>Жанры</h5>
      <Select options={genres} onChange={onChange} />
    </div>
  );
};

export default Genres;
