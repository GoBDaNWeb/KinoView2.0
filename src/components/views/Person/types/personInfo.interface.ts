import { IPersonSpouse } from "@/api/types/person.interface";

interface IAboutPerson {
  career:
    | {
        value: string;
      }[]
    | undefined;
  sex: string | undefined;
  growth: number | undefined;
  birthday: Date | undefined;
  death: Date | undefined;
  totalMovies: number | undefined;
  spouses: IPersonSpouse[] | undefined;
}

export interface IPersonInfoProps {
  aboutPerson: IAboutPerson;
}
