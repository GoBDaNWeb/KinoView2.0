import { IData } from "@/shared/types/data.interface";

export interface IImage {
  width: number;
  height: number;
  movieId: number;
  previewUrl: string;
  type: string;
  url: string;
}

export interface IImages extends IData {
  docs: IImage[];
}
