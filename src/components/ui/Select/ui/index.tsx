import { FC, memo } from "react";
import { ISelectProps } from "../types/select.interface";

import styles from "./styles.module.sass";

const Select: FC<ISelectProps> = ({ onChange, onBlur, onFocus, options }) => {
  return (
    <select
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      className={styles.select}
    >
      {options.map((option) => (
        <option
          key={option.label}
          className={styles.optionItem}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default memo(Select);
