// * react
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IInputProps } from "../types/input.interface";

// * styles
import styles from "./styles.module.sass";

const Input: React.FC<IInputProps> = ({
  onFocus,
  onBlur,
  onChange,
  clearSearchValue,
  value,
  placeholder,
  type = "text",
}) => {
  return (
    <label className={styles.searchInput}>
      <input
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
        value={value}
        placeholder={placeholder}
      />
      {value && (
        <AiOutlineClose
          onClick={() => clearSearchValue()}
          className={styles.iconClose}
        />
      )}
    </label>
  );
};

export default Input;
