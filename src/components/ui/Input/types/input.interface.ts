export interface IInputProps {
  onFocus?: () => void;
  onBlur?: () => void;
  onChange: (...event: any[]) => void;
  selectValue?: string;
  clearSearchValue: () => void;
  value: string;
}
