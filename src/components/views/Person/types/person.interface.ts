import { IPerson } from "@/api/types/person.interface";

export interface IPersonProps {
  person: IPerson | undefined;
  isLoading: boolean;
}
