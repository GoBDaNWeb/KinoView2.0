import { CSSProperties } from "react";

export interface IButtonProps {
  isDisabled?: boolean;
  func: () => void;
  customStyles?: CSSProperties;
}
