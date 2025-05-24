export interface Funcionario {
  id?: number; // opcional no cadastro
  nome: string;
  cpf: string;
  dataNascimento: string; // ISO string
  holerites?: any; // pode deixar any ou criar modelo depois
}
