import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.sass";
import { IButtonProps } from "../types/button.interface";

const Button: FC<PropsWithChildren<IButtonProps>> = ({
  children,
  isDisabled,
  func,
  customStyles,
}) => {
  return (
    <button
      style={{ ...customStyles }}
      className={styles.button}
      onClick={() => func()}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
