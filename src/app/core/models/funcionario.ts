import { ETipoUsuario } from '../enums/EtipoUsuario';
export interface Funcionario {
  id?: number; // opcional no cadastro
  nomeFuncionario: string;
  cpf: string;
  dataNascimento: string; // ISO string
  tipoUsuario: ETipoUsuario;
  holerites?: any; // pode deixar any ou criar modelo depois
}
