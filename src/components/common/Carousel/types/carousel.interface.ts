export interface ICarouselProps {
  quantity: number | undefined;
  title: string;
  isAutoPlay?: boolean;
  errorText: string;
  viewQuantity?: boolean;
  slidesPerView?: number;
  contentIsLoading: boolean;
}
