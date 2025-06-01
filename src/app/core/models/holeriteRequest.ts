import { ETipoHolerite } from "../enums/EtipoHolerite";

export interface HoleriteRequest {
  cpf: string;
  tipoHolerite: ETipoHolerite; 
  mesReferencia: number;
  anoReferencia: number;
}
