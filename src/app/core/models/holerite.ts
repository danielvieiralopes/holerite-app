export interface HoleriteConsulta {
  cpf: string;
  dataNascimento: string; // ISO string
  tipoHolerite: number; // 1=Salario, 2=Adiantamento, etc.
  mesReferencia: number;
  anoReferencia: number;
}
