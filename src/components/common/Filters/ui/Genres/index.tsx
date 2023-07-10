import { FC } from "react";
import { IFilterComponentsProps } from "./../../types/filters.interface";

import { genres } from "@/shared/data/genres";

import styles from "./styles.module.sass";

import { Select } from "@/components/ui/Select";

const Genres: FC<IFilterComponentsProps> = ({ onChange }) => {
  return (
    <div className={styles.genresFilter}>
      <h5>Жанры</h5>
      <Select options={genres} onChange={onChange} />
    </div>
  );
};

export default Genres;
