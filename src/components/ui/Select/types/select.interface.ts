interface IOptions {
  value: string;
  label: string;
}

export interface ISelectProps {
  onFocus?: () => void;
  onBlur?: () => void;
  onChange: (...event: any[]) => void;
  options: IOptions[];
}
