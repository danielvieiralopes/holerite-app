import { ETipoHolerite } from "../enums/EtipoHolerite";

export interface HoleriteConsulta {
  cpf: string;
  tipoHolerite: ETipoHolerite; // 1=Salario, 2=Adiantamento, etc.
  mesReferencia: number;
  anoReferencia: number;
}
