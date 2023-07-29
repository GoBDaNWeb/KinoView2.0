import { IFilterSubmitProps } from "@/components/common/Filters/types/filters.interface";
import { CSSProperties } from "react";

export interface IButtonProps {
  isDisabled?: boolean;
  func: any;
  customStyles?: CSSProperties;
}
