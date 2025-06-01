import { ETipoHolerite } from "../enums/EtipoHolerite";

export interface HoleriteResponse {
  id: number;
  nomeFuncionario: string;
  cpf: string;
  mesReferencia: number;
  anoReferencia: number;
  tipoHolerite: ETipoHolerite;
  dataUpload?: string;
}
