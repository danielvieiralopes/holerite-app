import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../core/services/funcionario.service';
import { Funcionario } from '../../core/models/funcionario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  imports: [CommonModule]
})
export class ListaFuncionariosComponent implements OnInit {
  funcionarios: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit() {
    this.funcionarioService.listar().subscribe({
      next: data => this.funcionarios = data,
      error: err => alert('Erro ao carregar funcionários')
    });
  }
}
