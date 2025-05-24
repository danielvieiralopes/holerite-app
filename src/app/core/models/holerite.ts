import { ETipoHolerite } from "../enums/EtipoHolerite";

export interface HoleriteConsulta {
  cpf: string;
  dataNascimento: string; // ISO string
  tipoHolerite: ETipoHolerite; // 1=Salario, 2=Adiantamento, etc.
  mesReferencia: number;
  anoReferencia: number;
}
