// * react
import React from "react";
import { ISelectProps } from "../types/select.interface";

// * styles
import styles from "./styles.module.sass";

const Select: React.FC<ISelectProps> = ({
  onChange,
  onBlur,
  onFocus,
  options,
}) => {
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

export default Select;
