export interface IRangeSlider {
  value: number[] | undefined;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number[];
  onChange: () => void;
}
