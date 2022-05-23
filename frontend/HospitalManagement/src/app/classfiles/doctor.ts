import { patient } from "./patient";

export class  doctor{
  did!: number;
  name!: string;
  age!: number;
  gender!: string;
  specialist!: string;
  patient!: patient[];
}
