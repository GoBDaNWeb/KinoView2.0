import { FC } from "react";
import { IFilterComponentsProps } from "./../../types/filters.interface";

import styles from "./styles.module.sass";

import { Select } from "@/components/ui/Select";

const sortBy = [
  { label: "Рейтингу", value: "rating.kp" },
  { label: "Году", value: "year" },
];

const SortBy: FC<IFilterComponentsProps> = ({ onChange }) => {
  return (
    <div className={styles.sortByFilter}>
      <h5>Сортировка по</h5>
      <Select options={sortBy} onChange={onChange} />
    </div>
  );
};

export default SortBy;
