import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { FuncionarioService } from '../../core/services/funcionario.service';
import { Router } from '@angular/router';
import { Funcionario } from '../../core/models/funcionario';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  imports: [ReactiveFormsModule]
})
export class CadastroFuncionarioComponent {
  form;

  constructor(
    private fb: FormBuilder,
    private funcionarioService: FuncionarioService,
    private router: Router
  ) {this.form =this.fb.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    dataNascimento: ['', Validators.required]
  })}

  onSubmit() {
    if (this.form.invalid) return;
    this.funcionarioService.cadastrar(this.form.value as Funcionario).subscribe({
      next: () => {
        alert('Funcionário cadastrado com sucesso!');
        this.router.navigate(['/funcionarios']);
      },
      error: () => alert('Erro ao cadastrar funcionário.')
    });
  }
}
