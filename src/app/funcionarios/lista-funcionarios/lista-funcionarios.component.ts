import { Router } from "@angular/router";
import { Funcionario } from "../../core/models/funcionario";
import { FuncionarioService } from "../../core/services/funcionario.service";
import { OnInit, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.scss'],
  imports: [FormsModule,CommonModule]
})
export class ListaFuncionariosComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  funcionariosFiltrados: Funcionario[] = [];
  termoPesquisa = '';

  funcionarioEditandoId: number | null = null;
  funcionarioEditadoTemp: Funcionario = {} as Funcionario;

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.carregarFuncionarios();
  }

  carregarFuncionarios() {
    this.funcionarioService.listar().subscribe({
      next: data => {
        this.funcionarios = data;
        this.filtrarFuncionarios();
      },
      error: err => alert('Erro ao carregar funcionários')
    });
  }

  filtrarFuncionarios() {
    const termo = this.termoPesquisa.toLowerCase();
    this.funcionariosFiltrados = this.funcionarios.filter(f =>
      f.nomeFuncionario.toLowerCase().includes(termo)
    );
  }

  editarFuncionario(funcionario: Funcionario) {
    this.funcionarioEditandoId = funcionario.id!;
    this.funcionarioEditadoTemp = { ...funcionario };
  }

  cancelarEdicao() {
    this.funcionarioEditandoId = null;
    this.funcionarioEditadoTemp = {} as Funcionario;
  }

  salvarEdicao() {
    if (this.funcionarioEditadoTemp.id) {
      this.funcionarioService.atualizar(this.funcionarioEditadoTemp).subscribe({
        next: (response) => {  
          this.funcionarioEditandoId = null;
          this.carregarFuncionarios();
        },
        error: (error) => {
          console.error('Erro ao atualizar funcionário:', error);
          alert('Erro ao atualizar funcionário.');
        }
      });
    }
  }

  excluirFuncionario(funcionario: Funcionario) {
  const confirmacao = confirm(`Deseja desativar o funcionário ${funcionario.nomeFuncionario}?`);
  if (confirmacao && funcionario.id) {
    this.funcionarioService.excluir(funcionario.id).subscribe({
      next: (response) => {
        if (response.status === 200 || response.status === 204) {
          // remover localmente da lista
          this.funcionariosFiltrados = this.funcionarios.filter(f => f.id !== funcionario.id);
        } else {
          alert('Erro ao desativar funcionário.');
        }
      },
      error: (error) => {
        console.error('Erro ao desativar funcionário:', error);
        alert('Erro ao desativar funcionário.');
      }
    });
  }
}


}
