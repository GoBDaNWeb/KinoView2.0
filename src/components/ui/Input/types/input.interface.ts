export interface IInputProps {
  onFocus?: () => void;
  onBlur?: () => void;
  onChange: (...event: any[]) => void;
  clearSearchValue: () => void;
  value: string;
  type?: string;
  placeholder?: string;
}
