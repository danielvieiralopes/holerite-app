import { ETipoHolerite } from "../enums/EtipoHolerite";

export interface Holerite {
  id: number;
  nomeFuncionario: string;
  cpf: string;
  mesReferencia: number;
  anoReferencia: number;
  tipoHolerite: ETipoHolerite;
  dataDeRegistro?: string;
}
